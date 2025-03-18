<template>
  <div v-if='ready' ref='dashboardRef' class='bi-dashboard'>
    <grid-layout :cols='cols' :row-height='rowHeight'>
      <template v-for='item in layout' :key='item.uuid'>
        <grid-layout-item 
          :x='item.x'
          :y='item.y'
          :w='item.w'
          :h='item.h'
          :static='item.static'
        >
          111
        </grid-layout-item>
      </template>
    </grid-layout>
  </div>
</template>

<script setup lang="ts">
import GridLayout from '../grid-layout/index.vue';
import GridLayoutItem from '../grid-layout-item/index.vue';
import { ref } from 'vue';
import { BiViewSettingService } from '@/services/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = ref([]);
const cols = ref();
const rowHeight = ref();
const ready = ref(false);
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

init();
</script>

<style scoped lang="scss">
.bi-dashboard {
  width: 100%;
  height: 100%;
}
</style>