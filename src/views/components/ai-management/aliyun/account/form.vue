<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入名称' />
    </el-form-item>
    <el-form-item label='accessKey' prop='accessKey'>
      <el-input v-model='form.accessKey' placeholder='请输入accessKey' />
    </el-form-item>
    <el-form-item label='secretKey' prop='secretKey'>
      <el-input v-model='form.secretKey' placeholder='请输入secretKey' />
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
  name: props.defaultData?.name || '',
  accessKey: props.defaultData?.accessKey || '',
  secretKey: props.defaultData?.secretKey || '' 
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入资源名称' 
    }
  ],
  accessKey: [
    {
      required: true,
      message: '请输入accessKey' 
    }
  ],
  secretKey: [
    {
      required: true,
      message: '请输入secretKey' 
    }
  ]
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