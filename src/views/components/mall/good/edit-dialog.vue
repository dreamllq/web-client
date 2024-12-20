<template>
  <el-dialog
    v-model='dialogVisible'
    title='编辑'
    width='900px'
    :align-center='true'
    @closed='onClosed'
  >
    <div style='max-height: 70vh;overflow: auto;'>
      <biz-form
        v-if='dialogVisible === true && loadingDataFlag === false'
        ref='formRef'
        :default-data='editDefaultData'
        :disabled-keys='["shopId"]' />
      <div v-else v-loading='true' style='height: 50px;' />
    </div>
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
import { MallGoodService } from '@/services/api';


const dialogVisible = ref(false);
const formRef = ref<InstanceType<typeof BizForm> | null>(null);
let deferred = null;
let success = false;
let id = '';

const onSubmit = async () => {
  const data = await formRef.value!.getData();

  await MallGoodService.update({
    id,
    body: {
      desc: data.desc,
      detail: data.detail,
      headimg: data.headimg,
      images: data.images,
      price: Number(data.price),
      title: data.title,
      groupId: data.groupId
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

const editDefaultData:{images: string[], title: string, groupId:string, desc: string, headimg: string, price: string, detail: string, shopId: string} = reactive({
  title: '',
  desc: '',
  headimg: '',
  groupId: '',
  images: [],
  price: '',
  detail: '',
  shopId: ''
});
const loadingDataFlag = ref(false);

const edit = async (data:{ id:string }) => {
  success = false;
  loadingDataFlag.value = true;
  id = data.id;
  deferred = new Deferred();
  dialogVisible.value = true;

  // TODO 接口调用
  const res = await MallGoodService.get({ id });

  editDefaultData.title = res.data.title;
  editDefaultData.desc = res.data.desc;
  editDefaultData.headimg = res.data.headimg;
  editDefaultData.groupId = res.data.group?.id;
  editDefaultData.images = res.data.images;
  editDefaultData.price = String(res.data.price);
  editDefaultData.detail = res.data.detail;
  editDefaultData.shopId = res.data.shop.id;

  loadingDataFlag.value = false;
  return deferred.promise;
};

defineExpose({ edit });
</script>

<style scoped>

</style>