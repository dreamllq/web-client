<template>
  <bi-view-setting-root>
    <bi-view-setting-wrapper ref='wrapperRef'>
      <el-container direction='vertical'>
        <el-header height='auto' style='padding: 0 0 8px 0;'>
          <el-button type='primary' @click='onSave'>
            保存
          </el-button>
          <el-button @click='onAddChart'>
            新增
          </el-button>
          <el-button @click='onView'>
            预览
          </el-button>
        </el-header>
        <el-main style='padding: 0;'>
          <bi-view-setting-dashboard ref='dashboardRef' />
        </el-main>
      </el-container>
    </bi-view-setting-wrapper>
  </bi-view-setting-root>
</template>

<script setup lang="ts">
import BiViewSettingRoot from '@/views/components/bi/view/setting/root.vue';
import BiViewSettingWrapper from '@/views/components/bi/view/setting/wrapper.vue';
import BiViewSettingDashboard from '@/views/components/bi/view/setting/dashboard/index.vue';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const wrapperRef = ref();
const dashboardRef = ref();
const onSave = async () => {
  await wrapperRef.value.save();
  ElMessage.success('操作成功');
};

const onAddChart = () => {
  dashboardRef.value.addChart();
};

const onView = () => {
  
};
</script>

<style scoped>

</style>

<route>
  {
    "name":"bi-view-setting"
  }
</route>