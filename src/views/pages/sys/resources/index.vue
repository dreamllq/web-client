<template>
  <el-container direction='vertical'>
    <el-aside>
      <biz-filter @search='onSearch' />
    </el-aside>
    <el-aside style='margin-top: 24px'>
      <el-button @click='onAdd'>
        创建
      </el-button>
    </el-aside>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <biz-table ref='bizTableRef' /> 
        <biz-add-dialog ref='addRef' />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BizTable from '@/views/components/sys/resources/table.vue';
import BizAddDialog from '@/views/components/sys/resources/add-dialog.vue';
import BizFilter from '@/views/components/sys/resources/filter.vue';

const addRef = ref();
const bizTableRef = ref();
const onAdd = async () => {
  await addRef.value.create();
  bizTableRef.value.refresh();
};
const onSearch = (filter:object) => {
  bizTableRef.value.filter(filter);
};
</script>

<style lang="scss" scoped>

</style>

<route>
  {
    "name":"sys-resources",
    "meta": {
      "permission":"resources_read"
    }
  }
</route>