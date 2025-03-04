<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='规则类型' prop='type'>
      <el-select-v2 v-model='form.type' :options='BI_DATA_RULE_TYPE_LIST' />
    </el-form-item>
    <el-form-item v-if='BiDataRuleType.EXCEL === form.type' label='excel' prop='excelFile'>
      <single-upload-file v-model='form.excelFile' />
    </el-form-item>
    <el-form-item v-if='BiDataRuleType.SQL === form.type' label='sql' prop='sql'>
      <el-input v-model='form.sql' type='textarea' placeholder='请输入sql' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, PropType } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { BiDataRule, BiDataRuleType } from '@/services/api';
import { BI_DATA_RULE_TYPE_LIST } from './constants/bi-data-rule-type';
import SingleUploadFile from '@/views/components/common/single-upload-file.vue';

const props = defineProps({
  defaultData: {
    type: Object as PropType<Partial<BiDataRule>>,
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

const form = ref<Partial<BiDataRule>>({
  type: props.defaultData.type || BiDataRuleType.EXCEL,
  excelFile: undefined,
  sql: props.defaultData.sql || ''
});

const rules = reactive<FormRules>({});

const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value!.validate();
  console.log(form.value);
  
  return {
    type: form.value.type,
    sql: form.value.type === BiDataRuleType.SQL ? form.value.sql : undefined,
    excelFile: form.value.type === BiDataRuleType.EXCEL ? { id: form.value.excelFile?.entity.id } : undefined
  };
};

defineExpose({ getData });
</script>

<style scoped>

</style>