<template>
  <div class='struct-item' @mousedown='onMouseDown'>
    <div class='icon-block'>
      <i class='iconfontbi' :class='iconClass?.[item.struct?.type]' />
    </div>
    <div v-if='item.struct' class='name-block'>
      {{ item.struct.name }}
    </div>
    <div v-else class='name-block'>
      {{ item.field }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { BiDataViewColumn, BiDataStructType } from '@/services/api';
import { PropType } from 'vue';
import { useBiChartSettingStore } from '../store';

const { structDragging, structDraggingInfo } = useBiChartSettingStore()!;

const props = defineProps({
  item: {
    type: Object as PropType<BiDataViewColumn>,
    required: true
  }
});

const iconClass:Record<BiDataStructType, string> = {
  [BiDataStructType.TEXT]: 'icon-bi-t',
  [BiDataStructType.NUMBER]: 'icon-bi-jinghao',
  [BiDataStructType.DATE]: 'icon-bi-clock'
};

const onMouseDown = (e: MouseEvent) => {
  structDragging.value = true;
  structDraggingInfo.value = {
    x: e.clientX,
    y: e.clientY,
    struct: props.item
  };
};
</script>

<style scoped lang="scss">
@import url(../iconfont/iconfont.css);
.struct-item {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid var(--el-border-color);
  cursor: pointer;
  user-select: none;
  display: flex;
  width: 100%;
  font-size: 14px;
  color: #333;

  .icon-block {
    flex: none;
    padding-right: 8px;

    i {
      font-size: 14px;
      color: #333;
    }
  }

  .name-block{
    flex: 1;
    overflow: hidden;
  }
}
</style>