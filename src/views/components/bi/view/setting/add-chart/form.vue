<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='图表' prop='chartMetaId'>
      <bi-chart-select v-model='form.chartMetaId' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import BiChartSelect from '../../../chart/meta/bi-chart-select.vue';

const props = defineProps({
  defaultData: {
    type: Object,
    default: () => ({})
  },
  disabledKeys: {
    type: Array,
    default: () => []
  },
  hiddenKeys: {
    type: Array,
    default: () => []
  }
});

const form = reactive({ chartMetaId: '' });


const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value!.validate();
  return cloneDeep(form);
};

defineExpose({ getData });
</script>

<style scoped>

</style>