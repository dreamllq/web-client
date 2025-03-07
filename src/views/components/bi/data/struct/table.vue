<template>
  <auto-pagination
    ref='paginationRef'
    :fetch-data='fetchData'
    auto-init
    no-pagination>
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
              prop='type'
              label='字段类型' 
              :formatter='(row, col, val)=> BI_DATA_STRUCT_TYPE_LIST.find(item=>item.value === val)?.label' />
            <el-table-column
              prop='name'
              label='字段名' />
            <el-table-column
              prop='group'
              label='字段分组' />
            <el-table-column
              prop='desc'
              label='字段说明' />
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
import { BiDataStructService } from '@/services/api';
import { useRoute, useRouter } from 'vue-router';
import { BI_DATA_STRUCT_TYPE_LIST } from './constants/bi-data-struct-type';

const router = useRouter();
const route = useRoute();

let filterData: {name?: string} = {};
const paginationRef = ref();

const fetchData = async () => {
  const res = await BiDataStructService.getAll({ path: { metaId: route.query.id as string } });
  return {
    list: res.data?.data,
    total: res.data?.data.length
  };
};

const bizEdit = ref();
const onEdit = async ({ id }:{id:string}) => {
  await bizEdit.value.edit({ id });
  refresh();
};

const onDelete = async ({ id }:{id:string}) => {
  await ElMessageBox.confirm('确认删除吗?', '删除');
  await BiDataStructService.remove({ path: { id } });
  ElMessage.success('删除成功');
  refresh();
};

const filter = (data:{name:string}) => {
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