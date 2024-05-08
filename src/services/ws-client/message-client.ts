import { io } from 'socket.io-client';
import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { getToken } from '@/services/token';
import { Subject } from 'rxjs';

export const useMessageSocketClient = createGlobalState(
  () => {
    const _connected = ref(false);
    const messageObservable = new Subject();
    const socket = io('/message', { auth: { token: getToken() } });

    socket.on('connect', () => {
      _connected.value = true;
    });
      
    socket.on('disconnect', () => {
      _connected.value = false;
    });

    socket.on('message', (data, cb) => {
      cb({ wid: data.wid });
      messageObservable.next(data);
    });

    const joinRoom = (roomId:string) => {
      socket.emit('join-room', { roomId });
    };

    const leaveRoom = (roomId:string) => {
      socket.emit('leave-room', { roomId });
    };

    return {
      messageObservable,
      joinRoom,
      leaveRoom
    };
  }
);