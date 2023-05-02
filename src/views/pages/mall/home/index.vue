<template>
  <el-tabs
    v-model='activeName'
    type='card'
  >
    <el-tab-pane label='轮播管理' name='carousel'>
      <carousel v-if='activeName === "carousel"' />
    </el-tab-pane>
    <el-tab-pane label='快捷功能管理' name='quick'>
      <quick v-if='activeName === "quick"' />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Carousel from '@/views/components/mall/home/carousel/carousel.vue';
import Quick from '@/views/components/mall/home/quick/quick.vue';

const activeName = ref('carousel');
</script>

<style scoped>

</style>

<route>
  {
    "name":"mall-home",
  }
</route>