import { SessionService, User } from './api';

let user: User | null = null;


export const init = async () => {
  if (user !== null) return;
  const res = await SessionService.getUser();
  user = res.data;
};

export const getUser = () => user;