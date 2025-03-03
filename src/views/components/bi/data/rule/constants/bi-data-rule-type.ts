import { BiDataRuleType } from '@/services/api';

export const BI_DATA_RULE_TYPE_LIST = [
  {
    label: 'excel文件',
    value: BiDataRuleType.EXCEL
  },
  {
    label: 'sql代码',
    value: BiDataRuleType.SQL
  },
  {
    label: 'api接口',
    value: BiDataRuleType.API
  }
];
