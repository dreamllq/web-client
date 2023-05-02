<template>
  <div class='chat-session'>
    <div class='chat-session-header'>
      <el-input placeholder='请输入' />
    </div>
    <div class='chat-session-list'>
      <template v-for='item in list' :key='item.id'>
        <chat-session-item :info='item' />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatSessionItem from './session-item.vue';
import { useSessionState } from '../../store/session';
const { list } = useSessionState();
</script>

<style scoped lang="scss">
.chat-session{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .chat-session-header{
    padding: 10px;
    border-bottom: 1px solid #E4E7ED;
  }

  .chat-session-list{
    flex: 1;
    overflow: hidden;
  }
}
</style>