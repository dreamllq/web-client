<template>
  <el-upload
    ref='upload'
    :limit='1'
    :http-request='httpRequest'
    :show-file-list='false'
    :on-success='handleAvatarSuccess'
    :on-error='handleError'
  >
    <template #trigger>
      <el-button type='primary'>
        select file
      </el-button>
    </template>
    <template #tip>
      <div class='el-upload__tip text-red'>
        {{ fileInfo }}
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { UploadProps, UploadRequestOptions } from 'element-plus';
import { FileService } from '@/services/api';

const upload = ref();
const emit = defineEmits(['update:modelValue']);
const fileInfo = ref();


const httpRequest = async (options: UploadRequestOptions) => await FileService.uploadFile({ formData: { file: options.file } });
const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  fileInfo.value = response.data;
  emit('update:modelValue', response.data);
  upload.value!.clearFiles();
};

const handleError: UploadProps['onError'] = (error) => {
  throw error;
};

</script>

<style scoped>

</style>