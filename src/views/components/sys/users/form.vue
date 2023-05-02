<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='用户名' prop='username'>
      <el-input v-model='form.username' placeholder='请输入用户名' />
    </el-form-item>
    <el-form-item v-if='!hiddenKeys.includes("password")' label='密码' prop='password'>
      <el-input v-model='form.password' placeholder='请输入密码' />
    </el-form-item>
    <el-form-item label='昵称' prop='nickName'>
      <el-input v-model='form.nickName' placeholder='请输入昵称' />
    </el-form-item>
    <el-form-item label='手机号' prop='mobile'>
      <el-input v-model='form.mobile' placeholder='请输入手机号' />
    </el-form-item>
    <el-form-item label='头像' prop='headimg'>
      <biz-single-upload v-model='form.headimg' />
    </el-form-item>

    <el-form-item label='角色' prop='roleIds'>
      <role-select v-model='form.roleIds' multiple />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import sha256 from 'crypto-js/sha256';
import RoleSelect from '@/views/components/sys/roles/role-select.vue';
import { cloneDeep } from 'lodash';
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
  username: '',
  password: '',
  roleIds: [],
  nickName: '',
  mobile: '',
  headimg: ''
});

const rules = reactive<FormRules>({});

onBeforeMount(() => {
  form.username = props.defaultData?.username || '';
  form.nickName = props.defaultData?.nickName || '';
  form.roleIds = props.defaultData?.roleIds || [];
  form.mobile = props.defaultData?.mobile || '';
  form.headimg = props.defaultData?.headimg || '';
});

const formRef = ref<FormInstance>();

const getData = async () => {
  const valid = await formRef.value?.validate();
  if (valid) {
    return {
      username: form.username,
      nickName: form.nickName,
      password: sha256(form.password).toString(),
      roleIds: cloneDeep(form.roleIds),
      mobile: form.mobile,
      headimg: form.headimg
    };
  }
};

defineExpose({ getData });
</script>

<style scoped>

</style>