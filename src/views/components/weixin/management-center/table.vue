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
              prop='appid'
              label='appid' />
            <el-table-column
              prop='appType'
              label='类型' />
            <el-table-column
              prop='createDate'
              label='创建时间' />
            <el-table-column label='操作'>
              <template #default='{row}'>
                <el-button link type='primary' @click='onManagement(row)'>
                  管理
                </el-button>
                <el-button link type='primary' @click='onEdit(row)'>
                  编辑
                </el-button>
                <el-button link type='danger' @click='onDelete(row)'>
                  删除
                </el-button>
                <el-button
                  v-if='row.appType === WeixinAppTypeEnum.OFFICIAL_ACCOUNT'
                  link
                  type='primary'
                  @click='onOfficialAccountConfig(row)'>
                  配置
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <biz-edit-dialog ref='bizEdit' />
          <official-account-config-edit-dialog ref='officialAccountConfigEdit' />
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
import { WeixinService } from '@/services/api';
import { WeixinAppTypeEnum } from './type';
import OfficialAccountConfigEditDialog from './official-account-config/edit-dialog.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let filterData:{name?: string} = {};
const paginationRef = ref();

// onMounted(() => {
//   paginationRef.value.refresh();
// });

const fetchData = async ({ pageNo, pageSize }: { pageNo:number, pageSize:number }) => {
  // TODO 接口调用
  // const res: ResourcePaginateSuccessResult = await ResourcesService.paginate(option.pageSize, option.pageNo);

  const res = await WeixinService.paginate({
    pageNo,
    pageSize,
    name: filterData.name 
  });
  return {
    list: res.data.list,
    total: res.data.count
  };
};

const onManagement = (row) => {
  if (row.appType === 'mp') {
    router.push({
      name: 'mini-program-management-info',
      query: { wid: row.id }
    });
  } else if (row.appType === 'official_account') {
    router.push({
      name: 'official-account-management-info',
      query: { wid: row.id }
    });
  }
};

const bizEdit = ref();
const onEdit = async ({ id }) => {
  await bizEdit.value.edit({ id });
  refresh();
};

const onDelete = async ({ id }) => {
  await ElMessageBox.confirm('确认删除吗?', '删除');
  await WeixinService.remove({ id });
  ElMessage.success('删除成功');
  refresh();
};

const filter = (data) => {
  filterData = data;
  refresh();
};

const officialAccountConfigEdit = ref<InstanceType<typeof OfficialAccountConfigEditDialog> | null>(null);
const onOfficialAccountConfig = async (row) => {
  await officialAccountConfigEdit.value?.edit(row);
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