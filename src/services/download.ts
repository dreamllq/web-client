import FileSaver from 'file-saver';
import { File, FileStaticService } from './api';

export const download = async (file: File) => {
  const res = await FileStaticService.view({
    path: { id: file.id },
    responseType: 'blob' 
  });
  const disposition = res.headers['content-disposition'];
  const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = filenameRegex.exec(disposition);
  const filename = matches![1].replace(/['"]/g, '');
  FileSaver.saveAs(res.data as Blob, decodeURIComponent(filename));
};