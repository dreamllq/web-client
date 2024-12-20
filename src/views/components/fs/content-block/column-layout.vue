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
            @click.prevent.stop='onSelectF(f)'>
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
const onEnterF = (f:F) => {
  push(currentFPathId.value);
  enterF(f);
  selectF(f);
};

const onSelectF = (f:F) => {
  currentFPathId.value = f.parent.id;
  selectF(f);
};

const style = computed(() => ({ minWidth: `${301 * column.value.length}px` }));

const downloadFile = async (f:F) => {
  const file = await FileService.get({ path: { id: f.fileDetail.file.id } });
  const res = await FileStaticService.view({
    path: { id: f.fileDetail.file.id },
    responseType: 'blob' 
  });
  FileSaver.saveAs(res.data as Blob, file.data?.data.originFileName);
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