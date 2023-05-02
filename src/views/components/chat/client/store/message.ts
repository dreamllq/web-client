import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { ChatMessageService, ChatMessageCreateDto, User, ChatContacts } from '@/services/api';
import { v4 as uuidv4 } from 'uuid';

export interface Message{
  id: string;
  sending: boolean;
  type: ChatMessageCreateDto.type,
  content: string;
  creator: User,
  contacts: ChatContacts
}

export const useMessageState = createGlobalState(
  () => {
    const content = ref('');
    const loading = ref(false);
    const hasMore = ref(true);
    const list = ref<Message[]>([]);
    const type = ref<ChatMessageCreateDto.type>(ChatMessageCreateDto.type.TEXT);
    const lastMessageMap = ref<{[index: string]: string}>({});

    const refresh = async (data:{contactsId: string}) => {
      hasMore.value = true;
      loading.value = true;
      const res = await ChatMessageService.findWithCursor({
        contactsId: data.contactsId,
        direction: 'forward'
      });

      hasMore.value = res.data.length === 20;
      list.value = res.data.map(item => ({
        id: item.id,
        sending: false,
        type: item.type,
        content: item.content,
        creator: item.creator,
        contacts: item.contacts
      }));
      loading.value = false;
    };

    const getByDirection = async(contactsId: string, direction: 'forward' | 'backward') => {
      if (loading.value === true) return;
      loading.value = true;
      if (direction === 'forward') {
        const res = await ChatMessageService.findWithCursor({
          contactsId: contactsId,
          direction: 'forward',
          fromId: list.value[list.value.length - 1].id
        });
        res.data.forEach(item => {
          list.value.push({
            id: item.id,
            sending: false,
            type: item.type,
            content: item.content,
            creator: item.creator,
            contacts: item.contacts
          });
        });
        hasMore.value = res.data.length === 20;
      } else if (direction === 'backward') {
        const res = await ChatMessageService.findWithCursor({
          contactsId: contactsId,
          direction: 'backward',
          fromId: list.value.length > 0 ? list.value[0].id : undefined
        });
        res.data.forEach(item => {
          list.value.unshift({
            id: item.id,
            sending: false,
            type: item.type,
            content: item.content,
            creator: item.creator,
            contacts: item.contacts
          });
        });
        console.log(list.value);
      }
      loading.value = false;
    };

    const sendMessage = async (data:{ contactsId: string }) => {
      if (!content.value.trim()) return;
      const id = uuidv4();
      await ChatMessageService.create({
        requestBody: {
          contactsId: data.contactsId,
          content: content.value,
          id,
          type: type.value
        }
      });
      content.value = '';
    };

    const setLastMessage = (contactsId:string, message:string) => {
      lastMessageMap.value[contactsId] = message;
    };

    return {
      content,
      type,
      list,
      lastMessageMap,
      hasMore,
      loading,
      sendMessage,
      refresh,
      getByDirection,
      setLastMessage
    };
  }
);