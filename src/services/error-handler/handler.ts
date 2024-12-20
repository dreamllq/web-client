import { ElMessage } from 'element-plus';
// import { ApiError } from '@/services/api';

export default (error) => {
  console.error(error);
  console.log(JSON.stringify(error));

  // if (error instanceof ApiError) {
  if (error.status === 401) {
    console.log('login');
    window.location.href = '/web/login';
  } else if (error.status === 400) {
    ElMessage.error(error.body.message);
  } else if (error.status === 500) {
    ElMessage.error(error.body.message);
  }
  // }
};