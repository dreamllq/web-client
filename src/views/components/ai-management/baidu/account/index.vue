<template>
  <el-container direction='vertical'>
    <el-aside>
      <biz-filter @search='onSearch' />
    </el-aside>
    <el-aside style='margin-top: 24px'>
      <el-button @click='onAdd'>
        创建
      </el-button>
      <el-button type='primary' @click='onOpenWeb'>
        百度千帆平台<el-icon class='el-icon--right'>
          <e-view />
        </el-icon>
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
import BizFilter from './filter.vue';
import BizTable from './table.vue';
import BizAddDialog from './add-dialog.vue';
import { View as EView } from '@element-plus/icons-vue';
const bizTableRef = ref();
const bizAdd = ref();

const onSearch = (filter) => {
  bizTableRef.value.filter(filter);
};

const onAdd = async () => {
  await bizAdd.value.create();
  bizTableRef.value.refresh();
};

const onOpenWeb = () => {
  window.open('https://console.bce.baidu.com/qianfan/overview', '_blank');
};
</script>

<style lang="scss" scoped>

</style>

<route>
  {
    "name":"ai-baidu"
  }
</route>