<template>
  <pro-layout :menu='menu' @menu-select='onMenuSelect'>
    <template #logo>
      <weixin-select
        :filter='{type:"mp"}'
        :model-value='officialAccountId!'
        placeholder='请选择小程序'
        @update:model-value='onIdChange' />
    </template>
    <router-view v-if='showChild && officialAccountId' />
    <el-empty v-else description='请选择公众号' />
  </pro-layout>
</template>

<script setup lang="ts">
import { ProLayout } from 'lc-vue-pro-layout';
import { ref, onMounted, reactive, watch, Ref, nextTick } from 'vue';
import menuList from '@/configs/menu-configs/mini-program-management';
import { useRoute, useRouter } from 'vue-router';
import WeixinSelect from '@/views/components/weixin/common/weixin-select.vue';

const route = useRoute();
const router = useRouter();
const officialAccountId: Ref<string | null> = ref(null);
const showChild = ref(false);
const ready = ref(false);
const menu = reactive({
  data: menuList,
  index: ''
});

watch(() => route.query.wid, async () => {
  showChild.value = false;
  officialAccountId.value = route.query.wid as string; 
  await nextTick();
  showChild.value = true;
}, { immediate: true });

const onIdChange = (id: string) => {
  router.replace({ query: { wid: id } });
};

const onMenuSelect = (index) => {
  
};
</script>

<style scoped>

</style>

<route>
  {
    "name":"mini-program-management"
  }
</route>