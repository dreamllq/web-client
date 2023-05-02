<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='资源名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入资源名称' :disabled='disabledKeys.includes("name")' />
    </el-form-item>
    <el-form-item label='资源key' prop='key'>
      <el-input v-model='form.key' placeholder='请输入资源key' />
    </el-form-item>
    <el-form-item label='资源描述' prop='desc'>
      <el-input v-model='form.desc' type='textarea' placeholder='请输入描述' />
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
  }
});

const form = reactive({
  name: '',
  key: '',
  desc: ''
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入资源名称' 
    }
  ],
  key: [
    {
      required: true,
      message: '请输入资源key'
    }
  ]
});

onBeforeMount(() => {
  form.key = props.defaultData?.key || '';
  form.name = props.defaultData?.name || '';
  form.desc = props.defaultData?.desc || '';
});

const formRef = ref<FormInstance>();

const getData = async () => {
  const valid = await formRef.value?.validate();
  if (valid) {

    return cloneDeep(form);
  }
};

defineExpose({ getData });
</script>

<style scoped>

</style>