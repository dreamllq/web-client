<template>
  <bi-chart-setting-root>
    <el-container style='border: 1px solid var(--el-border-color);'>
      <el-aside width='200px' style='border-right: 1px solid var(--el-border-color);'>
        <bi-data-struct />
      </el-aside>
      <el-aside width='200px' style='border-right: 1px solid var(--el-border-color);'>
        Aside
      </el-aside>
      <el-main style='padding: 0;'>
        <el-container direction='vertical'>
          <el-aside>
            1
          </el-aside>
          <el-main style='padding: 0;'>
            2
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </bi-chart-setting-root>
</template>

<script setup lang="ts">
import BiChartSettingRoot from '@/views/components/bi/chart/setting/root.vue';
import BiDataStruct from '@/views/components/bi/chart/setting/struct/index.vue';
</script>

<style scoped>

</style>

<route>
  {
    "name":"bi-chart-setting"
  }
</route>