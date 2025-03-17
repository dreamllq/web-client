<template>
  <bi-view-setting-root>
    <bi-view-setting-dashboard />
  </bi-view-setting-root>
</template>

<script setup lang="ts">
import BiViewSettingRoot from '@/views/components/bi/view/setting/root.vue';
import BiViewSettingDashboard from '@/views/components/bi/view/setting/dashboard/index.vue';
</script>

<style scoped>

</style>

<route>
  {
    "name":"bi-view-setting"
  }
</route>