<template>
  <el-image
    v-if='ready'
    style='max-width: 100%;'
    :src='src'
    fit='scale-down' />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useFsGlobalState } from '../store/fs-global';
import { FileStaticService } from '@/services/api';

const { previewF } = useFsGlobalState();
const ready = ref(false);
const src = ref('');

onMounted(async () => {
  const res = await FileStaticService.view({
    path: { id: previewF.value?.fileDetail.file.id },
    responseType: 'blob' 
  });
  src.value = URL.createObjectURL(res.data as Blob);
  ready.value = true;
});
</script>

<style scoped>

</style>