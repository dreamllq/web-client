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
              prop='nickName'
              label='昵称' />
            <el-table-column
              prop='username'
              label='用户名' />
            <el-table-column
              prop='mobile'
              label='手机号' />
            <el-table-column
              prop='createDate'
              label='创建时间' />
            <el-table-column label='操作'>
              <template #default='{row}'>
                <el-button
                  v-if='row.isSuper === false'
                  link
                  type='primary'
                  @click='onEdit(row)'>
                  编辑
                </el-button>
                <el-button
                  v-if='row.isSuper === false'
                  link
                  type='danger'
                  @click='onDelete(row)'>
                  删除
                </el-button>
              </template>
            </el-table-column>
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
import { ElMessageBox, ElMessage } from 'element-plus';
import BizEditDialog from './edit-dialog.vue';
import { UsersService } from '@/services/api';

let filterData = {};

const paginationRef = ref();

onMounted(() => {
  paginationRef.value.refresh();
});

const fetchData = async (option: { pageNo:number, pageSize:number }) => {
  const res = await UsersService.paginate({
    ...option,
    username: filterData.username 
  });
  return {
    list: res.data.list,
    total: res.data.count
  };
};

const bizEdit = ref();
const onEdit = async ({ id }) => {
  await bizEdit.value.edit({ id });
  refresh();
};

const onDelete = async ({ id }) => {
  await ElMessageBox.confirm('确认删除吗?', '删除');
  // TODO 接口调用
  await UsersService.remove({ id });
  ElMessage.success('删除成功');
  refresh();
};

const filter = (data) => {
  filterData = data;
  refresh();
};

const refresh = () => {
  paginationRef.value.refresh();
};



defineExpose({
  refresh,
  filter 
});
</script>

<style scoped>

</style>