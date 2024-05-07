<template>
  <el-container direction='vertical'>
    <el-aside>
      <el-tabs
        v-model='activeName'
        type='card'
      >
        <el-tab-pane label='账号管理' name='account' />
        <el-tab-pane label='模型管理' name='model' />
      </el-tabs>
    </el-aside>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <baidu-account v-if='activeName === "account"' />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaiduAccount from '@/views/components/ai-management/baidu/account/index.vue';

const activeName = ref('account');
</script>

<style scoped>

</style>