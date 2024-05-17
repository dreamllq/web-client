<template>
  <el-dialog
    v-model='dialogVisible'
    title='prompt模板'
    width='90%'
  >
    <div>1</div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref(false);
const accountId = ref<string>();

const show = (data:{accountId:string}) => {
  accountId.value = data.accountId;
  dialogVisible.value = true;
};

defineExpose({ show });
</script>

<style scoped>

</style>