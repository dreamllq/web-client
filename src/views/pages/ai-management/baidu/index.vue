<template>
  <el-container direction='vertical'>
    <el-aside>
      <el-tabs
        v-model='activeName'
        type='card'
      >
        <el-tab-pane label='账号管理' name='account' />
        <el-tab-pane label='服务管理' name='service' />
        <el-tab-pane label='会话管理' name='session' />
      </el-tabs>
    </el-aside>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <baidu-account v-if='activeName === "account"' />
        <baidu-service v-if='activeName === "service"' />
        <baidu-session v-if='activeName === "session"' />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaiduAccount from '@/views/components/ai-management/baidu/account/index.vue';
import BaiduService from '@/views/components/ai-management/baidu/service/index.vue';
import BaiduSession from '@/views/components/ai-management/baidu/session/index.vue';

const activeName = ref('account');
</script>

<style scoped>

</style>

<route>
  {
    "name":"ai-baidu"
  }
</route>