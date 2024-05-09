<template>
  <flex
    fit
    :direction="'column'">
    <flex flex='1'>
      <div ref='contentBlockRef' class='content-block'>
        <div ref='contentContainerRef'>
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
      </div>
    </flex>
    <flex @keyup.enter='send'>
      <flex flex='1' style='padding-right: 8px;'>
        <el-input v-model='content' />
      </flex>
      <flex>
        <el-button type='primary' @click='send'>
          发送
        </el-button>
      </flex>
    </flex>
  </flex>
</template>

<script setup lang="ts">
import { AiBaiduMessageService } from '@/services/api';
import { useMessageSocketClient } from '@/services/ws-client/message-client';
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { useBaiduMessageNotify } from './notify-hook';
import { useWindowScrollHook } from './window-scroll-hook';
const { joinRoom, leaveRoom } = useMessageSocketClient();
import { Flex } from 'lc-vue-flex';
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
const contentBlockRef = ref();
const contentContainerRef = ref();

useWindowScrollHook(contentContainerRef, contentBlockRef);

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
  const c = content.value;
  content.value = '';
  await AiBaiduMessageService.create({
    requestBody: {
      content: c,
      sessionId: props.sessionId 
    } 
  });
};
</script>

<style scoped lang="scss">
.content-block{
  overflow: auto;
  height: 100%;
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