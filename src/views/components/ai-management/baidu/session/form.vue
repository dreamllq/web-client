<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='会话名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入会话名称' />
    </el-form-item>
    <el-form-item label='服务' prop='serviceId'>
      <service-select v-model='form.serviceId' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import ServiceSelect from '../common/service-select/index.vue';

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
  serviceId: props.defaultData?.serviceId || '' 
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入会话名称' 
    }
  ],
  serviceId: [
    {
      required: true,
      message: '请选择服务' 
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