<template>
  <el-container direction='vertical'>
    <el-aside>
      <el-tabs
        v-model='activeName'
        type='card'
      >
        <el-tab-pane label='账号管理' name='account' />
        <el-tab-pane label='OCR' name='ocr' />
        <el-tab-pane label='通义服务' name='service' />
      </el-tabs>
    </el-aside>
    <el-container style='margin-top: 16px;'>
      <el-main style='padding: 0'>
        <aliyun-account v-if='activeName === "account"' />
        <aliyun-ocr v-else-if='activeName === "ocr"' />
        <aliyun-service v-else-if='activeName === "service"' />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AliyunAccount from '@/views/components/ai-management/aliyun/account/index.vue';
import AliyunOcr from '@/views/components/ai-management/aliyun/ocr/index.vue';
import AliyunService from '@/views/components/ai-management/aliyun/service/index.vue';

import { useRoute, useRouter } from 'vue-router';

const { replace } = useRouter();
const { query } = useRoute();

const activeName = ref(query.biz || 'account');

watch(() => activeName.value, () => {
  replace({ query: { biz: activeName.value } });
});
</script>

<style scoped>

</style>

<route>
  {
    "name":"ai-aliyun"
  }
</route>