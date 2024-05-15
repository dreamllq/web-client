<template>
  <el-dialog
    v-model='dialogVisible'
    title='结果查看'
    width='900px'
  >
    <div style='height: 500px'>
      <code-editor :default-value='result' read-only />
    </div>
    <template #footer>
      <span class='dialog-footer'>
        <el-button @click='dialogVisible = false'>关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CodeEditor from '@/views/components/common/code-editor.vue';

const result = ref('');

const dialogVisible = ref(false);


const show = (data:{ result:string }) => {
  result.value = data.result;
  dialogVisible.value = true;
};

defineExpose({ show });
</script>

<style scoped>

</style>