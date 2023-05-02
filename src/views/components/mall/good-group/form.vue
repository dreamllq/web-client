<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='分组名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入分组名称' />
    </el-form-item>
    <el-form-item label='分组头像' prop='headimg'>
      <biz-single-upload v-model='form.headimg' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import BizSingleUpload from '@/views/components/common/single-upload.vue';

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
  headimg: '' 
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入资源名称' 
    }
  ]
});

onBeforeMount(() => {
  form.name = props.defaultData?.name || '';
  form.headimg = props.defaultData?.headimg || '';
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