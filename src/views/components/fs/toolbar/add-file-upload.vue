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
        ref='upButtonRef'
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
import { useBlockContextMenuState } from '../store/block-context-menu';

const { currentFPathId, getPathInfoById, currentFId } = usePathState();
const upload = ref();
const emit = defineEmits(['update:modelValue']);
const fileInfo = ref();
const upButtonRef = ref();
const { triggerFId } = useBlockContextMenuState();

const httpRequest = async (options: UploadRequestOptions) => {
  const res = await FileService.uploadFile({ body: { file: options.file } });
  await FsService.create({
    body: {
      fileDetail: { fileId: res.data?.data.fileId },
      name: res.data?.data.entity.originFileName,
      parentId: triggerFId.value!,
      pathType: PathType.FILE
    }
  });
  getPathInfoById(triggerFId.value!);
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
  upButtonRef.value.ref.click();
};

defineExpose({ click });

</script>

<style scoped>

</style>