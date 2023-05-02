<template>
  <biz-select
    :multiple='multiple'
    :placeholder='placeholder'
    :fetch-data='fetchData'
    :model-value='props.modelValue'
    @update:model-value='onUpdateModelValue' />
</template>

<script setup>
import { WeixinService } from '@/services/api';
import { BizSelect } from 'lc-vue-biz-select';

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
  },
  filter: {
    type: Object,
    default: () => ({})
  },
  placeholder: {
    type: String,
    default: '请选择'
  }
});

const fetchData = async () => {
  const res = await WeixinService.getAll({ ...props.filter });

  return res.data.map(item => ({
    label: item.name,
    value: item.id
  }));
};

const emit = defineEmits(['update:modelValue']);
const onUpdateModelValue = (data) => {
  emit('update:modelValue', data);
};

</script>

<style lang="scss" scoped>

</style>