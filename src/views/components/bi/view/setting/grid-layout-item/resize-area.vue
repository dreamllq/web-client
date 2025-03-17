<template>
  <div
    class='item-resize-area'
    :data-id='uuid'
    data-type='item-resize'
    data-biz='grid'>
    <el-icon><bottom-right /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useBiViewSettingStore } from '../store';

defineProps({
  uuid: {
    type: String,
    required: true
  }
});

</script>

<style scoped style="scss">
.item-resize-area{
  position: absolute;
  bottom:0;
  right:0;
  width: 20px;
  height: 20px;
}
</style>