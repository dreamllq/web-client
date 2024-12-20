<template>
  <el-container class='container'>
    <el-container style='overflow: hidden;'>
      <el-aside width='300px' class='aside'>
        <good-group-tree ref='treeRef' @current-change='onCurrentChange' />
      </el-aside>
      <el-container>
        <el-main style='padding: 0 0 0 24px'>
          <el-button @click='onAdd'>
            创建
          </el-button>
          <el-button v-if='currentGroupData' @click='onEdit'>
            编辑
          </el-button>
          <el-button v-if='currentGroupData' type='danger' @click='onDelete'>
            删除
          </el-button>
          <el-form v-if='currentGroupData' label-position='top' style='margin-top: 16px'>
            <el-form-item label='分组名'>
              {{ currentGroupData.name }}
            </el-form-item>
            <el-form-item label='分组头像'>
              <img :src='currentGroupData.headimg' alt=''>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
  <biz-add-dialog ref='bizAdd' />
  <biz-edit-dialog ref='bizEdit' />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GoodGroupTree from '@/views/components/mall/good-group/group-tree.vue';
import BizAddDialog from '@/views/components/mall/good-group/add-dialog.vue';
import BizEditDialog from '@/views/components/mall/good-group/edit-dialog.vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { MallGoodGroupService } from '@/services/api';

const currentGroupData = ref();
const bizAdd = ref();
const bizEdit = ref();
const treeRef = ref();

const onAdd = async () => {
  await bizAdd.value.create(currentGroupData.value?.id);
  treeRef.value.refresh();
};

const onDelete = async () => {
  await ElMessageBox.confirm('确认删除吗?', '删除');
  await MallGoodGroupService.remove({ path: { id: currentGroupData.value.id } });
  ElMessage.success('删除成功');
  treeRef.value.refresh();
  currentGroupData.value = null;
};

const onCurrentChange = (data, node) => {
  console.log(data);
  currentGroupData.value = data;
};

const onEdit = async () => {
  await bizEdit.value.edit({ id: currentGroupData.value.id });
  const res = await MallGoodGroupService.get({ path: { id: currentGroupData.value.id } });
  currentGroupData.value = res.data?.data;
  treeRef.value.refresh();
};
</script>

<style scoped>

</style>

<route>
  {
    "name":"mall-good-group",
  }
</route>