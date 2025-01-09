import { F, FsService, PathType } from '@/services/api';
import { computed, ref } from 'vue';
import { ColumnList, ColumnItem, ColumnMap, ParentIdMap } from '../../type';
// import { usePathState } from '../../store/path';
// import { useFsGlobalState } from '../../store/fs-global';
import { createInjectionState } from '@vueuse/core';

const [useProvideColumnLayoutHook, useColumnLayoutHook] = createInjectionState(({ currentFId, map, columnMap, currentFPathId, parentIdMap, columnRootFId }) => {
  // const { currentFId, map, columnMap, currentFPathId, parentIdMap } = usePathState()!;
  // const { columnRootFId } = useFsGlobalState()!;

  const column = computed<ColumnList>(() => {
    const list:ColumnItem[] = [];
    let cFId = currentFPathId.value;
  
    if (cFId === columnRootFId.value) {
      return [];
    }
  
    // 初始化展示目录范围
    if (map.value[currentFId.value]?.pathType === PathType.FILE) {
      cFId = parentIdMap.value[currentFId.value];
    } else if (map.value[cFId].pathType === PathType.DIR) {
      cFId = parentIdMap.value[cFId] || columnRootFId.value;
    }
  
    while (cFId !== columnRootFId.value) {
      const cF = columnMap.value[cFId];
      list.unshift(cF);
      cFId = parentIdMap.value[cF.parentId!];
    }
  
    columnMap.value[cFId!] && list.unshift(columnMap.value[cFId!]);
        
    return list;
  });

  return { column };
});

export { useProvideColumnLayoutHook, useColumnLayoutHook };