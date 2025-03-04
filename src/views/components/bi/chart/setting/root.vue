<template>
  <slot />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProvideBiChartSettingStore } from './store/index';

const route = useRoute();

useProvideBiChartSettingStore(route.query.id as string);
</script>

<style scoped>

</style>