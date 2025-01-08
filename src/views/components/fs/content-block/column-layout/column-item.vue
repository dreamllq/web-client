<template>
  <div
    class='column-item'
    @click.prevent.stop='onClickBlock(columnItem.parentId!)'
    @contextmenu.prevent.stop='(e)=> onBlockContextmenu(e, columnItem.parentId!)'>
    <template v-for='f in columnItem.list' :key='f.id'>
      <dir-item v-if='f.pathType===PathType.DIR' :f='f' />
      <file-item v-if='f.pathType===PathType.FILE' :f='f' />
    </template>
  </div>
</template>

<script setup lang="ts">
import { PathType } from '@/services/api';
import { PropType } from 'vue';
import { ColumnItem } from '../../type';
import DirItem from './dir-item.vue';
import FileItem from './file-item.vue';
import { useOperateHook } from '../operate-hook';

const { onBlockContextmenu, onClickBlock } = useOperateHook();

defineProps({
  columnItem: {
    type: Object as PropType<ColumnItem>,
    required: true
  }
});
</script>

<style scoped lang="scss">
.column-item{
  width: 300px;
  border-right: 1px solid var(--el-border-color);
  height: 100%;
  padding: 4px 8px;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>