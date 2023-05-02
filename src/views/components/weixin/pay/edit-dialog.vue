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
import { WeixinPayService } from '@/services/api';

const dialogVisible = ref(false);
const formRef = ref<InstanceType<typeof BizForm> | null>(null);
let deferred = null;
let success = false;
let id = '';

const onSubmit = async () => {
  const data = await formRef.value!.getData();

  await WeixinPayService.update({
    id,
    requestBody: {
      mchid: data.mchid,
      name: data.name,
      notifyUrl: data.notifyUrl,
      partnerKey: data.partnerKey,
      pfx: data.pfx.fileId ?? undefined,
      spbillCreateIp: data.spbillCreateIp
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
  mchid: '',
  partnerKey: '',
  notifyUrl: '',
  spbillCreateIp: '' 
});
const loadingDataFlag = ref(false);

const edit = async (data:{ id:string }) => {
  success = false;
  loadingDataFlag.value = true;
  id = data.id;
  deferred = new Deferred();
  dialogVisible.value = true;

  // TODO 接口调用
  const res = await WeixinPayService.get({ id });
  editDefaultData.name = res.data.name;
  editDefaultData.mchid = res.data.mchid;
  editDefaultData.partnerKey = res.data.partnerKey;
  // editDefaultData.pfx = res.data.pfx;
  editDefaultData.notifyUrl = res.data.notifyUrl;
  editDefaultData.spbillCreateIp = res.data.spbillCreateIp;

  loadingDataFlag.value = false;
  return deferred.promise;
};

defineExpose({ edit });
</script>

<style scoped>

</style>