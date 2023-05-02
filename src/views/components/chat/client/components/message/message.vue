<template>
  <div class='chat-message'>
    <div class='chat-message-header'>
      {{ currentSession?.contacts.contacts.nickName }}
    </div>
    <div class='chat-message-content'>
      <chat-message-list />
    </div>
    <div class='chat-message-input-area'>
      <chat-message-input />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatMessageList from './message-list.vue';
import ChatMessageInput from './message-input.vue';
import { useSessionState } from '../../store/session';

const { currentSession } = useSessionState();

</script>

<style scoped lang="scss">
.chat-message {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .chat-message-header{
    line-height: 52px;
    border-bottom: 1px solid #E4E7ED;
    flex: none;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .chat-message-content{
    border-bottom: 1px solid #E4E7ED;
    flex: 1;
    overflow: hidden;
  }

  .chat-message-input-area{
    height: 200px;
    flex: none;
  }
}
</style>