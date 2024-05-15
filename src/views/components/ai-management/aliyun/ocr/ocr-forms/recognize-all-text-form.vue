<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='图片类型' prop='type'>
      <orc-recognize-all-text-type-select v-model='form.type' />
    </el-form-item>
    <el-form-item label='文件' prop='fileId'>
      <single-upload v-model:file-id='form.fileId' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import OrcRecognizeAllTextTypeSelect from '../../common/orc-recognize-all-text-type-select/index.vue';
import SingleUpload from '@/views/components/common/single-upload.vue';

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
  type: props.defaultData?.type || '',
  fileId: props.defaultData?.fileId || '' 
});

const rules = reactive<FormRules>({
  type: [
    {
      required: true,
      message: '请选择图片类型' 
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