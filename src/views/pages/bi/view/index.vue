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
        <biz-add-dialog ref='bizAdd' />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BizFilter from '@/views/components/bi/view/meta/filter.vue';
import BizTable from '@/views/components/bi/view/meta/table.vue';
import BizAddDialog from '@/views/components/bi/view/meta/add-dialog.vue';

const bizTableRef = ref();
const bizAdd = ref();

const onSearch = (filter) => {
  bizTableRef.value.filter(filter);
};

const onAdd = async () => {
  await bizAdd.value.create();
  bizTableRef.value.refresh();
};
</script>

<style lang="scss" scoped>

</style>

<route>
  {
    "name":"bi-view"
  }
</route>