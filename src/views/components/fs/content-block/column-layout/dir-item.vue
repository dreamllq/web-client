<template>
  <div
    class='f-item'
    :class='{
      selected: selectedFList.some(item=>item === f.id),
      path: column.find(item=>item.parentId === f.id),
      "context-menu": f.id === triggerF?.id
    }'
    @click.exact.prevent.stop='onEnterF(f)'
    @contextmenu.prevent.stop='(e)=>showFContextMenu(e, f)'
    @click.meta.exact.stop.prevent='onMultipleSelectF(f)'
    @click.ctrl.exact.stop.prevent='onMultipleSelectF(f)'
    @click.shift.exact.stop.prevent='onShiftMultipleSelectF(f)'>
    <el-icon :size='18'>
      <folder />
    </el-icon>
    <text-tip :msg='f.name' style='flex: 1;overflow: hidden;padding-left: 4px;' />
  </div>
</template>

<script setup lang="ts">
import { F } from '@/services/api';
import { usePathState } from '../../store/path';
import { PropType } from 'vue';
import { TextTip } from 'lc-vue-text-tip';
import { useFContextMenuState } from '../../store/f-context-menu';
import { useOperateHook } from '../operate-hook';

const { column, selectedFList } = usePathState();
const { show: showFContextMenu, triggerF } = useFContextMenuState();

const { onMultipleSelectF, onSelectF, onShiftMultipleSelectF, onEnterF } = useOperateHook();

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