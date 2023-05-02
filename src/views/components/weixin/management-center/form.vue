<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入名称' />
    </el-form-item>
    <el-form-item label='类型' prop='appType'>
      <el-select v-model='form.appType'>
        <el-option :value='WeixinAppTypeEnum.APP' label='客户端' />
        <el-option :value='WeixinAppTypeEnum.MP' label='小程序' />
        <el-option :value='WeixinAppTypeEnum.OFFICIAL_ACCOUNT' label='公众号' />
        <el-option :value='WeixinAppTypeEnum.WEB' label='网页应用' />
      </el-select>
    </el-form-item>
    <el-form-item label='appid' prop='appid'>
      <el-input v-model='form.appid' placeholder='请输入appid' />
    </el-form-item>
    <el-form-item label='appSecret' prop='appSecret'>
      <el-input v-model='form.appSecret' placeholder='请输入appSecret' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { WeixinAppTypeEnum } from './type';

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
  appType: '',
  appid: '',
  appSecret: ''
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入名称' 
    }
  ],
  appType: [
    {
      required: true,
      message: '请输入类型' 
    }
  ],
  appid: [
    {
      required: true,
      message: '请输入appid' 
    }
  ],
  appSecret: [
    {
      required: true,
      message: '请输入appSecret' 
    }
  ]
});

onBeforeMount(() => {
  form.name = props.defaultData?.name || '';
  form.appType = props.defaultData?.appType || '';
  form.appid = props.defaultData?.appid || '';
  form.appSecret = props.defaultData?.appSecret || '';
});

const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value?.validate();
  return cloneDeep(form);
};

defineExpose({ getData });
</script>

<style scoped>

</style>