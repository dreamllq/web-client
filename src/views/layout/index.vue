<template>
  <pro-layout
    v-if='ready'
    ref='layoutRef'
    title='web-client'
    :menu='menu'
    :avatar='avatar'
    @avatar-command='handleCommand'
    @menu-select='onMenuSelect'>
    <router-view />

    <template #avatarDropdown>
      <el-dropdown-menu>
        <el-dropdown-item command='logout'>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </pro-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watchEffect } from 'vue';
import { ProLayout } from 'lc-vue-pro-layout';
import { init as permissionInit } from '@/services/permission';
import { init as userInit, getUser } from '@/services/user';
import menuList from '@/configs/menu-configs/index';
import menuFilter from '@/services/menu-filter';
import { useRouter, useRoute } from 'vue-router';
import { ElMessageBox } from 'element-plus';
import { clearToken } from '@/services/token';
import { toLogin } from '@/services/session';
import { cloneDeep } from 'lodash';

const router = useRouter();
const route = useRoute();

const ready = ref(false);
const menu: any = reactive({
  data: [],
  index: '',
  uniqueOpened: true
});

const avatar = reactive({
  src: '',
  title: '' 
});

const layoutRef = ref();

watchEffect(() => {
  const findMatchedMenu = (menuData) => {
    let matchedMenu;
    menuData.forEach(item => {
      if (route.name === item.key || (Array.isArray(item.subPages) && item.subPages.includes(route.name as string))) {
        matchedMenu = cloneDeep(item);
      } else {
        if (Array.isArray(item.children)) {
          const m = findMatchedMenu(item.children);
          if (m) {
            matchedMenu = m;
          }
        }
      }
    });
    return matchedMenu;
  };

  const matchedMenu = findMatchedMenu(menu.data);
  if (matchedMenu) {
    layoutRef.value?.setMenuIndex(matchedMenu.key);
  }
});

onMounted(async () => {
  await Promise.all([permissionInit(), userInit()]);
  // data.menuList = menuFilter(menuList);
  menu.data = menuFilter(menuList);
  const user = getUser();
  avatar.title = user!.nickName;
  ready.value = true;
});

const onMenuSelect = (index: string) => {
  console.log(index);
  router.push({ name: index });
};

const handleCommand = async (command: string) => {
  if (command === 'logout') {
    await ElMessageBox.confirm('确认删除吗？', '退出确认');
    clearToken();
    toLogin();
  }
};
</script>

<style scoped>

</style>
