import { onUnmounted } from 'vue';
import { Subject } from 'rxjs';
import { useMessageSocketClient } from '@/services/ws-client/message-client';
import { useMessageState } from '../store/message';
import { useSessionState } from '../store/session';
import { useContactsState } from '../store/contacts';

export const useNotify = () => {
  const { messageObservable } = useMessageSocketClient();

  const { getByDirection, setLastMessage } = useMessageState();
  const { currentSession, refresh: sessionRefresh, setUnReadStatus } = useSessionState();
  const { refresh: contactsRefresh } = useContactsState();

  
  const newMessageObservable = new Subject();
  const newSessionObservable = new Subject();
  const newFriendObservable = new Subject();

  const subscription = messageObservable.subscribe((data: any) => {
    if (data.module !== 'chat') return;

    if (data.command === 'newMessage') {
      newMessageObservable.next(data.data);
    } else if (data.command === 'newSession') {
      newSessionObservable.next(data.data);
    } else if (data.command === 'newFriend') {
      newFriendObservable.next(data.data);
    }
  });

  const newMessageSubscription = newMessageObservable.subscribe((data: any) => {
    setLastMessage(data.contactsId, data.message);
    if (currentSession.value?.contacts.id === data.contactsId) {
      console.log('newMessage', data);
      getByDirection(data.contactsId, 'backward');
    } else {
      setUnReadStatus(data.contactsId, true);
    }
  });

  const newSessionSubscription = newSessionObservable.subscribe((data: any) => {
    sessionRefresh();
  });

  const newFriendSubscription = newFriendObservable.subscribe(() => {
    contactsRefresh();
  });

  onUnmounted(() => {
    subscription.unsubscribe();
    newMessageSubscription.unsubscribe();
    newSessionSubscription.unsubscribe();
    newFriendSubscription.unsubscribe();
  });
};