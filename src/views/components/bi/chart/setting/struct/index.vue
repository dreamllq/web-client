<template>
  <div v-if='ready'>
    <template v-for='item in columns' :key='item.field'>
      <div v-if='item.struct'>
        {{ item.struct.name }}
      </div>
      <div v-else>
        {{ item.field }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useBiChartSettingStore } from '../store/index';

const { ready, columns } = useBiChartSettingStore()!;
</script>

<style scoped>

</style>