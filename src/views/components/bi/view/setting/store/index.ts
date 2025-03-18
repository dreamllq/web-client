import { createInjectionState } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { GridLayout, GridLayoutItem } from '../type';
import { computedLayout } from '../utils/computed-layout';
import { cloneDeep, debounce } from 'lodash';
import dom from './dom';

const [useProvideBiViewSettingStore, useBiViewSettingStore] = createInjectionState((viewMateId:string) => {
  const cols = ref(12);
  const containerWidth = ref(0);
  const colWidth = computed(() => containerWidth.value / cols.value);
  const rowHeight = ref(150);
  const layout = ref<GridLayout>([]);
  const ready = ref(false);
  const dragOptions = ref<{
    id?: string, 
    type?: 'item-resize' | 'layout-item', 
    dragging?:boolean, 
    x?:number, 
    y?:number,
    style?:{
      transform?:string,
      width?:string,
      height?:string,
      zIndex?:number,
      transition?:string
    }
  }>({ });
  const draggingTempLayout = ref<GridLayout>([]);

  const dragItem = ref<GridLayoutItem>();

  const addLayoutItem = (item: GridLayoutItem) => {
    layout.value.push(item);
    layout.value = computedLayout(cloneDeep(layout.value), cols.value);
  };

  const drag = (e:MouseEvent) => {
    if (e.button !== 0) return;
    const domPath = dom.getPath(e.target);
    const target = domPath.find((p) => p.dataset.biz === 'grid');
    if (!target) return;
    const { type, id } = target.dataset;
    const item = layout.value.find(item => item.uuid === id)!;
    if (item.static) return;
    item.dragging = true;
    dragItem.value = cloneDeep(item);
    dragOptions.value.type = type;
    dragOptions.value.id = id;
    dragOptions.value.x = e.x;
    dragOptions.value.y = e.y;
    dragOptions.value.dragging = true;
    dragOptions.value.style = {
      transform: `translateY(${dragItem.value.y * rowHeight.value}px) translateX(${dragItem.value.x * colWidth.value}px)`,
      width: `${dragItem.value.w * colWidth.value}px`,
      height: `${dragItem.value.h * rowHeight.value}px`,
      zIndex: 9999,
      transition: 'none'
    };
    draggingTempLayout.value = cloneDeep(layout.value);
  };

  const drop = (e:MouseEvent) => {
    if (!dragOptions.value.dragging) return;
    const item = layout.value.find(item => item.uuid === dragOptions.value.id)!;
    item.dragging = false;
    dragOptions.value.type = undefined;
    dragOptions.value.id = undefined;
    dragOptions.value.x = undefined;
    dragOptions.value.y = undefined;
    dragOptions.value.dragging = false;
    dragItem.value = undefined;
    dragOptions.value.style = undefined;
  };

  const updateDraggingItem = (e:MouseEvent) => {
    if (!dragOptions.value.dragging) return;
    if (dragOptions.value.type === 'item-resize') {
      const width = Math.max(dragItem.value!.w * colWidth.value - dragOptions.value.x! + e.x, colWidth.value);
      const height = Math.max(dragItem.value!.h * rowHeight.value - dragOptions.value.y! + e.y, rowHeight.value);

      dragOptions.value.style!.width = `${width}px`;
      dragOptions.value.style!.height = `${height}px`;
      const w = Math.min(Math.ceil(width / colWidth.value), cols.value - dragItem.value!.x);
      const h = Math.ceil(height / rowHeight.value);

      updateDragLayout({
        ...dragItem.value!,
        w,
        h
      });
    } else if (dragOptions.value.type === 'layout-item') {
      const left = Math.max(e.x + dragItem.value!.x * colWidth.value - dragOptions.value.x!, 0);
      const top = Math.max(e.y + dragItem.value!.y * rowHeight.value - dragOptions.value.y!, 0);
      
      dragOptions.value.style!.transform = `translateY(${top}px) translateX(${left}px) `;
      const x = Math.min(Math.floor(left / colWidth.value), cols.value - dragItem.value!.w);
      const y = Math.floor(top / rowHeight.value);
      
      updateDragLayout({
        ...dragItem.value!,
        x,
        y
      });
    }
  };

  const updateDragLayout = (item: GridLayoutItem) => {
    const temp = draggingTempLayout.value.find(n => n.uuid === item.uuid);
    if (temp) {
      temp.x = item.x;
      temp.y = item.y;
      temp.w = item.w;
      temp.h = item.h;
      temp.dragging = item.dragging;
      layout.value = computedLayout(cloneDeep(draggingTempLayout.value), cols.value);
    }
  };

  const toJson = () => ({
    cols: cols.value,
    rowHeight: rowHeight.value,
    layout: JSON.parse(JSON.stringify(layout.value))
  });

  
  return {
    viewMateId,
    layout,
    cols,
    colWidth,
    rowHeight,
    ready,
    addLayoutItem,
    containerWidth,
    dragOptions,
    updateDraggingItem,
    drag,
    drop,
    toJson
  };
});

export { useProvideBiViewSettingStore, useBiViewSettingStore };