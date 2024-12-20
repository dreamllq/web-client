<template>
  <div>
    <el-row justify='center'>
      <el-card>
        <template #header>
          <div class='card-header'>
            <span>初始化超级管理员</span>
          </div>
        </template>
        <el-form inline>
          <el-form-item label='用户名'>
            <el-input v-model='adminUserForm.username' />
          </el-form-item>
          <el-form-item label='密码'>
            <el-input v-model='adminUserForm.password' />
          </el-form-item>
          <el-form-item>
            <el-button @click='onAdminUserSubmit'>
              确认
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import sha256 from 'crypto-js/sha256';
import { InitializationService } from '@/services/api';
const adminUserForm = reactive({
  username: '',
  password: ''
});

const onAdminUserSubmit = async () => {
  await InitializationService.createSuperAdmin({
    body: {
      username: adminUserForm.username,
      password: sha256(adminUserForm.password).toString()
    } 
  });
};
</script>

<style lang="scss" scoped>

</style>