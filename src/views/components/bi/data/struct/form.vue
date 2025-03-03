<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='字段类型' prop='type'>
      <el-select-v2 v-model='form.type' :options='BI_DATA_STRUCT_TYPE_LIST' />
    </el-form-item>
    <el-form-item label='字段名' prop='name'>
      <el-input v-model='form.name' placeholder='请输入字段名' />
    </el-form-item>
    <el-form-item label='字段分组' prop='group'>
      <el-input v-model='form.group' placeholder='请输入字段分组' />
    </el-form-item>
    <el-form-item label='数据描述' prop='desc'>
      <el-input v-model='form.desc' type='textarea' placeholder='请输入数据描述' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount, PropType } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { BI_DATA_STRUCT_TYPE_LIST } from './constants/bi-data-struct-type';
import { BiDataStruct, BiDataStructType } from '@/services/api';

const props = defineProps({
  defaultData: {
    type: Object as PropType<Partial<BiDataStruct>>,
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

const form = ref<Partial<BiDataStruct>>({
  type: props.defaultData.type || BiDataStructType.TEXT,
  name: props.defaultData.name || '',
  group: props.defaultData.group || '',
  desc: props.defaultData.desc || ''
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入字段名' 
    }
  ]
});

const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value!.validate();
  return cloneDeep(form.value);
};

defineExpose({ getData });
</script>

<style scoped>

</style>