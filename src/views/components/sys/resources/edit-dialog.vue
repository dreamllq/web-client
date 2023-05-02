<template>
  <el-dialog
    v-model='dialogVisible'
    title='创建资源'
    width='500px'
    @closed='onClosed'
  >
    <biz-form
      v-if='dialogVisible === true && loadingDataFlag === false'
      ref='formRef'
      :default-data='editDefaultData'
      :disabled-keys='["name"]' />
    <div v-else v-loading='true' style='height: 50px;' />
    <template #footer>
      <span class='dialog-footer'>
        <el-button @click='dialogVisible = false'>取消</el-button>
        <el-button type='primary' @click='onSubmit'>
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BizForm from './form.vue';
import Deferred from 'simple-deferred2';
import { ElMessage } from 'element-plus';
import { ResourcesService } from '@/services/api';

const dialogVisible = ref(false);
const formRef = ref();
let deferred = null;
let success = false;

const onSubmit = async () => {
  const data = await formRef.value.getData();

  // TODO 接口调用
  await ResourcesService.update({
    id: editDefaultData.value.id,
    requestBody: {
      desc: data.desc,
      key: data.key 
    }
  });
  success = true;
  dialogVisible.value = false;
  ElMessage.success('编辑成功');
};

const onClosed = () => {
  success === true ? deferred.resolve() : deferred.reject();
  deferred = null;
};

const editDefaultData = ref({
  id: '',
  name: '',
  key: '',
  desc: ''
});
const loadingDataFlag = ref(false);

const edit = async ({ id }) => {
  success = false;
  loadingDataFlag.value = true;
  deferred = new Deferred();
  dialogVisible.value = true;


  let res = await ResourcesService.get({ id });
  editDefaultData.value.id = id;
  editDefaultData.value.name = res.data.name;
  editDefaultData.value.key = res.data.key;
  editDefaultData.value.desc = res.data.desc;
  loadingDataFlag.value = false;

  return deferred.promise;
};

defineExpose({ edit });
</script>

<style scoped>

</style>