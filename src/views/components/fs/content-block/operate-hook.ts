import { F } from '@/services/api';
import { usePathState } from '../store/path';
import { useNavigationState } from '../store/navigation';
import { ColumnItem } from '../type';
import { useBlockContextMenuState } from '../store/block-context-menu';
import { useFContextMenuState } from '../store/f-context-menu';

export const useOperateHook = () => {

  const { currentFPathId, enterF, currentFId, selectF, multipleSelectF, shiftMultipleSelectF, selectedFList } = usePathState();
  const { push } = useNavigationState();
  const { show, hide } = useBlockContextMenuState();
  const { hide: hideFContextMenu } = useFContextMenuState();
  const onClickBlock = (columnItem: ColumnItem) => {
    currentFPathId.value = columnItem.parentId;
    currentFId.value = columnItem.parentId;
    selectedFList.value = [columnItem.parentId!];
    hide();
    hideFContextMenu();
  };
  
  const onContextmenu = (e, columnItem: ColumnItem) => {
    show(e, columnItem.parentId);
  };
  
  const onEnterF = (f:F) => {
    push(currentFPathId.value);
    enterF(f);
    // selectF(f);
    hideFContextMenu();
  };
  
  const onSelectF = (f:F) => {
    selectF(f);
    hideFContextMenu();
  };
  
  const onMultipleSelectF = (f:F) => {
    hideFContextMenu();
    multipleSelectF(f);
  };

  const onShiftMultipleSelectF = (f:F) => {
    hideFContextMenu();
    shiftMultipleSelectF(f);
  };

  return {
    onClickBlock,
    onContextmenu,
    onEnterF,
    onSelectF,
    onMultipleSelectF,
    onShiftMultipleSelectF
  };
};