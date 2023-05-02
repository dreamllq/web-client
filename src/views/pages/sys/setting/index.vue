<template>
  <el-container direction='vertical'>
    <el-aside>
      <el-tabs
        v-model='activeName'
        type='card'
        class='demo-tabs'
      >
        <el-tab-pane label='短信服务' name='sms' />
      </el-tabs>
    </el-aside>
    
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <template v-if='activeName === "sms"'>
          <sms />
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sms from '@/views/components/sys/setting/sms/index.vue';

const activeName = ref('sms');
</script>

<style scoped>

</style>

<route>
  {
    "name":"sys-setting"
  }
</route>