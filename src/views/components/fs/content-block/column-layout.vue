<template>
  <div class='column-layout' :style='style'>
    <template v-for='(columnItem, index) in column' :key='index'>
      <div class='column-item'>
        <template v-for='f in columnItem.list' :key='f.id'>
          <div
            v-if='f.pathType===PathType.DIR'
            class='f-item'
            :class='{
              selected: currentFId === f.id,
              path: column.find(item=>item.parentId === f.id)
            }'
            @click.prevent.stop='onEnterF(f)'>
            <el-icon :size='18'>
              <folder />
            </el-icon>
            <text-tip :msg='f.name' style='flex: 1;overflow: hidden;padding-left: 4px;' />
          </div>
          <div
            v-if='f.pathType===PathType.FILE'
            class='f-item'
            :class='{
              selected: currentFId === f.id,
              path: column.find(item=>item.parentId === f.id)
            }'
            @click.prevent.stop='selectF(f)'>
            <el-icon :size='18'>
              <document />
            </el-icon>
            <text-tip :msg='f.name' style='flex: 1;overflow: hidden;padding-left: 4px;' />
          </div>
        </template>
      </div>
    </template>
    <div v-if='map[currentFId!]?.pathType === PathType.FILE' class='column-item file-info' @click.prevent.stop>
      <div>
        <el-icon :size='40'>
          <document />
        </el-icon>
      </div>
      <div class='name'>
        {{ map[currentFId!].name }}
      </div>
      <div>
        <el-button link type='primary' @click.prevent.stop='downloadFile(map[currentFId!])'>
          下载
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { F, FileService, FileStaticService, PathType } from '@/services/api';
import { usePathState } from '../store/path';
import { useNavigationState } from '../store/navigation';
import { computed } from 'vue';
import { TextTip } from 'lc-vue-text-tip';
import * as FileSaver from 'file-saver';
const { column, currentFPathId, enterF, currentFId, selectF, map } = usePathState();
const { push } = useNavigationState();
import mime from 'mime';
import { Buffer } from 'buffer';
const onEnterF = (f:F) => {
  push(currentFPathId.value);
  enterF(f);
  selectF(f);
};

const style = computed(() => ({ minWidth: `${301 * column.value.length}px` }));

const downloadFile = async (f:F) => {
  console.log(f);
  
  const file = await FileService.get({ id: f.fileDetail.file.id });
  const res = await FileStaticService.view({ id: f.fileDetail.file.id });
  console.log(res, file);
  console.log(mime.getType(file.data.ext));
  console.log({ type: `${mime.getType(file.data.ext)};charset=utf-8` });
  const encoder = new TextEncoder();
  const uint8Array = encoder.encode(res);
  console.log(uint8Array);
  // const buffer = Buffer.from(res, 'utf-8');
  // console.log(buffer);
  
  var blob = new Blob([res], { type: `${mime.getType(file.data.ext)}` });
  console.log(blob);
  
  FileSaver.saveAs(blob, file.data.originFileName);
};
</script>

<style scoped lang="scss">
.column-layout{
  display: flex;
  height: 100%;
  overflow: auto;

  .column-item{
    width: 300px;
    border-right: 1px solid var(--el-border-color);
    height: 100%;
    padding: 4px 8px;
    box-sizing: border-box;

    .f-item{
      cursor: pointer;
      padding: 4px 8px;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      border-radius: 4px;

      &.selected, &.path.selected{
        background-color: var(--el-color-primary);
        color: #fff;
      }

      &.path{
        background-color: var(--el-color-primary-light-7);
      }
    }

    &.file-info{
      text-align: center;
      padding: 16px 8px;
    }
  }
}
</style>