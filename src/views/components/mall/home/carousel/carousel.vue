<template>
  <div class='carousel'>
    <div>
      <el-button @click='onAdd'>
        创建
      </el-button>
    </div>
    <div style='margin-top: 16px;'>
      <el-table :data='data'>
        <el-table-column label='名称' prop='name' />
        <el-table-column label='图片' prop='image' />
        <el-table-column label='key' prop='key' />
        <el-table-column>
          <template #default='{$index}'>
            <el-button type='danger' link @click='onDelete($index)'>
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style='margin-top: 16px;'>
      <el-button type='primary' @click='onSave'>
        保存
      </el-button>
    </div>
    <biz-add ref='addRef' />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BizAdd from './add-dialog.vue';
import { SettingService } from '@/services/api';
import { cloneDeep } from 'lodash';
import { ElMessage, ElMessageBox } from 'element-plus';

const data = ref<{name: string, image: string, key: string}[]>([]);
const addRef = ref();

onMounted(async () => {
  const res = await SettingService.getItems({ path: { keys: ['MALL_HOME_CAROUSEL'] } });
  if (res.data?.data[0]) {
    try {
      data.value = JSON.parse(res.data?.data[0].value);
    } catch (e) {}
  }
});

const onAdd = async () => {
  const item = await addRef.value.create();
  data.value.push(item);
};

const onDelete = async (index: number) => {
  await ElMessageBox.confirm('确认删除吗?', '删除');
  data.value.splice(index, 1);
};

const onSave = async () => {
  await SettingService.setItems({
    body: {
      data: [
        {
          key: 'MALL_HOME_CAROUSEL',
          value: JSON.stringify(cloneDeep(data.value))
        }
      ]
    }
  });
  ElMessage.success('保存成功');
};
</script>

<style scoped>

</style>