<template>
  <div>
    <p>{{ previewF?.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFsGlobalState } from '../store/fs-global';

const { previewF } = useFsGlobalState();
</script>

<style scoped>

</style>