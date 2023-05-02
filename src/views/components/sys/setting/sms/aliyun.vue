<template>
  <el-form ref='formRef' :model='form' label-position='top'>
    <el-form-item label='access key id' prop='accessKeyId'>
      <el-input v-model='form.accessKeyId' />
    </el-form-item>
    <el-form-item label='access key secret' prop='accessKeySecret'>
      <el-input v-model='form.accessKeySecret' />
    </el-form-item>
    <el-form-item label='sign name' prop='signName'>
      <el-input v-model='form.signName' />
    </el-form-item>
    <el-form-item label='template id' prop='templateId'>
      <el-input v-model='form.templateId' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { SettingService } from '@/services/api';
import { ElMessage, ElMessageBox } from 'element-plus';
import { reactive, onMounted } from 'vue';

const form = reactive({
  accessKeyId: '',
  accessKeySecret: '',
  signName: '',
  templateId: ''
});

onMounted(async () => {
  const res = await SettingService.getItems({
    keys: [
      'ALIYUN_SMS_ACCESS_KEY_ID',
      'ALIYUN_SMS_ACCESS_KEY_SECRET',
      'ALIYUN_SMS_SIGN_NAME',
      'ALIYUN_SMS_TEMPLATE_ID'
    ] 
  });

  form.accessKeyId = res.data[0]?.value || '';
  form.accessKeySecret = res.data[1]?.value || '';
  form.signName = res.data[2]?.value || '';
  form.templateId = res.data[3]?.value || '';
});

const getData = async () => [
  {
    key: 'ALIYUN_SMS_ACCESS_KEY_ID',
    value: form.accessKeyId 
  },
  {
    key: 'ALIYUN_SMS_ACCESS_KEY_SECRET',
    value: form.accessKeySecret
  },
  {
    key: 'ALIYUN_SMS_SIGN_NAME',
    value: form.signName
  },
  {
    key: 'ALIYUN_SMS_TEMPLATE_ID',
    value: form.templateId
  }
];

defineExpose({ getData });
</script>

<style scoped>

</style>