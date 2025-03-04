<template>
  <el-container direction='vertical'>
    <el-aside>
      <el-tabs
        v-model='activeName'
        type='card'
      >
        <el-tab-pane label='数据结构' name='struct' />
        <el-tab-pane label='数据规则' name='rule' />
        <el-tab-pane label='数据预览' name='view' />
      </el-tabs>
    </el-aside>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <bi-data-struct v-if="activeName === 'struct'" />
        <bi-data-rule v-if="activeName === 'rule'" />
        <bi-data-view v-if="activeName === 'view'" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BiDataStruct from '@/views/components/bi/data/struct/index.vue';
import BiDataRule from '@/views/components/bi/data/rule/index.vue';
import BiDataView from '@/views/components/bi/data/view/index.vue';


const activeName = ref('struct');
</script>

<style scoped>

</style>

<route>
  {
    "name":"bi-data-setting"
  }
</route>