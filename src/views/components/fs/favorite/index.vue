<template>
  <div class='favorite-list'>
    <h6>个人收藏</h6>
    <template v-for='item in favoriteList' :key='item.id'>
      <div class='favorite-item' @contextmenu.stop.prevent='(e)=>onContextmenu(e, item.id)'>
        {{ item.name }}
      </div>
    </template>
    <context-menu ref='contextMenuRef' />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useFavoriteState } from '../store/favorite';
import ContextMenu from './context-menu.vue';

const { favoriteList, refreshList } = useFavoriteState()!;
const contextMenuRef = ref<InstanceType<typeof ContextMenu>>();
onMounted(async () => {
  await refreshList();
});

const onContextmenu = (e, id) => {
  contextMenuRef.value?.show(e, id);
};
</script>

<style scoped lang="scss">
.favorite-list{
  padding: 0 4px;
  h6{
    margin: 0;
    padding: 0 4px 8px;
  }

  .favorite-item {
    padding: 4px;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: var(--el-fill-color-lighter);
    }

    &:active{
      background-color: var(--el-fill-color-light);
    }
  }
}
</style>