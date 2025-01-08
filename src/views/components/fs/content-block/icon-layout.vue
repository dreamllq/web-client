<template>
  <div
    class='icon-layout'
    @click.prevent.stop='onClickBlock(currentFPathId)'
    @contextmenu.prevent.stop='(e)=> onBlockContextmenu(e, currentFPathId)'>
    <template v-for='item in currentFList' :key='item.id'>
      <div v-if='item.pathType === PathType.DIR' class='icon-layout-item'>
        <div class='item-icon'>
          <el-icon
            style='cursor: pointer;'
            :size='40' 
            :class='{selected: selectedFList.some(s=>s === item.id)}'
            @click.exact.prevent.stop='onSelectF(item)'
            @dblclick.exact.prevent.stop='onEnterF(item)'
            @contextmenu.prevent.stop='(e)=>onFContextMenu(e, item.id)'
            @click.meta.exact.stop.prevent='onMultipleSelectF(item)'
            @click.ctrl.exact.stop.prevent='onMultipleSelectF(item)'
            @click.shift.exact.stop.prevent='onShiftMultipleSelectF(item)'>
            <folder />
          </el-icon>
        </div>
        <div
          class='item-name'
          :class='{selected: selectedFList.some(s=>s === item.id)}'
          @click.exact.prevent.stop='onSelectF(item)'
          @dblclick.exact.prevent.stop='onEnterF(item)'
          @contextmenu.prevent.stop='(e)=>onFContextMenu(e, item.id)'
          @click.meta.exact.stop.prevent='onMultipleSelectF(item)'
          @click.ctrl.exact.stop.prevent='onMultipleSelectF(item)'
          @click.shift.exact.stop.prevent='onShiftMultipleSelectF(item)'>
          <template v-if='renameF === item.id'>
            <rename-input :f='item' />
          </template>
          <template v-else>
            <text-tip
              :msg='item.name'
              placement='bottom'
              :line-clamp='2'
              :enterable='false' />
          </template>
        </div>
      </div>
      <div v-if='item.pathType === PathType.FILE' class='icon-layout-item'>
        <div class='item-icon'>
          <el-icon
            style='cursor: pointer;'
            :size='40' 
            :class='{selected: selectedFList.some(s=>s === item.id)}'
            @click.exact.prevent.stop='onSelectF(item)'
            @contextmenu.prevent.stop='(e)=>onFContextMenu(e, item.id)'
            @click.meta.exact.stop.prevent='onMultipleSelectF(item)'
            @click.ctrl.exact.stop.prevent='onMultipleSelectF(item)'
            @click.shift.exact.stop.prevent='onShiftMultipleSelectF(item)'>
            <document />
          </el-icon>
        </div>
        <div
          class='item-name'
          :class='{selected: selectedFList.some(s=>s === item.id)}' 
          @click.exact.prevent.stop='onSelectF(item)'
          @contextmenu.prevent.stop='(e)=>onFContextMenu(e, item.id)'
          @click.meta.exact.stop.prevent='onMultipleSelectF(item)'
          @click.ctrl.exact.stop.prevent='onMultipleSelectF(item)'
          @click.shift.exact.stop.prevent='onShiftMultipleSelectF(item)'>
          <template v-if='renameF === item.id'>
            <rename-input :f='item' />
          </template>
          <template v-else>
            <text-tip
              :msg='`${item.name}.${item.fileDetail?.file?.ext}`'
              placement='bottom'
              :line-clamp='2'
              :enterable='false' />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePathState } from '../store/path';
import { Folder } from '@element-plus/icons-vue';
import { F, PathType } from '@/services/api';
import { TextTip } from 'lc-vue-text-tip';
import { useOperateHook } from './operate-hook';
import RenameInput from '../rename/rename-input.vue';

const { childrenMap, currentFPathId, renameF, selectedFList } = usePathState()!;
const { onMultipleSelectF, onSelectF, onShiftMultipleSelectF, onEnterF, onBlockContextmenu, onClickBlock, onFContextMenu } = useOperateHook();

const currentFList = computed(() => childrenMap.value[currentFPathId.value!] || []);
</script>

<style scoped lang="scss">
.icon-layout{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  height: 100%;

  .icon-layout-item{
    width: 100px;
    height: 100px;
    text-align: center;
    display: flex;
    padding: 12px;
    box-sizing: border-box;
    flex-direction: column;

    .item-icon{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .selected{
        background-color: var(--el-color-primary);
        color: #fff;
      }
    }

    .item-name{
      cursor: pointer;
      font-size: 12px;
      overflow: hidden;
      &.selected{
        background-color: var(--el-color-primary);
        color: #fff;
      }
    }
  }
}
</style>