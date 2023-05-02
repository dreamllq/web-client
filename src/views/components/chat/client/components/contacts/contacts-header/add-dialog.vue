<template>
  <el-dialog
    v-model='dialogVisible'
    title='添加用户'
    width='500px'
    @closed='onClosed'
  >
    <el-form>
      <el-form-item label='用户选择'>
        <user-select v-model='userId' />
      </el-form-item>
    </el-form>
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
import Deferred from 'simple-deferred2';
import { ElMessage } from 'element-plus';
import UserSelect from './user-select.vue';
import { useContactsState } from '../../../store/contacts';

const { addContacts } = useContactsState();

const dialogVisible = ref(false);
let deferred = null;
let success = false;
const userId = ref(undefined);

const onSubmit = async () => {
  await addContacts(userId.value!);
  success = true;
  dialogVisible.value = false;
  ElMessage.success('创建成功');
};

const onClosed = () => {
  success === true ? deferred.resolve() : deferred.reject();
  deferred = null;
};

const create = () => {
  success = false;
  deferred = new Deferred();
  dialogVisible.value = true;
  return deferred.promise;
};

defineExpose({ create });
</script>

<style scoped>

</style>