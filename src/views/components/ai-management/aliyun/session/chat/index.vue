<template>
  <el-dialog
    v-model='dialogVisible'
    title='会话'
    width='90%'
    class='max-height'
    append-to-body
  >
    <div style='height: 100%'>
      <chat-window v-if='dialogVisible' :session-id='sessionId' />
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatWindow from './window.vue';

const dialogVisible = ref(false);
const sessionId = ref();

const show = (data:{ sessionId:string }) => {
  sessionId.value = data.sessionId;
  dialogVisible.value = true;
};

defineExpose({ show });
</script>

<style scoped>

</style>