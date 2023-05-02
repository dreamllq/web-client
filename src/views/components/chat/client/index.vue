<template>
  <chat-layout>
    <template #menu>
      <chat-menu />
    </template>
    <template #aside>
      <chat-aside />
    </template>
    <template #main>
      <chat-main />
    </template>
  </chat-layout>
</template>

<script setup lang="ts">

import ChatLayout from './components/layout/index.vue';
import ChatMenu from './components/layout/menu/menu.vue';
import ChatAside from './components/layout/aside/aside.vue';
import ChatMain from './components/layout/main/main.vue';
import { useBaseState } from './store/base';
import { useNotify } from './compositions/notify';

const { setUserId } = useBaseState();
useNotify();

const props = defineProps({
  userId: {
    type: String,
    required: true
  }
});

setUserId(props.userId);

</script>

<style scoped>

</style>