<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='支付配置名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入支付配置名称' />
    </el-form-item>
    <el-form-item label='mchid' prop='mchid'>
      <el-input v-model='form.mchid' placeholder='请输入mchid' />
    </el-form-item>
    <el-form-item label='partnerKey' prop='partnerKey'>
      <el-input v-model='form.partnerKey' placeholder='请输入partnerKey' />
    </el-form-item>
    <el-form-item label='pfx' prop='pfx'>
      <single-upload-file v-model='form.pfx' />
    </el-form-item>
    <el-form-item label='notifyUrl' prop='notifyUrl'>
      <el-input v-model='form.notifyUrl' placeholder='请输入notifyUrl' />
    </el-form-item>
    <el-form-item label='spbillCreateIp' prop='spbillCreateIp'>
      <el-input v-model='form.spbillCreateIp' placeholder='请输入spbillCreateIp' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import SingleUploadFile from '@/views/components/common/single-upload-file.vue';

const props = defineProps({
  defaultData: {
    type: Object,
    default: () => ({})
  },
  disabledKeys: {
    type: Array,
    default: () => []
  },
  hiddenKeys: {
    type: Array,
    default: () => []
  }
});

const form = reactive({
  name: '',
  mchid: '',
  partnerKey: '',
  pfx: '',
  notifyUrl: '',
  spbillCreateIp: '' 
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入支付配置名称' 
    }
  ]
});

onBeforeMount(() => {
  form.name = props.defaultData?.name || '';
  form.mchid = props.defaultData?.mchid || '';
  form.partnerKey = props.defaultData?.partnerKey || '';
  form.pfx = props.defaultData?.pfx || '';
  form.notifyUrl = props.defaultData?.notifyUrl || '';
  form.spbillCreateIp = props.defaultData?.spbillCreateIp || '';
});

const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value!.validate();
  return cloneDeep(form);
};

defineExpose({ getData });
</script>

<style scoped>

</style>