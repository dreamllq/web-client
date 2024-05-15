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
              label='ocr操作'>
              <template #default='{row}'>
                {{ row.type }}-{{ row.recognizeAllText.type }}
              </template>
            </el-table-column>
            <el-table-column
              label='图片'>
              <template #default='{row}'>
                <el-image
                  style='width: 30px; height: 30px'
                  :src='`/api/file/static/${row.recognizeAllText.file.id}`'
                  :zoom-rate='1.2'
                  :max-scale='7'
                  :min-scale='0.2'
                  :preview-src-list='[`/api/file/static/${row.recognizeAllText.file.id}`]'
                  :initial-index='4'
                  fit='cover'
                  preview-teleported
                />
              </template>
            </el-table-column>
            <el-table-column
              prop='createDate'
              label='创建时间' />
          </el-table>
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
import { AiAliyunOcrService } from '@/services/api';


let filterData = {};
const paginationRef = ref();

const fetchData = async (option: { pageNo:number, pageSize:number }) => {
  const res = await AiAliyunOcrService.paginate({
    pageNo: option.pageNo,
    pageSize: option.pageSize 
  });

  return {
    list: res.data.list,
    total: res.data.count
  };
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