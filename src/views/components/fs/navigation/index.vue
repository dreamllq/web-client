<template>
  <div>
    <el-button
      type='primary'
      :icon='ArrowLeftBold'
      text
      :disabled='!hasPrev' 
      @click='back' />
    <el-button
      type='primary'
      :icon='ArrowRightBold'
      text 
      :disabled='!hasNext' 
      @click='forward' />
    <span> {{ map[currentFPathId!]?.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';
import { usePathState } from '../store/path';
import { useNavigationState } from '../store/navigation';

const { currentFPathId, map } = usePathState();

const { hasPrev, hasNext, back, forward } = useNavigationState();
</script>

<style scoped>

</style>  