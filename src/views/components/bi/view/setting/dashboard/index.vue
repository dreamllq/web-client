<template>
  <div v-if='ready' ref='dashboardRef' class='bi-dashboard'>
    <grid-layout :cols='cols' :row-height='rowHeight'>
      <template v-for='(item, index) in layout' :key='item.uuid'>
        <grid-layout-item 
          :x='item.x'
          :y='item.y'
          :w='item.w'
          :h='item.h'
          :static='item.static'
          :biz-data='item.bizData'
        >
          <div class='bi-dashboard-item'>
            <biz-chart-view :chart-mate-id='item.bizData.chartMetaId' />

            <delete-button @click='onDelete(index)' />
          </div>
        </grid-layout-item>
      </template>
      <!-- <grid-layout-item 
        :x='0'
        :y='0'
        :w='6'
        :h='3'
      >
        <biz-chart-view chart-mate-id='1064fc8a-7dd4-4139-9d41-70215e7e9356' />
      </grid-layout-item> -->
    </grid-layout>
  </div>
  <add-chart-dialog ref='addChartDialogRef' />
</template>

<script setup lang="ts">
import GridLayout from '../grid-layout/index.vue';
import GridLayoutItem from '../grid-layout-item/index.vue';
import { nextTick, onMounted, ref } from 'vue';
import { BiViewSettingService } from '@/services/api';
import { useRoute } from 'vue-router';
import BizChartView from '../../../chart/common/biz-chart-view/index.vue';
import DeleteButton from './delete-button.vue';
import AddChartDialog from '../add-chart/index.vue';

const route = useRoute();
const layout = ref<any[]>([]);
const cols = ref();
const rowHeight = ref();
const ready = ref(false);
const addChartDialogRef = ref();

onMounted(() => {
  init();
});

const init = async () => {
  const biViewSettingRes = await BiViewSettingService.get({ path: { metaId: route.query.id as string } });
  const { config } = biViewSettingRes.data?.data || {};
  if (config) {
    try {
      const configObj = JSON.parse(config);
      cols.value = configObj.cols;
      rowHeight.value = configObj.rowHeight;
      layout.value = configObj.layout;
    } catch (e) {
      console.error(e);
    }
  }
  ready.value = true;
};


const onDelete = async (index: number) => {
  ready.value = false;
  layout.value.splice(index, 1);
  await nextTick();
  ready.value = true;
};

const addChart = async () => {
  const data = await addChartDialogRef.value.create();
  ready.value = false;
  layout.value.push({
    x: 0,
    y: 0,
    w: 4,
    h: 3,
    bizData: data
  });
  await nextTick();
  ready.value = true;
};

defineExpose({ addChart });
</script>

<style scoped lang="scss">
.bi-dashboard {
  width: 100%;
  height: 100%;

  .bi-dashboard-item{
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>