<template>
  <bi-chart-setting-root>
    <bi-chart-setting-wrapper ref='wrapperRef'>
      <el-container direction='vertical'>
        <el-header height='auto' style='padding: 0 0 8px 0;'>
          <el-button type='primary' @click='onSave'>
            保存
          </el-button>
          <el-button @click='onDataView'>
            数据预览
          </el-button>
        </el-header>
        <el-main style='padding: 0;'>
          <el-container style='border: 1px solid var(--el-border-color);'>
            <el-aside width='200px' style='border-right: 1px solid var(--el-border-color);'>
              <bi-data-struct />
            </el-aside>
            <el-aside width='200px' style='border-right: 1px solid var(--el-border-color);'>
              <el-container direction='vertical'>
                <el-header height='200px' style='padding: 0;'>
                  <bi-chart-type />
                </el-header>
                <el-main style='padding: 0;'>
                  2
                </el-main>
              </el-container>
            </el-aside>
            <el-main style='padding: 0;'>
              <el-container direction='vertical'>
                <el-aside>
                  <bi-chart-axis />
                </el-aside>
                <el-main style='padding: 0;'>
                  <bi-chart-view />
                </el-main>
              </el-container>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </bi-chart-setting-wrapper>
    <bi-data-view ref='dataViewRef' />
  </bi-chart-setting-root>
</template>

<script setup lang="ts">
import BiChartSettingRoot from '@/views/components/bi/chart/setting/root.vue';
import BiChartSettingWrapper from '@/views/components/bi/chart/setting/wrapper.vue';
import BiDataStruct from '@/views/components/bi/chart/setting/struct/index.vue';
import BiChartType from '@/views/components/bi/chart/setting/type/index.vue';
import BiChartAxis from '@/views/components/bi/chart/setting/axis/index.vue';
import BiChartView from '@/views/components/bi/chart/setting/chart-view/index.vue';
import BiDataView from '@/views/components/bi/chart/setting/data-view/index.vue';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const dataViewRef = ref();
const wrapperRef = ref();

const onDataView = () => {
  dataViewRef.value.show();
};

const onSave = async () => {
  await wrapperRef.value.save();
  ElMessage.success('操作成功');
};

</script>

<style scoped>

</style>

<route>
  {
    "name":"bi-chart-setting"
  }
</route>