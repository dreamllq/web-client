import { F, FsService, PathType } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { ColumnList, ColumnItem, ColumnMap, ParentIdMap } from '../type';

const [useProvidePathState, usePathState] = createInjectionState(
  () => {
    const childrenMap = ref<{[index:string]: F[]}>({});
    const map = ref<{[index:string]: F}>({});
    const columnMap = ref<ColumnMap>({});
    const tree = ref({});
    const parentIdMap = ref<ParentIdMap>({});
    const currentFId = ref<string>('null');
    const currentFPathId = ref<string>('null');
    const fPathIdHistory = ref<(string)[]>([]);
    const selectedFList = ref<string[]>([]);
    const renameF = ref<string|null>();

    const getPathInfoById = async (id:string) => {
      if (id !== 'null') {
        const fRes = await FsService.get({ path: { id: id || 'null' } });
        map.value[fRes.data!.data.id] = fRes.data!.data;
      } else {
        map.value['null'] = {
          id: 'null',
          pathType: PathType.DIR
        };
      }
      const childRes = await FsService.getChildren({ path: { id: id || 'null' } });
      childrenMap.value[id] = childRes.data!.data;
      fPathIdHistory.value.push(id);
      const columnItem:ColumnItem = {
        parentId: id,
        list: childRes.data!.data
      };
      pushColumnItem(columnItem);
      childRes.data?.data.forEach(item => {
        parentIdMap.value[item.id] = id;
        map.value[item.id] = item;
      });
    };

    const pushColumnItem = (columnItem:ColumnItem) => {
      columnMap.value[columnItem.parentId!] = columnItem;
    };

    // 单击选择
    const selectF = async (f:F) => {
      await getPathInfoById(f.id);
      currentFId.value = f.id;
      selectedFList.value = [f.id];
      map.value[f.id] = f;
    };

    // ctrl / cmd  多选
    const multipleSelectF = (f:F) => {
      map.value[f.id] = f;
      if (selectedFList.value.some(item => item === f.id)) {
        selectedFList.value = selectedFList.value.filter(item => item !== f.id);
      } else {
        selectedFList.value = [...selectedFList.value, f.id];
      }
    };

    //  shift 多选
    const shiftMultipleSelectF = (f:F) => {
      const fId1 = selectedFList.value.length > 0 ? selectedFList.value[0] : columnMap.value[f.parent.id].list[0].id;
      const fId2 = f.id;
      const idRange = [fId1, fId2];
      const list:string[] = [];
      let isIn = false;
      columnMap.value[f.parent.id].list.forEach(item => {
        if (idRange.includes(item.id)) {
          isIn = !isIn;
          const index = idRange.findIndex(id => id === item.id);
          idRange.splice(index, 1);
          if (!isIn) {
            list.push(item.id);
          }
        }

        if (isIn) {
          list.push(item.id);
        }

        if (idRange.includes(item.id)) {
          isIn = !isIn;
        }
      });
      selectedFList.value = list;
    };

    const clearSelectF = () => {
      currentFId.value = 'null';
      getPathInfoById(currentFPathId.value!);
    };

    const enterF = async (f:F) => {
      await getPathInfoById(f.id);
      currentFPathId.value = f.id;
      currentFId.value = f.id;
      selectedFList.value = [f.id];
      map.value[f.id] = f;
    };

    return {
      currentFId,
      currentFPathId,
      parentIdMap,
      getPathInfoById,
      childrenMap,
      map,
      selectF,
      multipleSelectF,
      shiftMultipleSelectF,
      selectedFList,
      clearSelectF,
      enterF,
      columnMap,
      renameF
    };
  }
);

export { useProvidePathState, usePathState };