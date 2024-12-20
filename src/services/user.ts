import { SessionService, User } from './api';

let user: User | null = null;


export const init = async () => {
  if (user !== null) return;
  const res = await SessionService.getUser();
  console.log(res);
  
  user = res.data.data;
};

export const getUser = () => user;