import { AliyunOcrRecognizeAllTextType } from '@/services/api';


export const RecognizeAllTextTypeOptions = [
  {
    value: AliyunOcrRecognizeAllTextType.ADVANCED,
    label: '通用文字识别高精版'
  },
  {
    value: AliyunOcrRecognizeAllTextType.GENERAL,
    label: '通用文字识别基础版'
  },
  {
    value: AliyunOcrRecognizeAllTextType.COMMERCE,
    label: '电商图片文字'
  },
  {
    value: AliyunOcrRecognizeAllTextType.HAND_WRITING,
    label: '手写文字'
  },
  {
    value: AliyunOcrRecognizeAllTextType.MULTI_LANG,
    label: '多语言文字'
  },
  {
    value: AliyunOcrRecognizeAllTextType.TABLE,
    label: '表格'
  },
  {
    value: AliyunOcrRecognizeAllTextType.ID_CARD,
    label: '身份证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.BANK_CARD,
    label: '银行卡'
  },
  {
    value: AliyunOcrRecognizeAllTextType.INTERNATIONAL_PASSPORT,
    label: '国际护照'
  },
  {
    value: AliyunOcrRecognizeAllTextType.CHINESE_PASSPORT,
    label: '中国护照'
  },
  {
    value: AliyunOcrRecognizeAllTextType.SOCIAL_SECURITY_CARD,
    label: '社保卡'
  },
  {
    value: AliyunOcrRecognizeAllTextType.PERMIT_TO_HK_MO_TW,
    label: '往来港澳台通行证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.PERMIT_TO_MAINLAND,
    label: '来往中国大陆（内地）通行证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.HOUSEHOLD_HEAD,
    label: '户口本首页'
  },
  {
    value: AliyunOcrRecognizeAllTextType.HOUSEHOLD_RESIDENT,
    label: '户口本常住人口页'
  },
  {
    value: AliyunOcrRecognizeAllTextType.ESTATE_CERTIFICATION,
    label: '不动产权证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.BIRTH_CERTIFICATION,
    label: '出生证明'
  },
  {
    value: AliyunOcrRecognizeAllTextType.HKID_CARD,
    label: '中国香港身份证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.INTERNATIONAL_ID_CARD,
    label: '国际身份证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.STAMP,
    label: '公章'
  },
  {
    value: AliyunOcrRecognizeAllTextType.MIXED_INVOICE,
    label: '混贴票证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.INVOICE,
    label: '增值税发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.CAR_INVOICE,
    label: '机动车销售统一发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.QUOTA_INVOICE,
    label: '定额发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.AIR_ITINERARY,
    label: '航空行程单'
  },
  {
    value: AliyunOcrRecognizeAllTextType.TRAIN_TICKET,
    label: '火车票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.TOLL_INVOICE,
    label: '过路过桥费发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.ROLL_TICKET,
    label: '增值税发票卷票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.BANK_ACCEPTANCE,
    label: '银行承兑汇票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.BUS_SHIP_TICKET,
    label: '客运车船票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.NON_TAX_INVOICE,
    label: '非税收入发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.COMMON_PRINTED_INVOICE,
    label: '通用机打发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.HOTEL_CONSUME,
    label: '酒店流水'
  },
  {
    value: AliyunOcrRecognizeAllTextType.PAYMENT_RECORD,
    label: '支付详情页'
  },
  {
    value: AliyunOcrRecognizeAllTextType.PURCHASE_RECORD,
    label: '电商订单页'
  },
  {
    value: AliyunOcrRecognizeAllTextType.RIDE_HAILING_ITINERARY,
    label: '网约车行程单'
  },
  {
    value: AliyunOcrRecognizeAllTextType.SHOPPING_RECEIPT,
    label: '购物小票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.TAX_CLEARANCE_CERTIFICATE,
    label: '税收完税证明'
  },
  {
    value: AliyunOcrRecognizeAllTextType.USED_CAR_INVOICE,
    label: '二手车销售统一发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.VEHICLE_LICENSE,
    label: '行驶证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.DRIVING_LICENSE,
    label: '驾驶证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.VEHICLE_REGISTRATION,
    label: '机动车登记证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.VEHICLE_CERTIFICATION,
    label: '车辆合格证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.LICENSE_PLATE_NUMBER,
    label: '车牌'
  },
  {
    value: AliyunOcrRecognizeAllTextType.CAR_VIN_CODE,
    label: '车辆 vin 码'
  },
  {
    value: AliyunOcrRecognizeAllTextType.BUSINESS_LICENSE,
    label: '营业执照'
  },
  {
    value: AliyunOcrRecognizeAllTextType.INTERNATIONAL_BUSINESS_LICENSE,
    label: '国际企业执照'
  },
  {
    value: AliyunOcrRecognizeAllTextType.MEDICAL_DEVICE_MANAGE_LICENSE,
    label: '医疗器械经营许可证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.MEDICAL_DEVICE_PRODUCE_LICENSE,
    label: '医疗器械生产许可证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.COSMETIC_PRODUCE_LICENSE,
    label: '化妆品生产许可证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.QR_CODE,
    label: '二维码'
  },
  {
    value: AliyunOcrRecognizeAllTextType.BAR_CODE,
    label: '条形码'
  },
  {
    value: AliyunOcrRecognizeAllTextType.TAXI_INVOICE,
    label: '出租车发票'
  },
  {
    value: AliyunOcrRecognizeAllTextType.TRADEMARK_CERTIFICATE,
    label: '商标注册证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.FOOD_PRODUCE_LICENSE,
    label: '食品生产许可证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.FOOD_MANAGEMENT_LICENSE,
    label: '食品经营许可证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.CLASS_IIMEDICAL_DEVICE_MANAGE_LICENSE,
    label: '第二类医疗器械经营备案凭证'
  },
  {
    value: AliyunOcrRecognizeAllTextType.WAY_BILL,
    label: '电子面单'
  },
  {
    value: AliyunOcrRecognizeAllTextType.BANK_ACCOUNT_PERMIT,
    label: '银行开户许可证'
  }
];