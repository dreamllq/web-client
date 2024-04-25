<template>
  <div class='inner-page'>
    <router-layout :menu-list='data.menuList' :route-data='routeData'>
      <template #logo>
        <weixin-select
          :filter='{type:"mp"}'
          :model-value='officialAccountId!'
          placeholder='请选择小程序'
          @update:model-value='onIdChange' />
      </template>
      <router-view v-if='showChild && officialAccountId' />
      <el-empty v-else description='请选择公众号' />
    </router-layout>
  </div>
</template>

<script setup lang="ts">
import RouterLayout from '@/views/layout/router-layout';
import { Ref, reactive, ref, watch, nextTick } from 'vue';
import menuList from '@/configs/menu-configs/mini-program-management';
import WeixinSelect from '@/views/components/weixin/common/weixin-select.vue';
import { useRoute, useRouter } from 'vue-router';
const data = reactive({ menuList: menuList });

const route = useRoute();
const router = useRouter();

const officialAccountId: Ref<string | null> = ref(null);
const showChild = ref(false);

watch(() => route.query.wid, async () => {
  showChild.value = false;
  officialAccountId.value = route.query.wid as string; 
  await nextTick();
  showChild.value = true;
}, { immediate: true });

const onIdChange = (id: string) => {
  router.replace({ query: { wid: id } });
};

const routeData = () => ({ query: { wid: officialAccountId.value } });
</script>

<style scoped>
.inner-page{
  margin: -20px;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
}
</style>

<route>
  {
    "name":"mini-program-management1"
  }
</route>