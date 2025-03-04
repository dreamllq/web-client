<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='图表名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入图表名称' />
    </el-form-item>
    <el-form-item label='图表数据' prop='dataId'>
      <bi-data-select v-model='form.dataId' placeholder='请选择图表数据' />
    </el-form-item>
    <el-form-item label='数据描述' prop='desc'>
      <el-input v-model='form.desc' type='textarea' placeholder='请输入数据描述' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import BiDataSelect from '../../data/meta/bi-data-select.vue';
import { BiChartMeta } from '@/services/api';

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

const form = ref({
  name: props.defaultData.name || '',
  dataId: props.defaultData.data?.id || '',
  desc: props.defaultData.desc || ''
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入图表名称' 
    }
  ],
  dataId: [
    {
      required: true,
      message: '请选择图表数据' 
    }
  ]
});

const formRef = ref<FormInstance>();

const getData = async (): Promise<Partial<BiChartMeta>> => {
  await formRef.value!.validate();
  return {
    name: form.value.name,
    desc: form.value.desc,
    data: { id: form.value.dataId }
  };
};

defineExpose({ getData });
</script>

<style scoped>

</style>