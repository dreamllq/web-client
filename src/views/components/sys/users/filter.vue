<template>
  <form-grid :model='form' @search='onSearch'>
    <form-grid-item label='用户名' prop='username'>
      <template #default>
        <el-input v-model='form.username' placeholder='请输入用户名' clearable />
      </template>
    </form-grid-item>
  </form-grid>
</template>

<script setup>
import { reactive } from 'vue';
import { FormGrid, FormGridItem } from 'lc-vue-form-filter';
import { cloneDeep } from 'lodash';

const form = reactive({ username: '' });

const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', cloneDeep(form));
};

</script>

<style lang="scss" scoped>

</style>