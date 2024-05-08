<template>
  <div>
    <div style='height: 400px;'>
      {{ sessionId }}
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

const send = async () => {
  await AiBaiduMessageService.create({
    requestBody: {
      content: content.value,
      sessionId: props.sessionId 
    } 
  });
};
</script>

<style scoped>

</style>