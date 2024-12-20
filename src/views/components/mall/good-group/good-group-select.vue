<template>
  <el-tree-select
    v-if='ready'
    style='width: 100%;'
    :model-value='props.modelValue'
    :data='data'
    :props='propsConfig'
    filterable
    check-strictly
    @update:model-value='onUpdateModelValue' />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MallGoodGroup, MallGoodGroupService } from '@/services/api';

const props = defineProps({
  modelValue: {
    type: [
      String,
      Number,
      Array
    ],
    default: undefined
  }
});
const emit = defineEmits(['update:modelValue']);

const data = ref<MallGoodGroup[]>([]);
const ready = ref(false);

const propsConfig = {
  value: 'id',
  label: 'name',
  children: 'children'
};

onMounted(async () => {
  const res = await MallGoodGroupService.getTree();
  data.value = res.data?.data;
  ready.value = true;

});

const onUpdateModelValue = (data) => {
  emit('update:modelValue', data);
};

</script>

<style scoped>

</style>