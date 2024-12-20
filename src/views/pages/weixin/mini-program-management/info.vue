<template>
  <div>
    <div>
      name: {{ wxData.name }}
    </div>
    <div>
      appid: {{ wxData.appid }}
    </div>
    <div>
      appSecret: {{ wxData.appSecret }}
    </div>
    <div>
      获取手机号接口：{{ `/api/weixin-platform/mini-program/getPhoneNumber/${wxData.appid}?code=$code` }}
    </div>
    <div>
      小程序登录接口：{{ `/api/weixin-platform/mini-program/code2Session/${wxData.appid}?code=$code` }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { WeixinService } from '@/services/api';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const wxData = ref({});
onMounted(async () => {
  const res = await WeixinService.get({ path: { id: route.query.wid as string } });
  wxData.value = res.data?.data;
});
</script>

<style scoped>

</style>

<route>
  {
    "name": "mini-program-management-info"
  }
</route>