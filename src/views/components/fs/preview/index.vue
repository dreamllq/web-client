<template>
  <el-dialog
    v-model='previewVisible'
    title='预览'
    width='900'
    :class='customClass'
    :fullscreen='fullscreen'
    append-to-body
    :close-on-click-modal='false'
    @open='bodyVisible = true'
    @closed='bodyVisible = false'
  >
    <template v-if='bodyVisible'>
      <template v-if='previewF?.pathType === PathType.FILE'>
        <preview-image v-if='isImage(previewF?.fileDetail?.file?.ext!)' />
        <preview-excel v-else-if='isExcel(previewF?.fileDetail?.file?.ext!)' />
      </template>
      <template v-else>
        {{ previewF }}
      </template>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useFsGlobalState } from '../store/fs-global';
import { isImage, isExcel } from '@/utils/validator';
import PreviewImage from './preview-image.vue';
import PreviewExcel from './preview-excel.vue';
import { PathType } from '@/services/api';

const bodyVisible = ref(false);

const { previewVisible, previewF } = useFsGlobalState();
const fullscreen = computed(() => isExcel(previewF.value?.fileDetail?.file?.ext));
const customClass = computed(() => ({ 'excel': isExcel(previewF.value?.fileDetail?.file?.ext) }));
</script>

<style lang="scss">
.el-dialog.is-fullscreen.excel{
  display: flex;
  flex-direction: column;

  .el-dialog__body{
    flex: 1;
    overflow: hidden;
  }
}
</style>