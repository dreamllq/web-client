import { useMessageSocketClient } from '@/services/ws-client/message-client';
import { Subject } from 'rxjs';
import { onUnmounted } from 'vue';
export const useBaiduMessageNotify = (sessionId:string, options:{messageCb?: (data:any)=>void, messageChangeCb?: (data:any)=>void}) => {
  const { messageObservable: socketMessageObservable } = useMessageSocketClient();

  const messageObservable = new Subject();
  const messageChangeObservable = new Subject();

  const subscription = socketMessageObservable.subscribe((data: any) => {
    if (data.module !== 'aiAliyunMessage') return;
    if (data.data.sessionId !== sessionId) return;

    if (data.command === 'message') {
      messageObservable.next(data);
    } else if (data.command === 'message-change') {
      messageChangeObservable.next(data);
    }
  });

  const messageSubscription = messageObservable.subscribe((data: any) => {
    options.messageCb?.(data);
  });

  const messageChangeSubscription = messageChangeObservable.subscribe((data: any) => {
    options.messageChangeCb?.(data);
  });

  onUnmounted(() => {
    subscription.unsubscribe();
    messageSubscription.unsubscribe();
    messageChangeSubscription.unsubscribe();
  });
};