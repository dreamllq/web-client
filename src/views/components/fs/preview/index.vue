<template>
  <el-dialog
    v-model='previewVisible'
    title='预览'
    width='900'
    append-to-body
    :close-on-click-modal='false'
  >
    <template v-if='previewVisible'>
      <template v-if='previewF?.pathType === PathType.FILE'>
        <preview-image v-if='imageExt.includes(previewF?.fileDetail.file.ext)' />
      </template>
      <template v-else>
        {{ previewF }}
      </template>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFsGlobalState } from '../store/fs-global';
import PreviewImage from './preview-image.vue';
import { PathType } from '@/services/api';

const imageExt = [
  'png',
  'jpg',
  'jpeg',
  'gif'
];
const { previewVisible, previewF } = useFsGlobalState();
</script>