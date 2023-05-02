<template>
  <div class='chat-friend'>
    <div class='chat-friend-header'>
      联系人信息
    </div>
    
    <div class='friend-info'>
      <p>
        <img :src='currentSelect?.contacts.headimg' alt=''>
      </p>
      昵称：{{ currentSelect?.contacts.nickName }}
      <!-- {{ currentSelect }} -->
    </div>
    
    <div style='text-align: center;'>
      <el-button type='primary' @click='onSendMessage'>
        发消息
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContactsState } from '../../../store/contacts';
import { useSessionState } from '../../../store/session';
import { useMenuState, MenuCommandEnum } from '../../../store/menu';
import { MainStatusEnum, useMainState } from '../../../store/main';

const { currentSelect } = useContactsState();
const { startMessageSession } = useSessionState();
const { setCurrent } = useMenuState();
const { setStatus } = useMainState();

const onSendMessage = async () => {
  await startMessageSession(currentSelect.value!.id);
  setCurrent(MenuCommandEnum.Chat);
  setStatus(MainStatusEnum.Message);
};
</script>

<style scoped lang="scss">
.chat-friend{
  height: 100%;

  .chat-friend-header{
    line-height: 52px;
    border-bottom: 1px solid #E4E7ED;
    flex: none;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .friend-info{
    margin: 20px auto;
    width: 400px;

    img{
      width: 50px;
      height: 50px;
    }
  }
}
</style>