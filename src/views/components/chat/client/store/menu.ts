import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

export enum MenuCommandEnum {
  Unknown = 'unknown',
  Chat = 'chat',
  Contacts = 'contacts'
}

export const useMenuState = createGlobalState(
  () => {
    const current = ref<MenuCommandEnum>(MenuCommandEnum.Chat);
    const list = [
      {
        label: '聊天',
        icon: 'ChatDotSquare',
        selectedIcon: 'Comment',
        command: 'chat'
      },
      {
        label: '通讯录',
        icon: 'User',
        selectedIcon: 'UserFilled',
        command: 'contacts'
      }
    ];

    return {
      current,
      list,
      setCurrent(command: MenuCommandEnum) {
        current.value = command;
      }
    };
  }
);