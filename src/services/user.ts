import { SessionService } from './api';

let user: object | null = null;


export const init = async () => {
  if (user !== null) return;
  const res = await SessionService.getUser();
  user = res.data;
};

export const getUser = () => user;