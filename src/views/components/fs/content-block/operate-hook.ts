import { F, FileService, FileStaticService, PathType } from '@/services/api';
import { usePathState } from '../store/path';
import { useNavigationState } from '../store/navigation';
import { computed } from 'vue';
import { TextTip } from 'lc-vue-text-tip';
import * as FileSaver from 'file-saver';
import { ColumnItem } from '../type';
import { useBlockContextMenuState } from '../store/block-context-menu';
import { download } from '@/services/download';
import { usePreview } from '../preview/hook';
import { useFContextMenuState } from '../store/f-context-menu';

export const useOperateHook = () => {

  const { column, currentFPathId, enterF, currentFId, selectF, map, multipleSelectF, selectedFList } = usePathState();
  const { push } = useNavigationState();
  const { show, hide } = useBlockContextMenuState();
  const { show: showFContextMenu, hide: hideFContextMenu, triggerF } = useFContextMenuState();
  const onClickBlock = (columnItem: ColumnItem) => {
    currentFPathId.value = columnItem.parentId;
    currentFId.value = columnItem.parentId;
    hide();
    hideFContextMenu();
  };
  
  const onContextmenu = (e, columnItem: ColumnItem) => {
    show(e, columnItem.parentId);
  };
  
  const onEnterF = (f:F) => {
    push(currentFPathId.value);
    enterF(f);
    selectF(f);
  };
  
  const onSelectF = (f:F) => {
    // currentFPathId.value = f.parent.id;
    selectF(f);
    hideFContextMenu();
  };
  
  const onMultipleSelectF = (f:F) => {
    hideFContextMenu();
    multipleSelectF(f);
  };

  return {
    onClickBlock,
    onContextmenu,
    onEnterF,
    onSelectF,
    onMultipleSelectF
  };
};