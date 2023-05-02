<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='角色名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入角色名称' :disabled='disabledKeys.includes("name")' />
    </el-form-item>
    <el-form-item label='角色描述' prop='desc'>
      <el-input v-model='form.desc' placeholder='请输入角色描述' type='textarea' />
    </el-form-item>

    <el-form-item label='资源' prop='resourceIds'>
      <resource-select v-model='form.resourceIds' multiple />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import ResourceSelect from '@/views/components/sys/resources/resource-select.vue';

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
  resourceIds: [],
  desc: ''
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
  form.desc = props.defaultData?.desc || '';
  form.resourceIds = props.defaultData?.resourceIds || [];
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