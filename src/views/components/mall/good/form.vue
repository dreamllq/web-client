<template>
  <el-form
    ref='formRef'
    :model='form'
    label-position='top'
    :rules='rules'>
    <el-form-item label='店铺' prop='shopId'>
      <mall-shop-select v-model='form.shopId' :disabled='props.disabledKeys.includes("shopId")' />
    </el-form-item>
    <el-form-item label='商品名称' prop='title'>
      <el-input v-model='form.title' placeholder='请输入商品名称' />
    </el-form-item>
    <el-form-item label='商品分组' prop='groupId'>
      <good-group-select v-model='form.groupId' />
    </el-form-item>
    <el-form-item label='商品描述' prop='desc'>
      <el-input v-model='form.desc' type='textarea' placeholder='请输入商品描述' />
    </el-form-item>
    <el-form-item label='商品头像' prop='headimg'>
      <biz-single-upload v-model='form.headimg' />
    </el-form-item>
    <el-form-item label='商品轮播图' prop='images'>
      <biz-multiple-upload v-model='form.images' />
    </el-form-item>
    <el-form-item label='商品价格' prop='price'>
      <el-input v-model='form.price' placeholder='请输入商品价格' />
    </el-form-item>
    <el-form-item label='商品详情' prop='detail'>
      <!-- <el-input v-model='form.detail' type='textarea' placeholder='请输入商品详情' /> -->
      <rich-editor v-model='form.detail' />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { reactive, ref, onBeforeMount } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import MallShopSelect from '@/views/components/mall/shop/mall-shop-select.vue';
import BizSingleUpload from '@/views/components/common/single-upload.vue';
import BizMultipleUpload from '@/views/components/common/multiple-upload.vue';
import RichEditor from '@/views/components/common/rich-editor/index.vue';
import GoodGroupSelect from '@/views/components/mall/good-group/good-group-select.vue';

const props = defineProps({
  defaultData: {
    type: Object,
    default: () => ({
      title: '',
      desc: '',
      groupId: '',
      headimg: '',
      images: [],
      price: '',
      detail: '',
      shopId: undefined
    })
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

const form = reactive({ 
  title: '',
  desc: '',
  headimg: '',
  groupId: '',
  images: [],
  price: '',
  detail: '',
  shopId: undefined
});

const rules = reactive<FormRules>({
  shopId: [
    {
      required: true,
      message: '请选择店铺' 
    }
  ],
  title: [
    {
      required: true,
      message: '请输入商品名称'
    }
  ],
  price: [
    {
      required: true,
      message: '请输入商品价格'
    }
  ]
});

onBeforeMount(() => {
  form.title = props.defaultData.title;
  form.desc = props.defaultData.desc;
  form.headimg = props.defaultData.headimg;
  form.groupId = props.defaultData.groupId;
  form.images = cloneDeep(props.defaultData.images);
  form.price = props.defaultData.price;
  form.detail = props.defaultData.detail;
  form.shopId = props.defaultData.shopId;
});

const formRef = ref<FormInstance>();

const getData = async () => {
  await formRef.value!.validate();
  console.log(form);
  return cloneDeep(form);
};

defineExpose({ getData });
</script>

<style scoped>

</style>