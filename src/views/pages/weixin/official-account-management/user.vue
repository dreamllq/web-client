<template>
  <el-container direction='vertical'>
    <el-container>
      <el-main style='padding: 0'>
        <biz-table />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import BizTable from '@/views/components/weixin/official-account-management/user/table.vue';

</script>

<style scoped>

</style>

<route>
  {
    "name": "official-account-management-users"
  }
</route>