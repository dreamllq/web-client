import { SessionService } from './api';

let resources: string[] | null = null;

export function checkPermission(key: string) : boolean | undefined {
  // return resources?.includes(key);
  return true;
}

export const init = async () => {
  if (Array.isArray(resources)) return;

  const res = await SessionService.getResources();
  resources = res.data;
};
