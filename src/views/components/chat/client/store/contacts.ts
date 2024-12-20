import { ref, onMounted, computed } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { ChatContactsService, ChatContacts, ChatContactsTypeEnum } from '@/services/api';

export const useContactsState = createGlobalState(
  () => {
    const list = ref<ChatContacts[]>([]);

    const friendList = computed(() => list.value.filter(item => item.status === ChatContactsTypeEnum.PASSED));
    const newFriendList = computed(() => list.value.filter(item => item.status !== ChatContactsTypeEnum.PASSED));
    const currentSelect = ref<ChatContacts>();

    onMounted(async () => {
      await refresh();
    });

    const refresh = async () => {
      const res = await ChatContactsService.get();
      list.value = res.data?.data;
    };

    const addContacts = async (contactsId:string) => {
      await ChatContactsService.create({ body: { contactsId } });
      await refresh();
    };

    const agree = async (id:string) => {
      await ChatContactsService.updateStatus({
        path: { id },
        body: { status: ChatContactsTypeEnum.PASSED }
      });
      await refresh();
    };  

    const refuse = async (id:string) => {
      await ChatContactsService.updateStatus({
        path: { id },
        body: { status: ChatContactsTypeEnum.REFUSE }
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