<template>
  <excel-table
    v-if='ready'
    :columns='columns' 
    :data='data' />
</template>

<script setup lang="ts">
import { BiDataViewService } from '@/services/api';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ExcelTable from './excel-table.vue';

const route = useRoute();
const ready = ref(false);
const columns = ref([]);
const data = ref([]);

onMounted(async () => {
  ready.value = false;
  const res = await BiDataViewService.get({ path: { metaId: route.query.id as string } });
  columns.value = res.data?.data.columns;
  data.value = res.data?.data.data;
  ready.value = true;
});
</script>

<style scoped>

</style>