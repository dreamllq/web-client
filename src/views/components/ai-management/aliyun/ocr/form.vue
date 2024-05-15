<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入名称' />
    </el-form-item>
    <el-form-item label='账号' prop='accountId'>
      <account-select v-model='form.accountId' />
    </el-form-item>
    <el-form-item label='操作类型' prop='type'>
      <ocr-operate-select v-model='form.type' />
    </el-form-item>
    <recognize-all-text-form v-if='form.type === AliyunOcrOperates.RECOGNIZE_ALL_TEXT' ref='recognizeAllTextFormRef' />
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import AccountSelect from '../common/account-select/index.vue';
import OcrOperateSelect from '../common/ocr-operate-select/index.vue';
import RecognizeAllTextForm from './ocr-forms/recognize-all-text-form.vue';
import { AliyunOcrOperates } from '@/services/api';

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
  name: props.defaultData?.name || '',
  accountId: props.defaultData?.accountId || '',
  type: props.defaultData?.type || ''
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入名称' 
    }
  ],
  accountId: [
    {
      required: true,
      message: '请选择账号' 
    }
  ],
  type: [
    {
      required: true,
      message: '请选在操作类型' 
    }
  ]
});

const formRef = ref<FormInstance>();

const recognizeAllTextFormRef = ref();

const getData = async () => {
  await formRef.value!.validate();
  const data:any = {};

  if (form.type === AliyunOcrOperates.RECOGNIZE_ALL_TEXT) {
    data.recognizeAllText = await recognizeAllTextFormRef.value.getData();
  }

  return {
    ...form,
    ...data 
  };
};

defineExpose({ getData });
</script>

<style scoped>

</style>