<template>
  <div />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { AuthService } from '@/services/api';
import { setToken } from '@/services/token';
import { onMounted } from 'vue';

const { query } = useRoute();
const { code } = query;

onMounted(async () => {
  const res = await AuthService.loginByCode({ requestBody: { code: code as string } });
  setToken(res.data.access_token);
  window.location.href = '/web';
});
</script>

<style scoped>

</style>