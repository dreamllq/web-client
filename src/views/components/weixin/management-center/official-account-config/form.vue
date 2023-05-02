<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='token' prop='token'>
      <el-input v-model='form.token' placeholder='请输入token' />
    </el-form-item>
    <el-form-item label='encodingAesKey' prop='encodingAesKey'>
      <el-input v-model='form.encodingAesKey' placeholder='请输入encodingAesKey' />
    </el-form-item>
    <el-form-item label='checkSignature' prop='checkSignature'>
      <el-switch v-model='form.checkSignature' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

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
  token: '',
  encodingAesKey: '',
  checkSignature: false
});

const rules = reactive<FormRules>({
  token: [
    {
      required: true,
      message: '请输入资源名称' 
    }
  ]
});

onBeforeMount(() => {
  form.token = props.defaultData?.token || '';
  form.encodingAesKey = props.defaultData?.encodingAesKey || '';
  form.checkSignature = props.defaultData?.checkSignature || false;
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