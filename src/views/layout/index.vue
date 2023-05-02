
<template>
  <div v-if='ready' id='layout'>
    <router-layout :menu-list='data.menuList'>
      <template #logo>
        <span>logo</span>
      </template>
      <template #toolbar>
        <tool-bar />
      </template>
      <router-view />
    </router-layout>
  </div>
</template>

<script setup>
import menuList from '@/configs/menu-configs/index';
import RouterLayout from './router-layout/index';
import { ref, onMounted, reactive } from 'vue';
import { init as permissionInit } from '@/services/permission';
import { init as userInit } from '@/services/user';
import menuFilter from '@/services/menu-filter';
import ToolBar from './toolbar.vue';

const ready = ref(false);

const data = reactive({ menuList: [] });

onMounted(async () => {
  await Promise.all([permissionInit(), userInit()]);
  data.menuList = menuFilter(menuList);
  ready.value = true;
});

</script>

<style lang="scss" scoped>
#layout {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
