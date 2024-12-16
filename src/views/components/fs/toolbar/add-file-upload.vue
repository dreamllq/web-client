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
      <el-button
        type='primary'
        :icon='DocumentAdd'
        text />
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { UploadProps, UploadRequestOptions } from 'element-plus';
import { FileService, FsService, PathType } from '@/services/api';
import { DocumentAdd } from '@element-plus/icons-vue';
import { usePathState } from '../store/path';

const { currentFPathId, getPathInfoById } = usePathState();
const upload = ref();
const emit = defineEmits(['update:modelValue']);
const fileInfo = ref();


const httpRequest = async (options: UploadRequestOptions) => {
  const res = await FileService.uploadFile({ formData: { file: options.file } });
  await FsService.create({
    requestBody: {
      fileDetail: { fileId: res.data.fileId },
      name: res.data.entity.originFileName,
      parentId: currentFPathId.value!,
      pathType: PathType.FILE
    }
  });
  getPathInfoById(currentFPathId.value!);
  return res;
};
const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  fileInfo.value = response.data;
  emit('update:modelValue', response.data);
  upload.value!.clearFiles();
};

const handleError: UploadProps['onError'] = (error) => {
  throw error;
};

const click = () => {
  console.log(upload.value);
  
  upload.value!.handleStart();
};

defineExpose({ click });

</script>

<style scoped>

</style>