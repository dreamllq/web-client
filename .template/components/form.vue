<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='资源名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入资源名称' />
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
  name: '',
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入资源名称' 
    }
  ],
});

onBeforeMount(() => {
  form.name = props.defaultData?.name || '';
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