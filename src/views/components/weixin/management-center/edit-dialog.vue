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
      :disabled-keys='["name", "appid"]' />
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
import { ref } from 'vue';
import BizForm from './form.vue';
import Deferred from 'simple-deferred2';
import { ElMessage } from 'element-plus';
import { WeixinService } from '@/services/api';

const dialogVisible = ref(false);
const formRef = ref<InstanceType<typeof BizForm> | null>(null);
let deferred = null;
let success = false;
let id = '';

const onSubmit = async () => {
  const data = await formRef.value!.getData();

  await WeixinService.update({
    path: { id },
    body: {
      appSecret: data.appSecret,
      appType: data.appType
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

const editDefaultData = ref({
  name: '',
  appType: '',
  appid: '',
  appSecret: ''
});
const loadingDataFlag = ref(false);

const edit = async (data:{id:string}) => {
  success = false;
  loadingDataFlag.value = true;
  id = data.id;
  deferred = new Deferred();
  dialogVisible.value = true;

  // TODO 接口调用
  const res = await WeixinService.get({ path: { id } });
  editDefaultData.value.name = res.data?.data.name;
  editDefaultData.value.appType = res.data?.data.appType;
  editDefaultData.value.appid = res.data?.data.appid;
  editDefaultData.value.appSecret = res.data?.data.appSecret;

  loadingDataFlag.value = false;
  return deferred.promise;
};

defineExpose({ edit });
</script>

<style scoped>

</style>