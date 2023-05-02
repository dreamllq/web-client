<template>
  <div style='margin: -20px;height: calc(100% + 40px);'>
    <chat-client v-if='userId' :user-id='userId' />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatClient from '@/views/components/chat/client';
import { getUser } from '@/services/user';
const userId = ref(getUser()!.id);
</script>

<style scoped>

</style>

<route>
  {
    "name":"chat-client"
  }
</route>