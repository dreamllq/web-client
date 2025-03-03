<template>
  <el-container direction='vertical'>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <biz-form />
      </el-main>
    </el-container>

    <el-aside style='text-align: right;'>
      <el-button type='primary'>
        保存
      </el-button>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import BizForm from './form.vue';

</script>

<style scoped>

</style>