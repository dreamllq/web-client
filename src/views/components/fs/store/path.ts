import { F, FsService } from '@/services/api';
import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { ColumnList, ColumnItem, ColumnMap, ParentIdMap } from '../type';

export const usePathState = createGlobalState(
  () => {
    const childrenMap = ref<{[index:string]: F[]}>({});
    const map = ref<{[index:string]: F}>({});
    const columnMap = ref<ColumnMap>({});
    const tree = ref({});
    const parentIdMap = ref<ParentIdMap>({});
    const currentFId = ref<string | null>(null);
    const currentFPathId = ref<string | null>(null);
    const fPathIdHistory = ref<(string|null)[]>([]);

    const column = computed<ColumnList>(() => {
      const list:ColumnItem[] = [];
      let cFId = currentFPathId.value;
      while (cFId !== null) {
        const cF = columnMap.value[cFId];
        list.unshift(cF);
        cFId = parentIdMap.value[cF.parentId!];
      }

      columnMap.value[cFId!] && list.unshift(columnMap.value[cFId!]);

      return list;
    });

    const getPathInfoById = async (id:string) => {
      // const res = await FsService.get({ id });
      // const data = res.data;
      // map.value[data.id] = data;
      const childRes = await FsService.getChildren({ id: id });
      childrenMap.value[id] = childRes.data;
      fPathIdHistory.value.push(id);
      const columnItem:ColumnItem = {
        parentId: id,
        list: childRes.data
      };
      pushColumnItem(columnItem);
      console.log(column.value, columnMap.value);
      childRes.data.forEach(item => {
        parentIdMap.value[item.id] = id;
      });
    };

    const pushColumnItem = (columnItem:ColumnItem) => {
      columnMap.value[columnItem.parentId!] = columnItem;

      // if (columnItem.parentId === null) {
      //   column.value = [];
      //   column.value.push(columnItem);
      //   return;
      // }
      // const columnIndex = column.value.findIndex(c => !!c.list.find(m => m.id === columnItem.parentId));
      // if (columnIndex === -1) {
      //   column.value.push(columnItem);
      //   return;
      // } 
      // if (columnIndex === column.value.length - 1) {
      //   column.value.push(columnItem);
      //   return;
      // }
      // column.value = column.value.slice(0, columnIndex + 1);
      // column.value.push(columnItem);
    };

    const selectF = (f:F) => {
      currentFId.value = f.id;
      map.value[f.id] = f;
    };

    const clearSelectF = () => {
      currentFId.value = null;
      getPathInfoById(currentFPathId.value!);
    };

    const enterF = async (f:F) => {
      await getPathInfoById(f.id);
      currentFPathId.value = f.id;
      map.value[f.id] = f;
    };

    return {
      currentFId,
      currentFPathId,
      getPathInfoById,
      childrenMap,
      map,
      column,
      selectF,
      clearSelectF,
      enterF
    };
  }
);