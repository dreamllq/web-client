<template>
  <div>
    <div class='content-block'>
      {{ sessionId }}
      <template v-for='(item,index) in messageList' :key='index'>
        <p
          class='content'
          :class='{
            "f-right": item.data.role === "user"
          }'>
          <template v-if='item.data.status ==="done"'>
            <span class='content-inner'>
              {{ item.data.content }}
            </span>
          </template>
          <template v-else>
            <span class='content-inner'>...</span>
          </template>
        </p>
      </template>
    </div>
    <div>
      <el-row :gutter='12'>
        <el-col :span='20'>
          <el-input v-model='content' />
        </el-col>
        <el-col :span='4'>
          <el-button type='primary' @click='send'>
            发送
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AiBaiduMessageService } from '@/services/api';
import { useMessageSocketClient } from '@/services/ws-client/message-client';
import { onUnmounted, ref } from 'vue';
import { useBaiduMessageNotify } from './notify-hook';

const { joinRoom, leaveRoom } = useMessageSocketClient();

const props = defineProps({
  sessionId: {
    type: String,
    required: true
  }
});
joinRoom(props.sessionId);

onUnmounted(() => {
  leaveRoom(props.sessionId);
});

const content = ref('');
const messageList = ref<any[]>([]);

useBaiduMessageNotify(props.sessionId, {
  messageCb: (message) => {
    messageList.value.push(message);
  },
  messageChangeCb: (message) => {
    messageList.value.forEach((item, index) => {
      if (item.data.id === message.data.id) {
        messageList.value[index] = message;
      }
    });
  }
});

const send = async () => {
  await AiBaiduMessageService.create({
    requestBody: {
      content: content.value,
      sessionId: props.sessionId 
    } 
  });
  content.value = '';
};
</script>

<style scoped lang="scss">
.content-block{
  height: 400px;
  overflow: auto;
  .content{
    padding-right: 100px;
    .content-inner{
      border: 1px solid #333;
      background-color: #eee;
      color: #333;
      font-size: 12px;
      line-height: 1.4;
      padding: 8px;
      border-radius: 4px;
      display: inline-block;
    }

    &.f-right{
      text-align: right;
      padding-right: 0;
      padding-left: 100px; 
    }
  }
}
</style>