<template>
  <el-dialog
    v-model='dialogVisible'
    title='创建'
    width='500px'
    @closed='onClosed'
  >
    <biz-form v-if='dialogVisible' ref='formRef' />
    <template #footer>
      <span class='dialog-footer'>
        <el-button @click='dialogVisible = false'>取消</el-button>
        <el-button type='primary' @click='onSubmit'>
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BizForm from './form.vue';
import Deferred from 'simple-deferred2';
import { ElMessage } from 'element-plus';
import { BiViewMetaService } from '@/services/api';

const dialogVisible = ref(false);
const formRef = ref<InstanceType<typeof BizForm> | null>(null);
let deferred = null;
let success = false;

const bizData = ref();
const onSubmit = async () => {
  const data = await formRef.value!.getData();
  console.log(data);
  bizData.value = data;
  success = true;
  dialogVisible.value = false;
  ElMessage.success('创建成功');
};

const onClosed = () => {
  success === true ? deferred.resolve(bizData.value) : deferred.reject();
  deferred = null;
};

const create = () => {
  success = false;
  deferred = new Deferred();
  dialogVisible.value = true;
  return deferred.promise;
};

defineExpose({ create });
</script>

<style scoped>

</style>