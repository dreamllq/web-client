<template>
  <el-upload
    v-model:file-list='fileList'
    class='multiple-upload'
    :http-request='httpRequest'
    list-type='picture-card'
    :on-preview='handlePictureCardPreview'
    :on-success='handleAvatarSuccess'
    :on-remove='handleRemove'
  >
    <el-icon><plus /></el-icon>
  </el-upload>

  <el-dialog v-model='dialogVisible'>
    <img style='width: 100%' :src='dialogImageUrl' alt='Preview Image'>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, PropType, Ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import type { UploadProps, UploadUserFile, UploadRequestOptions } from 'element-plus';
import { FileService } from '@/services/api';
import { cloneDeep } from 'lodash';



const props = defineProps({
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']);


const fileList: Ref<any[]> = ref([]);


onMounted(() => {
  fileList.value = props.modelValue.map(url => ({ url }));
});

const dialogImageUrl = ref('');
const dialogVisible = ref(false);

const httpRequest = async (options: UploadRequestOptions) => {
  let res = await FileService.uploadFile({ body: { file: options.file } });
  return {
    url: res.data?.data.url,
    name: res.data?.data.id
  };
};

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};

const handleAvatarSuccess: UploadProps['onSuccess'] = () => {
  let list = fileList.value.map(file => {
    if (file.response) {
      return file.response.url;
    } else {
      return file.url;
    }
  });

  emit('update:modelValue', list);
};

const handleRemove: UploadProps['onRemove'] = () => {
  let list = fileList.value.map(file => {
    if (file.response) {
      return file.response.url;
    } else {
      return file.url;
    }
  });

  emit('update:modelValue', list);
};

</script>

<style lang="scss">
.multiple-upload{
  .el-upload-list--picture-card{
    --el-upload-list-picture-card-size: 100px
  }
  .el-upload--picture-card{
    --el-upload-picture-card-size: 100px
  }
}
</style>