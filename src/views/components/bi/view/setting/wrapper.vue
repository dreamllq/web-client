<template>
  <slot v-if='ready' />
</template>

<script setup lang="ts">

import { BiViewSettingService } from '@/services/api';
import { useBiViewSettingStore } from '@/views/components/bi/view/setting/store';

const { toJson, biViewSettingId, viewMateId, ready } = useBiViewSettingStore()!;
const save = async () => {
  console.log(biViewSettingId.value, toJson());
  const config = toJson();

  if (biViewSettingId.value) {
    await BiViewSettingService.update({
      path: { id: biViewSettingId.value },
      body: { config: JSON.stringify(config) }
    });
  } else {
    await BiViewSettingService.create({
      path: { metaId: viewMateId },
      body: { config: JSON.stringify(config) }
    });
  }

  // if (biChartSettingId.value) {
  //   await BiChartSettingService.update({
  //     path: { id: biChartSettingId.value },
  //     body: { config: JSON.stringify(config) }
  //   });
  // } else {
  //   await BiChartSettingService.create({
  //     path: { metaId: chartMateId },
  //     body: { config: JSON.stringify(config) }
  //   });
  // }
};

defineExpose({ save });
</script>

<style scoped>

</style>