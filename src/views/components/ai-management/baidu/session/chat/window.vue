<template>
  <div>
    <div class='content-block'>
      {{ sessionId }}
      <template v-for='(item,index) in messageList' :key='index'>
        <p
          class='content'
          :class='{
            "f-right": item.role === "user"
          }'>
          <template v-if='item.status ==="done"'>
            <span class='content-inner'>
              {{ item.content }}
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
import { onMounted, onUnmounted, ref } from 'vue';
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
    messageList.value.push({
      id: message.data.id,
      role: message.data.role,
      status: message.data.status,
      content: message.data.content
    });
  },
  messageChangeCb: (message) => {
    messageList.value.forEach((item, index) => {
      if (item.id === message.data.id) {
        messageList.value[index] = {
          id: message.data.id,
          role: message.data.role,
          status: message.data.status,
          content: message.data.content
        };
      }
    });
  }
});

onMounted(async() => {
  const res = await AiBaiduMessageService.getHistory({ sessionId: props.sessionId });
  res.data.forEach(item => {
    messageList.value.push({
      id: item.id,
      role: item.role,
      status: item.status,
      content: item.content
    });
  });
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