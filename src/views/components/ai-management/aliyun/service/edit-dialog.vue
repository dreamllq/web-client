<template>
  <el-dialog
    v-model='dialogVisible'
    title='编辑'
    width='500px'
    @closed='onClosed'
  >
    <biz-form
      v-if='dialogVisible === true && loadingDataFlag === false'
      ref='formRef'
      :default-data='editDefaultData'
      :disabled-keys='["name"]' />
    <div v-else v-loading='true' style='height: 50px;' />
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
import { ref, reactive } from 'vue';
import BizForm from './form.vue';
import Deferred from 'simple-deferred2';
import { ElMessage } from 'element-plus';
import { AiAliyunServiceService } from '@/services/api';
import { mode } from 'crypto-js';

const dialogVisible = ref(false);
const formRef = ref<InstanceType<typeof BizForm> | null>(null);
let deferred = null;
let success = false;
let id = '';

const onSubmit = async () => {
  const data = await formRef.value!.getData();

  // TODO 接口调用
  await AiAliyunServiceService.update({
    id,
    body: {
      name: data.name,
      endpoint: data.endpoint,
      path: data.path,
      model: data.model,
      typeId: data.typeId
    } 
  });
  success = true;
  dialogVisible.value = false;
  ElMessage.success('编辑成功');
};

const onClosed = () => {
  success === true ? deferred.resolve() : deferred.reject();
  deferred = null;
};

const editDefaultData = reactive({
  name: '',
  endpoint: '',
  path: '',
  model: '',
  typeId: ''
});
const loadingDataFlag = ref(false);

const edit = async (data:{ id:string }) => {
  success = false;
  loadingDataFlag.value = true;
  id = data.id;
  deferred = new Deferred();
  dialogVisible.value = true;

  // TODO 接口调用
  const res = await AiAliyunServiceService.get({ id });
  editDefaultData.name = res.data.name;  
  editDefaultData.endpoint = res.data.endpoint;  
  editDefaultData.path = res.data.path;  
  editDefaultData.model = res.data.model;
  editDefaultData.typeId = res.data.type.id;  

  loadingDataFlag.value = false;
  return deferred.promise;
};

defineExpose({ edit });
</script>

<style scoped>

</style>