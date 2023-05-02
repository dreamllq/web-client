import { FileService } from '@/services/api';
import { Editor } from '@ckeditor/ckeditor5-core';
import { FileLoader } from '@ckeditor/ckeditor5-upload';

class UploadAdapter {
  loader: FileLoader;
  constructor(loader:FileLoader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  async upload() {
    const file = await this.loader.file;
    console.log(file);
    const res = await FileService.uploadFile({ formData: { file: file! } });
    this.loader.uploadTotal = 100;
    this.loader.uploaded = 100;
    return { default: res.data.url };
    // // Update the loader's progress.
    // server.onUploadProgress(data => {
    //   loader.uploadTotal = data.total;
    //   loader.uploaded = data.uploaded;
    // });

    // // Return a promise that will be resolved when the file is uploaded.
    // return loader.file
    //   .then(file => server.upload(file));
  }

  // Aborts the upload process.
  abort() {
    // Reject the promise returned from the upload() method.
    // server.abortUpload();
  }
}

export function CustomUploadAdapterPlugin(editor:Editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => new UploadAdapter(loader);
}