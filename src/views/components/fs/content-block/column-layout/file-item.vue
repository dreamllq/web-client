<template>
  <div
    class='f-item'
    :class='{
      selected: selectedFList.some(item=>item === f.id),
      path: column.find(item=>item.parentId === f.id),
      "context-menu": f.id === triggerF?.id
    }'
    @click.exact.prevent.stop='onSelectF(f)'
    @contextmenu.prevent.stop='(e)=>showFContextMenu(e, f)'
    @click.meta.exact.stop.prevent='onMultipleSelectF(f)'
    @click.ctrl.exact.stop.prevent='onMultipleSelectF(f)'
    @click.shift.exact.stop.prevent='onShiftMultipleSelectF(f)'>
    <el-icon :size='18'>
      <document />
    </el-icon>
    <template v-if='renameF === f.id'>
      <rename-input :f='f' style='margin-left: 4px;' />
    </template>
    <template v-else>
      <text-tip :msg='`${f.name}.${f.fileDetail?.file?.ext}`' style='flex: 1;overflow: hidden;padding-left: 4px;' />
    </template>
  </div>
</template>

<script setup lang="ts">
import { F } from '@/services/api';
import { usePathState } from '../../store/path';
import { PropType, ref } from 'vue';
import { TextTip } from 'lc-vue-text-tip';
import { useFContextMenuState } from '../../store/f-context-menu';
import { useOperateHook } from '../operate-hook';
import RenameInput from '../../rename/rename-input.vue';

const { column, selectedFList, renameF } = usePathState()!;
const { show: showFContextMenu, triggerF } = useFContextMenuState()!;

const { onSelectF, onMultipleSelectF, onShiftMultipleSelectF } = useOperateHook();

defineProps({
  f: {
    type: Object as PropType<F>,
    required: true
  }
});
</script>

<style scoped lang="scss">
.f-item{
  cursor: pointer;
  padding: 2px 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  border: 2px solid transparent;
  user-select: none;
  &.selected, &.path.selected{
    background-color: var(--el-color-primary);
    border-color: var(--el-color-primary);
    color: #fff;
  }

  &.path{
    background-color: var(--el-color-primary-light-7);
    border-color: var(--el-color-primary-light-7);
  }

  &.context-menu{
    border-color: var(--el-color-primary);
    border-radius: 4px;
  }
}
</style>