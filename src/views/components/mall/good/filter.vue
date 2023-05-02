<template>
  <form-grid :model='form' @search='onSearch'>
    MallShopSelect
    <form-grid-item label='商品名称' prop='shopId'>
      <template #default>
        <mall-shop-select v-model='form.shopId' />
      </template>
    </form-grid-item>
    <form-grid-item label='商品名称' prop='title'>
      <template #default>
        <el-input v-model='form.title' placeholder='请输入商品名称' clearable />
      </template>
    </form-grid-item>
  </form-grid>
</template>

<script setup>
import { reactive } from 'vue';
import { FormGrid, FormGridItem } from 'lc-vue-form-filter';
import { cloneDeep } from 'lodash';
import MallShopSelect from '@/views/components/mall/shop/mall-shop-select.vue';

const form = reactive({
  title: '',
  shopId: null 
});

const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', cloneDeep(form));
};

</script>

<style lang="scss" scoped>

</style>