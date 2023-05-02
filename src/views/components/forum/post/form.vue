<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='帖子标题' prop='sectionId'>
      <forum-section-select v-model='form.sectionId' :disabled='disabledKeys.includes("sectionId")' />
    </el-form-item>
    <el-form-item label='帖子标题' prop='title'>
      <el-input v-model='form.title' placeholder='请输入帖子标题' />
    </el-form-item>
    <el-form-item label='帖子内容' prop='content'>
      <el-input v-model='form.content' type='textarea' placeholder='请输入帖子内容' />
    </el-form-item>
    <el-form-item label='图片上传' prop='images'>
      <biz-multiple-upload v-model='form.images' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount, PropType } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import ForumSectionSelect from '@/views/components/forum/section/forum-section-select.vue';
import BizMultipleUpload from '@/views/components/common/multiple-upload.vue';
import { ForumPostCreateDto } from '@/services/api';

const props = defineProps({
  defaultData: {
    type: Object as PropType<ForumPostCreateDto>,
    default: () => ({})
  },
  disabledKeys: {
    type: Array,
    default: () => []
  },
  hiddenKeys: {
    type: Array,
    default: () => []
  }
});

const form:{sectionId: string | null, title: string, content: string, images: string[]} = reactive({
  sectionId: '',
  title: '',
  content: '',
  images: []
});

const rules = reactive<FormRules>({
  sectionId: [
    {
      required: true,
      message: '请选择板块' 
    }
  ],
  content: [
    {
      required: true,
      message: '请填写帖子内容' 
    }
  ]
});

onBeforeMount(() => {
  form.title = props.defaultData.title || '';
  form.content = props.defaultData.content || '';
  form.sectionId = props.defaultData.sectionId || null;
  form.images = props.defaultData.images || [];
});

const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value!.validate();
  return cloneDeep(form);
};

defineExpose({ getData });
</script>

<style scoped>

</style>