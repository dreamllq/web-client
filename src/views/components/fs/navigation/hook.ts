import { useNavigationState } from '../store/navigation';
import { usePathState } from '../store/path';

export const useNavigationHook = () => {
  const { currentFPathId, getPathInfoById, currentFId, selectedFList } = usePathState()!;
  const { prevHistory, nextHistory } = useNavigationState()!;

  const back = async () => {
    const id = prevHistory.value.pop();
    nextHistory.value.push(currentFPathId.value!);
    await getPathInfoById(id!);
    currentFPathId.value = id!;
    currentFId.value = id!;
    selectedFList.value = [id!];
  };

  const forward = async () => {
    const id = nextHistory.value.pop();
    prevHistory.value.push(currentFPathId.value!);
    await getPathInfoById(id!);
    currentFPathId.value = id!;
    currentFId.value = id!;
    selectedFList.value = [id!];
  };

  return {
    back,
    forward 
  };
};