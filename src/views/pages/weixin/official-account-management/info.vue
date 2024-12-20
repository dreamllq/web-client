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
      公众号开发notify地址：{{ `/api/weixin-platform/official-account/notify/${wxData.appid}` }}
    </div>
    
    <div>
      access_token获取地址：{{ `/api/weixin-platform/official-account/getAccessToken/${wxData.appid}` }}
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
    "name": "official-account-management-info"
  }
</route>