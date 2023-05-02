import { ref, onMounted } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { ChatSession, ChatSessionService } from '@/services/api';

export const useSessionState = createGlobalState(
  () => {
    const list = ref<ChatSession[]>([]);
    const currentSession = ref<ChatSession>();
    const unReadStatus = ref<{[index: string]: boolean}>({});

    onMounted(async () => {
      await refresh();
    });

    const refresh = async () => {
      const res = await ChatSessionService.get();
      list.value = res.data;
    };

    const startMessageSession = async (contactsId:string) => {
      const res = await ChatSessionService.create({ requestBody: { contactsId } });
      currentSession.value = res.data;
      await refresh();
    };

    const setCurrentSession = (session: ChatSession) => {
      currentSession.value = session;
      unReadStatus.value[session.contacts.id] = false;
    };

    const setUnReadStatus = (contactsId:string, status:boolean) => {
      unReadStatus.value[contactsId] = status;
    };

    return {
      list,
      currentSession,
      unReadStatus,
      setUnReadStatus,
      startMessageSession,
      setCurrentSession,
      refresh
    };
  }
);