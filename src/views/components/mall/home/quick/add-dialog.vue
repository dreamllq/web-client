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
import { cloneDeep } from 'lodash';

const dialogVisible = ref(false);
const formRef = ref<InstanceType<typeof BizForm> | null>(null);
let deferred = null;
let success = false;
let _data = null;

const onSubmit = async () => {
  const data = await formRef.value!.getData();
  // TODO 接口调用
  _data = data;
  success = true;
  dialogVisible.value = false;
  ElMessage.success('创建成功');
};

const onClosed = () => {
  success === true ? deferred.resolve(cloneDeep(_data)) : deferred.reject();
  deferred = null;
};

const create = () => {
  _data = null;
  success = false;
  deferred = new Deferred();
  dialogVisible.value = true;
  return deferred.promise;
};

defineExpose({ create });
</script>

<style scoped>

</style>