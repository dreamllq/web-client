<template>
  <form-grid :model='form' @search='onSearch'>
    <form-grid-item label='评论内容' prop='content'>
      <template #default>
        <el-input v-model='form.content' placeholder='请输入评论内容' clearable />
      </template>
    </form-grid-item>
  </form-grid>
</template>

<script setup>
import { reactive } from 'vue';
import { FormGrid, FormGridItem } from 'lc-vue-form-filter';
import { cloneDeep } from 'lodash';

const form = reactive({ content: '' });

const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', cloneDeep(form));
};

</script>

<style lang="scss" scoped>

</style>