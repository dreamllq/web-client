<template>
  <div>
    <vue3-menus
      v-model:open='isOpen'
      :event='eventVal'
      :menus='menus'
      :z-index='menusZIndex'
      has-icon />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { Vue3Menus } from 'vue3-menus';
import { FsService, PathType } from '@/services/api';
import { useFavoriteState } from '../store/favorite';

const { refreshList } = useFavoriteState()!;

const isOpen = ref(false);
const eventVal = ref({});
const triggerFId = ref<string | null>();
const menusZIndex = ref(5000);

const show = async (e:any, fId:string | null) => {
  triggerFId.value = fId;
  isOpen.value = false;
  await nextTick();
  isOpen.value = true;
  eventVal.value = e;
};
  
const hide = () => {
  triggerFId.value = null;
  isOpen.value = false;
  eventVal.value = {};
};

const menus = computed(() => [
  {
    label: '取消收藏',
    click: async () => {
      await FsService.update({
        path: { id: triggerFId.value! },
        body: { favorite: false } 
      });
      await refreshList();
    }
  }
]);

defineExpose({
  show,
  hide
});
</script>

<style scoped>

</style>