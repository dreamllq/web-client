<template>
  <form-grid :model='form' @search='onSearch'>
    <form-grid-item label='帖子标题' prop='title'>
      <template #default>
        <forum-section-select v-model='form.sectionId' />
      </template>
    </form-grid-item>
    <form-grid-item label='帖子标题' prop='title'>
      <template #default>
        <el-input v-model='form.title' placeholder='请输入帖子标题' clearable />
      </template>
    </form-grid-item>
  </form-grid>
</template>

<script setup>
import { reactive } from 'vue';
import { FormGrid, FormGridItem } from 'lc-vue-form-filter';
import { cloneDeep } from 'lodash';
import ForumSectionSelect from '@/views/components/forum/section/forum-section-select.vue';


const form = reactive({
  title: '',
  sectionId: null 
});

const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', cloneDeep(form));
};

</script>

<style lang="scss" scoped>

</style>