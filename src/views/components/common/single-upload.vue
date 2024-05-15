<template>
  <el-upload
    class='avatar-uploader'
    :http-request='httpRequest'
    :show-file-list='false'
    :before-upload='beforeAvatarUpload'
    :on-success='handleAvatarSuccess'
    :on-error='handleError'
  >
    <el-icon v-if='uploading' class='avatar-uploader-icon is-loading'>
      <loading />
    </el-icon>
    <img v-else-if='imageUrl' :src='imageUrl' class='avatar'>
    <el-icon v-else class='avatar-uploader-icon'>
      <plus />
    </el-icon>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { Plus, Loading } from '@element-plus/icons-vue';
import type { UploadProps, UploadRequestOptions } from 'element-plus';
import { FileService } from '@/services/api';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'update:fileId']);

const imageUrl = ref('');
const uploading = ref(false);


watchEffect(() => {
  imageUrl.value = props.modelValue;
});


const httpRequest = async (options: UploadRequestOptions) => await FileService.uploadFile({ formData: { file: options.file } });

const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  imageUrl.value = response.data.url;
  uploading.value = false;
  emit('update:modelValue', imageUrl.value);
  emit('update:fileId', response.data.fileId);
};

const handleError: UploadProps['onError'] = (error) => {
  uploading.value = false;
  throw error;
};

const beforeAvatarUpload: UploadProps['beforeUpload'] = () => {
  uploading.value = true;
  return true;
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  display: inline-block;
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
