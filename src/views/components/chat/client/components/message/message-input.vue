<template>
  <div class='chat-message-input'>
    <div class='message-toolbar'>
      <el-button>
        <el-icon><i-picture /></el-icon>
      </el-button>
      <el-button>
        <el-icon><i-clock /></el-icon>
      </el-button>
    </div>
    <div class='message-text' @click='onInputFocus'>
      <el-input
        ref='inputRef'
        v-model='content'
        type='textarea'
        autosize />
    </div>
    <div class='message-operator'>
      <el-button type='primary' @click='onSend'>
        发送
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSessionState } from '../../store/session';
import { useMessageState } from '../../store/message';
import { Picture as IPicture, Clock as IClock } from '@element-plus/icons-vue';

const { currentSession } = useSessionState();
const { content, sendMessage } = useMessageState();

const onSend = async() => {
  await sendMessage({ contactsId: currentSession.value!.contacts.id });
};

const inputRef = ref();
const onInputFocus = () => {
  inputRef.value.focus();
};
</script>

<style scoped lang="scss">
.chat-message-input{
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;

  .message-toolbar{
    border-bottom: 1px solid #E4E7ED;
    flex: none;
  }

  .message-text{
    flex: 1;
    overflow: auto;
    border-bottom: 1px solid #E4E7ED;
  }

  .message-operator {
    padding: 10px;
    box-sizing: border-box;
    flex: none;
  }
}
</style>