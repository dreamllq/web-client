<template>
  <auto-pagination ref='paginationRef' :fetch-data='fetchData'>
    <template #default='{data, indexMethod}'>
      <auto-height-wrapper>
        <template #default='{size}'>
          <el-table :data='data' :height='size.height'>
            <el-table-column
              type='index'
              :index='indexMethod'
              width='60'
              label='序号' />
            <el-table-column
              prop='name'
              label='名称' />
            <el-table-column
              prop='key'
              label='资源key' />
            <el-table-column
              prop='desc'
              label='资源描述' />
            <el-table-column
              prop='createDate'
              label='创建时间' />
          </el-table>
          <biz-edit-dialog ref='bizEdit' />
        </template>
      </auto-height-wrapper> 
    </template>
  </auto-pagination>
</template>

<script setup lang="ts">
import { AutoPagination } from 'lc-vue-auto-pagination';
import { AutoHeightWrapper } from 'lc-vue-auto-height-wrapper';
import { ref, onMounted } from 'vue';
import { ResourcesService, ResourcePaginateSuccessResult } from '@/services/api';
import { ElMessageBox, ElMessage } from 'element-plus';
import BizEditDialog from './edit-dialog.vue';

let filterData = {};
const paginationRef = ref();

onMounted(() => {
  paginationRef.value.refresh();
});

const fetchData = async (option: { pageNo:number, pageSize:number }) => {
  const res = await ResourcesService.paginate({
    query: {
      ...option,
      name: filterData.name 
    }
  });

  return {
    list: res.data?.data.list,
    total: res.data?.data.count
  };
};

const bizEdit = ref();
const onEdit = async ({ id }) => {
  await bizEdit.value.edit({ id });
  refresh();
};

const onDelete = async ({ id }) => {
  await ElMessageBox.confirm('确认删除吗?', '删除');
  await ResourcesService.remove({ path: { id } });
  ElMessage.success('删除成功');
  refresh();
};

const refresh = () => {
  paginationRef.value.refresh();
};
const filter = (data) => {
  filterData = data;
  refresh();
};
defineExpose({
  refresh,
  filter 
});
</script>

<style scoped>

</style>