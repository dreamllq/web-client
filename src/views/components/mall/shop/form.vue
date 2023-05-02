<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='店铺名称' prop='name'>
      <el-input v-model='form.name' placeholder='请输入店铺名称' />
    </el-form-item>
    
    <el-form-item label='店铺头像' prop='headimg'>
      <biz-upload v-model='form.headimg' />
    </el-form-item>

    <el-form-item label='店铺描述' prop='desc'>
      <el-input v-model='form.desc' type='textarea' placeholder='请输入店铺描述' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount, PropType } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { MallShopCreateDto, MallShopUpdateDto } from '@/services/api';
import BizUpload from '@/views/components/common/single-upload.vue';

const props = defineProps({
  defaultData: {
    type: Object as PropType<MallShopCreateDto | MallShopUpdateDto>,
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

const form: MallShopCreateDto | MallShopUpdateDto = reactive({
  name: '',
  desc: '',
  headimg: '' 
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入店铺名称' 
    }
  ]
});

onBeforeMount(() => {
  form.name = props.defaultData.name || '';
  form.desc = props.defaultData.desc || '';
  form.headimg = props.defaultData.headimg || '';
});

const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value!.validate();
  return cloneDeep(form);
};

defineExpose({ getData });
</script>

<style scoped>

</style>