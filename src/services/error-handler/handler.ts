import { ElMessage } from 'element-plus';
// import { ApiError } from '@/services/api';
import { AuthorizationError, HttpError, InterfaceError } from '@/services/error-definition';

export default (error) => {
  console.error(error);
  console.log(JSON.stringify(error));

  if (error instanceof AuthorizationError) {
    console.log('login');
    window.location.href = '/web/login';
  } else if (error instanceof HttpError) {
    ElMessage.error(error.message);
  } else if (error instanceof InterfaceError) {
    ElMessage.error(error.message);
  }
};