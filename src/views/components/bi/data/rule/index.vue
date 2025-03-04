<template>
  <el-container direction='vertical'>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <biz-form v-if='ready' ref='formRef' :default-data='defaultData' />
      </el-main>
    </el-container>

    <el-aside style='text-align: right;'>
      <el-button type='primary' @click='onSubmit'>
        保存
      </el-button>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BizForm from './form.vue';
import { BiDataRuleService, BiDataRule } from '@/services/api';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';

const route = useRoute();
const defaultData = ref<Partial<BiDataRule>>();
const formRef = ref();
const ready = ref(false);

onMounted(async () => {
  ready.value = false;
  const res = await BiDataRuleService.get({ path: { metaId: route.query.id as string } });
  defaultData.value = res.data?.data;
  ready.value = true;
});

const onSubmit = async () => {
  const data = await formRef.value!.getData();
  if (defaultData.value) {
    await BiDataRuleService.update({
      path: { id: defaultData.value.id },
      body: { ...data }
    });
  } else {
    await BiDataRuleService.create({
      path: { metaId: route.query.id as string },
      body: { ...data }
    });
  }
  ElMessage.success('保存成功');
};
</script>

<style scoped>

</style>