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
              prop='unionid'
              label='unionid' />
            <el-table-column
              prop='openid'
              label='openid' />
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
import { WeixinPlatformUserService } from '@/services/api';
import { useRoute } from 'vue-router';

const route = useRoute();

const paginationRef = ref();

// onMounted(() => {
//   paginationRef.value.refresh();
// });

const fetchData = async (option: { pageNo:number, pageSize:number }) => {
  // TODO 接口调用
  // const res: ResourcePaginateSuccessResult = await ResourcesService.paginate(option.pageSize, option.pageNo);
  const res = await WeixinPlatformUserService.paginate({
    pageNo: option.pageNo,
    pageSize: option.pageSize,
    weixinId: route.query.wid
  });

  return {
    list: res.data.list,
    total: res.data.count
  };
};

</script>

<style scoped>

</style>