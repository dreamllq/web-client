<template>
  <el-dialog
    v-model='dialogVisible'
    title='编辑'
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
import { ref, reactive } from 'vue';
import BizForm from './form.vue';
import Deferred from 'simple-deferred2';
import { ElMessage } from 'element-plus';
import { MallShopUpdateDto, MallShopService } from '@/services/api';

const dialogVisible = ref(false);
const formRef = ref<InstanceType<typeof BizForm> | null>(null);
let deferred = null;
let success = false;
let id = '';

const onSubmit = async () => {
  const data = await formRef.value!.getData();

  await MallShopService.update({
    path: { id },
    body: {
      desc: data.desc,
      headimg: data.headimg,
      name: data.name
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

const editDefaultData:MallShopUpdateDto = reactive({
  name: '',
  desc: '',
  headimg: ''
});
const loadingDataFlag = ref(false);

const edit = async (data:{ id:string }) => {
  success = false;
  loadingDataFlag.value = true;
  id = data.id;
  deferred = new Deferred();
  dialogVisible.value = true;

  // TODO 接口调用
  const res = await MallShopService.get({ path: { id } });
  editDefaultData.desc = res.data?.data.desc;
  editDefaultData.headimg = res.data?.data.headimg;
  editDefaultData.name = res.data?.data.name;

  loadingDataFlag.value = false;
  return deferred.promise;
};

defineExpose({ edit });
</script>

<style scoped>

</style>