<template>
  <div class='column-layout' :style='style'>
    <template v-for='(columnItem, index) in column' :key='index'>
      <column-item-component :column-item='columnItem' />
    </template>
    <div v-if='map[currentFId!]?.pathType === PathType.FILE' class='column-item file-info' @click.prevent.stop>
      <div>
        <el-icon :size='40'>
          <document />
        </el-icon>
      </div>
      <div class='name'>
        {{ map[currentFId!].name }}.{{ map[currentFId!].fileDetail?.file?.ext }}
      </div>
      <div>
        <el-button link type='primary' @click.prevent.stop='downloadFile(map[currentFId!])'>
          下载
        </el-button>
      </div>
    </div>
    <column-item-component v-else-if='map[currentFId!]?.pathType === PathType.DIR && columnMap[currentFId!]' :column-item='columnMap[currentFId!]' />
  </div>
</template>

<script setup lang="ts">
import { F, PathType } from '@/services/api';
import { usePathState } from '../../store/path';
import { computed } from 'vue';
import { download } from '@/services/download';
import ColumnItemComponent from './column-item.vue';

const { column, currentFId, map, columnMap } = usePathState();

const style = computed(() => ({ minWidth: `${301 * (column.value.length + 1)}px` }));

const downloadFile = async (f:F) => {
  download(f.fileDetail!.file!);
};
</script>

<style scoped lang="scss">
.column-layout{
  display: flex;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  .column-item{
    width: 300px;
    border-right: 1px solid var(--el-border-color);
    height: 100%;
    padding: 4px 8px;
    box-sizing: border-box;
    overflow-y: scroll;

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

    &.file-info{
      text-align: center;
      padding: 16px 8px;

      .name{
        word-break: break-all;
        text-align: left;
      }
    }
  }
}
</style>