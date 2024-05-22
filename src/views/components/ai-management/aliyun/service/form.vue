<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='服务名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入服务名称' />
    </el-form-item>
    <el-form-item label='接口endpoint' prop='endpoint'>
      <el-input v-model='form.endpoint' placeholder='请输入接口地址' />
    </el-form-item>
    <el-form-item label='接口path' prop='path'>
      <el-input v-model='form.path' placeholder='请输入接口地址' />
    </el-form-item>
    <el-form-item label='model' prop='model'>
      <el-input v-model='form.model' placeholder='请输入model' />
    </el-form-item>
    <el-form-item label='服务类型' prop='typeId'>
      <service-type-select v-model='form.typeId' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import ServiceTypeSelect from '../../common/service-type-select/index.vue';

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
  endpoint: props.defaultData?.endpoint || '',
  path: props.defaultData?.path || '',
  model: props.defaultData?.model || '',
  typeId: props.defaultData?.typeId || ''
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入服务名称' 
    }
  ],
  typeId: [
    {
      required: true,
      message: '请输入服务类型' 
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