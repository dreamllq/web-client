<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='轮播名称' prop='name'>
      <el-input v-model='form.name' placeholder='轮播名称' />
    </el-form-item>
    <el-form-item label='轮播图片' prop='image'>
      <biz-single-upload v-model='form.image' />
    </el-form-item>
    <el-form-item label='轮播Key' prop='key'>
      <el-input v-model='form.key' placeholder='轮播Key' />
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
  image: '',
  key: '' 
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入名称' 
    }
  ],
  image: [
    {
      required: true,
      message: '请选择图片'
    }
  ],
  key: [
    {
      required: true,
      message: '请输入key'
    }
  ]
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