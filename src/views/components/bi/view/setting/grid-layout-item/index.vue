<template>
  <template v-if='position'>
    <div v-if='dragging' class='grid-layout-item dragging' :style='style'>
      <slot />
    </div>
    <div
      class='grid-layout-item'
      :data-id='uuid'
      data-type='layout-item'
      data-biz='grid'
      :style='dragging ? dragOptions.style : style'>
      <span>{{ position }}</span>
      <p>{{ dragging }}</p>
      <slot />
      <resize-area v-if='!position.static' :uuid='uuid' />
      <delete-button :uuid='uuid' />
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useBiViewSettingStore } from '../store';
import { v4 as uuidv4 } from 'uuid';
import ResizeArea from './resize-area.vue';
import DeleteButton from './delete-button.vue';

const props = defineProps({
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  w: {
    type: Number,
    default: 1
  },
  h: {
    type: Number,
    default: 1
  },
  static: {
    type: Boolean,
    default: false
  }
});

const { rowHeight, colWidth, addLayoutItem, layout, dragOptions } = useBiViewSettingStore()!;
const uuid = uuidv4();

addLayoutItem({
  x: props.x,
  y: props.y,
  w: props.w,
  h: props.h,
  dragging: false,
  static: props.static,
  uuid: uuid 
});

const position = computed(() => layout.value.find(item => item.uuid === uuid));
const dragging = computed(() => dragOptions.value.id === uuid);

const style = computed(() => (position.value ? {
  transform: `translateY(${position.value.y * rowHeight.value}px) translateX(${position.value.x * colWidth.value}px) `,
  width: `${position.value.w * colWidth.value}px`,
  height: `${position.value.h * rowHeight.value}px`,
  transition: 'transform .3s'
} : {}));

</script>

<style scoped lang="scss">
.grid-layout-item{
  position: absolute;
  border: 1px solid;
  background-color: #fff;
  top: 0;
  left: 0;
}
</style>