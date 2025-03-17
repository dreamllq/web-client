<template>
  <slot />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProvideBiViewSettingStore } from './store/index';

const route = useRoute();
useProvideBiViewSettingStore(route.query.id as string);
</script>

<style scoped>

</style>