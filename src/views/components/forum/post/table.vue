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
              prop='title'
              label='名称' />
            <el-table-column
              prop='section.name'
              label='板块' />
            <el-table-column
              prop='creator.nickName'
              label='创建人' />
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
                <el-button link type='primary' @click='onCommentManagement(row)'>
                  评论管理
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
import { ForumPostService } from '@/services/api';
import { useRouter } from 'vue-router';


const router = useRouter();
let filterData:{title?:string, sectionId?:string} = {};
const paginationRef = ref();

const fetchData = async (option: { pageNo:number, pageSize:number }) => {
  const res = await ForumPostService.paginate({
    pageNo: option.pageNo,
    pageSize: option.pageSize,
    relationSection: true,
    sectionId: filterData.sectionId,
    title: filterData.title
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
  await ForumPostService.remove({ id });
  ElMessage.success('删除成功');
  refresh();
};

const onCommentManagement = async ({ id }:{id:string}) => {
  router.push({
    name: 'forum-comment',
    query: { postId: id }
  });
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