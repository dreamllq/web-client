<template>
  <auto-pagination ref='paginationRef' :fetch-data='fetchData' auto-init>
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
              label='账号'>
              <template #default='{row}'>
                {{ row.account.name }}
              </template>
            </el-table-column>
            <el-table-column
              label='服务'>
              <template #default='{row}'>
                {{ row.service.name }}
              </template>
            </el-table-column>
            <el-table-column
              prop='createDate'
              label='创建时间' />
            <el-table-column label='操作'>
              <template #default='{row}'>
                <el-button link type='primary' @click='onEdit(row)'>
                  编辑
                </el-button>
                <el-button link type='danger' @click='onDelete(row)'>
                  删除
                </el-button>
                <el-button link type='primary' @click='onChat(row)'>
                  聊天
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <biz-edit-dialog ref='bizEdit' />
          <chat-dialog ref='chatDialogRef' />
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
import { AiBaiduSessionService } from '@/services/api';
import ChatDialog from './chat/index.vue';

let filterData = {};
const paginationRef = ref();

const fetchData = async (option: { pageNo:number, pageSize:number }) => {
  // TODO 接口调用
  const res = await AiBaiduSessionService.paginate({ query: option });
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
  // TODO 接口调用
  await AiBaiduSessionService.remove({ path: { id } });
  ElMessage.success('删除成功');
  refresh();
};

const chatDialogRef = ref();
const onChat = (row) => {
  chatDialogRef.value.show({ sessionId: row.id });
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