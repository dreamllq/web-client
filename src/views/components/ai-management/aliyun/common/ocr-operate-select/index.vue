<template>
  <biz-select
    :multiple='multiple'
    placeholder='请选择类型'
    :fetch-data='fetchData'
    :model-value='props.modelValue'
    @update:model-value='onUpdateModelValue' />
</template>

<script setup>
import { BizSelect } from 'lc-vue-biz-select';
import { OcrOperatesOptions } from '../../constants/ocr-operate';

const props = defineProps({
  modelValue: {
    type: [
      String,
      Number,
      Array
    ],
    default: undefined
  },
  multiple: {
    type: Boolean,
    default: false
  }
});

const fetchData = async () => OcrOperatesOptions.map(item => ({
  label: item.label,
  value: item.value
}))
;

const emit = defineEmits(['update:modelValue']);
const onUpdateModelValue = (data) => {
  emit('update:modelValue', data);
};

</script>

<style lang="scss" scoped>

</style>