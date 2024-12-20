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
              prop='id'
              label='ID' />
            <el-table-column
              prop='to.id'
              label='评论的评论Id' />
            <el-table-column
              prop='content'
              label='评论内容' />
            <el-table-column
              prop='creator.nickName'
              label='评论人' />
            <el-table-column
              prop='createDate'
              label='创建时间' />
            <el-table-column label='操作'>
              <template #default='{row}'>
                <el-button link type='danger' @click='onDelete(row)'>
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
import { ForumCommentService } from '@/services/api';

const props = defineProps({
  postId: {
    type: String,
    required: true
  }
});

let filterData:{content?:string} = {};
const paginationRef = ref();

const fetchData = async (option: { pageNo:number, pageSize:number }) => {
  const res = await ForumCommentService.paginate({
    query: {
      postId: props.postId,
      pageNo: option.pageNo,
      pageSize: option.pageSize,
      content: filterData.content
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

const onDelete = async ({ id }:{id:string}) => {
  await ElMessageBox.confirm('确认删除吗?', '删除');
  await ForumCommentService.remove({ path: { id } });
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