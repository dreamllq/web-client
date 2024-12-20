<template>
  <div>
    <el-row justify='center'>
      <el-card style='width: 500px;position: fixed; top: 50%; transform: translateX(0) translateY(-50%);'>
        <template #header>
          <div class='card-header'>
            <span>登录</span>
          </div>
        </template>
        <el-tabs
          v-model='activeName'
        >
          <el-tab-pane label='用户名密码登录' name='login'>
            <el-form label-position='top'>
              <el-form-item label='用户名'>
                <el-input v-model='adminUserForm.username' clearable />
              </el-form-item>
              <el-form-item label='密码'>
                <el-input v-model='adminUserForm.password' type='password' clearable />
              </el-form-item>
              <el-form-item>
                <el-button @click='onAdminUserSubmit'>
                  确认
                </el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label='手机验证码登录' name='loginBySmsCode'>
            <el-form label-position='top'>
              <el-form-item label='手机号'>
                <el-input v-model='loginSmsCodeForm.mobile' />
              </el-form-item>
              <el-form-item label='验证码'>
                <el-input v-model='loginSmsCodeForm.code'>
                  <template #append>
                    <el-button @click='onGetCode'>
                      获取验证码
                    </el-button>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click='onSmsCodeLogin'>
                  确认
                </el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import sha256 from 'crypto-js/sha256';
import { setToken } from '@/services/token';
import { AuthService, SmsService } from '@/services/api';
import { ElMessage } from 'element-plus';

const activeName = ref('login');

const adminUserForm = reactive({
  username: 'admin',
  password: '123456'
});

const loginSmsCodeForm = reactive({
  mobile: '',
  code: ''
});

const onAdminUserSubmit = async () => {
  const res = await AuthService.login({
    body: {
      password: sha256(adminUserForm.password).toString(),
      username: adminUserForm.username 
    }
  });
  setToken(res.data?.data.access_token);
  window.location.href = '/web';
};

const onGetCode = async () => {
  await SmsService.sendCode({
    path: {
      phone: loginSmsCodeForm.mobile,
      type: 'login' 
    }
  });
  ElMessage.success('验证码已发送');
};

const onSmsCodeLogin = async() => {
  const res = await AuthService.loginBySmsCode({
    body: {
      code: loginSmsCodeForm.code,
      mobile: loginSmsCodeForm.mobile 
    } 
  });
  setToken(res.data.access_token);
  window.location.href = '/web';
};
</script>

<style lang="scss" scoped>

</style>