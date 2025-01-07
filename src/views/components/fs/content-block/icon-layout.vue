<template>
  <div class='icon-layout'>
    <template v-for='item in currentFList' :key='item.id'>
      <div v-if='item.pathType === PathType.DIR' class='icon-layout-item'>
        <div class='item-icon'>
          <el-icon
            style='cursor: pointer;'
            :size='40' 
            :class='{selected: item.id === currentFId}'
            @click.prevent.stop='selectF(item)'
            @dblclick.prevent.stop='onEnterF(item)'>
            <folder />
          </el-icon>
        </div>
        <div
          class='item-name'
          :class='{selected: item.id === currentFId}'
          @click.prevent.stop='selectF(item)'
          @dblclick.prevent.stop='onEnterF(item)'>
          <text-tip :msg='item.name' placement='top' />
        </div>
      </div>
      <div v-if='item.pathType === PathType.FILE' class='icon-layout-item'>
        <div class='item-icon'>
          <el-icon
            style='cursor: pointer;'
            :size='40' 
            :class='{selected: item.id === currentFId}'
            @click.prevent.stop='selectF(item)'>
            <document />
          </el-icon>
        </div>
        <div class='item-name' :class='{selected: item.id === currentFId}' @click.prevent.stop='selectF(item)'>
          <text-tip :msg='item.name' placement='top' />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePathState } from '../store/path';
import { useNavigationState } from '../store/navigation';
import { Folder } from '@element-plus/icons-vue';
import { F, PathType } from '@/services/api';
import { TextTip } from 'lc-vue-text-tip';

const { childrenMap, currentFPathId, selectF, currentFId, enterF } = usePathState()!;
const { push } = useNavigationState()!;

const currentFList = computed(() => childrenMap.value[currentFPathId.value!] || []);

const onEnterF = (f:F) => {
  push(currentFPathId.value);
  enterF(f);
};
</script>

<style scoped lang="scss">
.icon-layout{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;

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