<template>
  <div>
    <p>登录用户：</p>
    <p>{{ data.userInfo }}</p>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { SessionService } from '@/services/api';

const data = reactive({ userInfo: {} });

onMounted(async () => {
  const res = await SessionService.getUser();
  data.userInfo = res.data;
});

</script>

<style lang="scss" scoped>

</style>

<route>
  {
    "name":"welcome"
  }
</route>