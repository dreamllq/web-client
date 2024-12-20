import { ref, onMounted, computed } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { ChatContactsService, ChatContacts } from '@/services/api';

export const useContactsState = createGlobalState(
  () => {
    const list = ref<ChatContacts[]>([]);

    const friendList = computed(() => list.value.filter(item => item.status === ChatContacts.status.PASSED));
    const newFriendList = computed(() => list.value.filter(item => item.status !== ChatContacts.status.PASSED));
    const currentSelect = ref<ChatContacts>();

    onMounted(async () => {
      await refresh();
    });

    const refresh = async () => {
      const res = await ChatContactsService.get();
      list.value = res.data;
    };

    const addContacts = async (contactsId:string) => {
      await ChatContactsService.create({ body: { contactsId } });
      await refresh();
    };

    const agree = async (id:string) => {
      await ChatContactsService.updateStatus({
        id,
        body: { status: ChatContacts.status.PASSED }
      });
      await refresh();
    };  

    const refuse = async (id:string) => {
      await ChatContactsService.updateStatus({
        id,
        body: { status: ChatContacts.status.REFUSE }
      });
      await refresh();
    };

    const setCurrent = (data:ChatContacts) => {
      currentSelect.value = data;
    };

    return {
      list,
      friendList,
      newFriendList,
      currentSelect,
      addContacts,
      agree,
      refuse,
      setCurrent,
      refresh
    };
  }
);