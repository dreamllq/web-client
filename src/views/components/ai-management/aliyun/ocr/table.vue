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
              label='文件'>
              <template #default='{row}'>
                <el-image
                  v-if='row.recognizeAllText.file.ext === "png" || row.recognizeAllText.file.ext ==="jpg" || row.recognizeAllText.file.ext === "jpeg" || row.recognizeAllText.file.ext ==="gif"'
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
                <el-button
                  v-else
                  link
                  tag='a'
                  type='primary'
                  :href='`/api/file/static/${row.recognizeAllText.file.id}`'
                  target='_blank'>
                  查看
                </el-button>
              </template>
            </el-table-column>
            <el-table-column label='操作'>
              <template #default='{row}'>
                <el-button
                  v-if='row.recognizeAllText.result'
                  link
                  type='primary'
                  @click='onResultView(row)'>
                  识别结果
                </el-button>
                <el-button
                  v-else
                  link
                  type='primary'
                  @click='onOperate(row)'>
                  ocr识别
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </auto-height-wrapper> 
      <result-view-dialog ref='resultViewDialogRef' />
    </template>
  </auto-pagination>
</template>

<script setup lang="ts">
import { AutoPagination } from 'lc-vue-auto-pagination';
import { AutoHeightWrapper } from 'lc-vue-auto-height-wrapper';
import { ref, onMounted } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { AiAliyunOcr, AiAliyunOcrService } from '@/services/api';
import ResultViewDialog from './result-view-dialog.vue';
import { ro } from 'element-plus/es/locale';

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

const onOperate = async (row:AiAliyunOcr) => {
  await AiAliyunOcrService.operate({ id: row.id });
  ElMessage.success('操作成功');
  refresh();
};

const resultViewDialogRef = ref();
const onResultView = async(row:AiAliyunOcr) => {
  resultViewDialogRef.value.show({ result: JSON.stringify(JSON.parse(row.recognizeAllText.result), null, 2) });
};

defineExpose({ 
  refresh,
  filter  
});
</script>

<style scoped>

</style>