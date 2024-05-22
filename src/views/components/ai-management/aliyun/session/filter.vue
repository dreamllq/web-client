<template>
  <form-grid :model='form' @search='onSearch'>
    <form-grid-item label='资源名称' prop='name'>
      <template #default>
        <el-input v-model='form.name' placeholder='请输入资源名称' clearable/>
      </template>
    </form-grid-item>
  </form-grid>
</template>

<script setup>
import { reactive } from 'vue';
import { FormGrid, FormGridItem } from 'lc-vue-form-filter';
import { cloneDeep } from 'lodash';

const form = reactive({ name: '' });

const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', cloneDeep(form));
};

</script>

<style lang="scss" scoped>

</style>