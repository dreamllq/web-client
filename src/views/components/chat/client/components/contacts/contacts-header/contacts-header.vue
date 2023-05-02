<template>
  <div class='chat-contacts-header'>
    <div class='header-input'>
      <el-input placeholder='请输入' />
    </div>
    <div class='header-btn'>
      <el-button @click='onAdd'>
        添加
      </el-button>
    </div>
  </div>
  <biz-add ref='addRef' />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BizAdd from './add-dialog.vue';

const addRef = ref();

const onAdd = async () => {
  await addRef.value.create();
};

</script>

<style scoped lang="scss">
.chat-contacts-header {
  display: flex;
  padding: 10px;

  .header-input{
    flex: 1;
    overflow: hidden;
  }

  .header-btn{
    margin-left: 10px;
    flex:none;
  }
}
</style>