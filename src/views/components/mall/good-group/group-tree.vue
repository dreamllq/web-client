<template>
  <el-tree-v2
    :data='data'
    :props='props'
    :height='500'
    @current-change='onCurrentChange' />  
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MallGoodGroup, MallGoodGroupService } from '@/services/api';

const emit = defineEmits(['current-change']);

const data = ref<MallGoodGroup[]>([]);
const props = {
  value: 'id',
  label: 'name',
  children: 'children'
};

onMounted(async () => {
  refresh();
});

const onCurrentChange = (data, node) => {
  emit('current-change', data, node);
};

const refresh = async () => {
  const res = await MallGoodGroupService.getTree();
  data.value = res.data;
};

defineExpose({ refresh });
</script>

<style scoped>

</style>