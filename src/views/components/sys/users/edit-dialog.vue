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
      :hidden-keys='["password"]' />
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
import { UsersService } from '@/services/api';

const dialogVisible = ref(false);
const formRef = ref();
let deferred = null;
let success = false;

const onSubmit = async () => {
  const data = await formRef.value.getData();

  await UsersService.update({
    path: { id: editDefaultData.value.id },
    body: {
      roleIds: data.roleIds,
      username: data.username,
      nickName: data.nickName,
      mobile: data.mobile,
      headimg: data.headimg
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
  username: '',
  roleIds: [],
  nickName: '',
  mobile: '',
  headimg: ''
});
const loadingDataFlag = ref(false);

const edit = async ({ id }) => {
  success = false;
  loadingDataFlag.value = true;
  editDefaultData.value.id = id;
  deferred = new Deferred();
  dialogVisible.value = true;

  // TODO 接口调用
  const res = await UsersService.get({ path: { id } });
  editDefaultData.value.username = res.data?.data.username;
  editDefaultData.value.roleIds = res.data?.data.roles.map(role => role.id);
  editDefaultData.value.nickName = res.data?.data.nickName;
  editDefaultData.value.mobile = res.data?.data.mobile;
  editDefaultData.value.headimg = res.data?.data.headimg;

  loadingDataFlag.value = false;
  return deferred.promise;
};

defineExpose({ edit });
</script>

<style scoped>

</style>