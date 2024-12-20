<template>
  <biz-select
    :multiple='multiple'
    placeholder='请选择账号'
    :fetch-data='fetchData'
    :model-value='props.modelValue'
    @update:model-value='onUpdateModelValue' />
</template>

<script setup>
import { AiBaiduAccountService } from '@/services/api';
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
  }
});

const fetchData = async () => {
  const res = await AiBaiduAccountService.getAll();

  return res.data.data.map(item => ({
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