<template>
  <slot />
</template>

<script setup lang="ts">
import { BiChartSettingService } from '@/services/api';
import { useBiChartSettingStore } from './store';


const { toJson, biChartSettingId, chartMateId } = useBiChartSettingStore()!;
const save = async () => {
  console.log(toJson());
  const config = toJson();
  if (biChartSettingId.value) {
    await BiChartSettingService.update({
      path: { id: biChartSettingId.value },
      body: { config: JSON.stringify(config) }
    });
  } else {
    await BiChartSettingService.create({
      path: { metaId: chartMateId },
      body: { config: JSON.stringify(config) }
    });
  }
};

defineExpose({ save });
</script>

<style scoped>

</style>