
export const isImage = (ext?:string) => {
  const imageExt = [
    'png',
    'jpg',
    'jpeg',
    'gif'
  ];

  return imageExt.includes(ext!);
};

export const isExcel = (ext?:string) => {
  const excelExt = ['xls', 'xlsx'];

  return excelExt.includes(ext!);
};