<template>
  <div class='favorite-list'>
    <div style='display: flex; width: 100%;'>
      <div style='flex: 1;'>
        <h6>个人收藏</h6>
      </div>
      <div>
        <el-button size='small' @click='onSelect({id:"null"})'>
          /
        </el-button>
      </div>
    </div>
    <template v-for='item in favoriteList' :key='item.id'>
      <div
        class='favorite-item'
        :class='{selected: columnRootFId === item.id}' 
        @click='onSelect(item)'
        @contextmenu.stop.prevent='(e)=>onContextmenu(e, item.id)'>
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
import { useFsGlobalState } from '../store/fs-global';
import { usePathState } from '../store/path';

const { favoriteList, refreshList } = useFavoriteState()!;
const { columnRootFId } = useFsGlobalState()!;
const { currentFId, currentFPathId, selectedFList, getPathInfoById } = usePathState()!;
const contextMenuRef = ref<InstanceType<typeof ContextMenu>>();
onMounted(async () => {
  await refreshList();
});

const onSelect = (f:F) => {
  columnRootFId.value = f.id;
  currentFId.value = columnRootFId.value,
  currentFPathId.value = columnRootFId.value,
  selectedFList.value = [];
  getPathInfoById(columnRootFId.value);
};

const onContextmenu = (e, id) => {
  contextMenuRef.value?.show(e, id);
};
</script>

<style scoped lang="scss">
.favorite-list{
  padding: 0 4px;
  user-select: none;
  h6{
    margin: 0;
    padding: 0 4px 8px;
    line-height: 24px;
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

    &.selected {
      background-color: var(--el-fill-color-light);
    }
  }
}
</style>