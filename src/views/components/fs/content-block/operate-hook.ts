import { F } from '@/services/api';
import { usePathState } from '../store/path';
import { useNavigationState } from '../store/navigation';
import { useBlockContextMenuState } from '../store/block-context-menu';
import { useFContextMenuState } from '../store/f-context-menu';

export const useOperateHook = () => {

  const { currentFPathId, enterF, currentFId, selectF, multipleSelectF, shiftMultipleSelectF, selectedFList } = usePathState()!;
  const { push } = useNavigationState()!;
  const { show: showBlockContextMenu, hide: hideBlockContextMenu } = useBlockContextMenuState()!;
  const { show: showFContextMenu, hide: hideFContextMenu } = useFContextMenuState()!;
  const onClickBlock = (id:string) => {
    currentFPathId.value = id;
    currentFId.value = id;
    selectedFList.value = [id!];
    hideBlockContextMenu();
    hideFContextMenu();
  };
  
  const onBlockContextmenu = (e, id:string) => {
    showBlockContextMenu(e, id);
  };

  const onFContextMenu = (e, id: string) => {
    showFContextMenu(e, id);
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
    onBlockContextmenu,
    onFContextMenu,
    onEnterF,
    onSelectF,
    onMultipleSelectF,
    onShiftMultipleSelectF
  };
};