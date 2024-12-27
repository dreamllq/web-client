<template>
  <div>
    <p>{{ previewF?.name }}</p>
    <p>{{ bytesToSize(previewF?.fileDetail?.file?.size || 0) }}</p>
    <p>上次修改时间：{{ previewF?.fileDetail?.file?.updateDate }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFsGlobalState } from '../store/fs-global';

const { previewF } = useFsGlobalState();
function bytesToSize(bytes:number) {
  const sizes = [
    'Bytes',
    'KB',
    'MB',
    'GB',
    'TB'
  ];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
  return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
}
</script>

<style scoped>

</style>