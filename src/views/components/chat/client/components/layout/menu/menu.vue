<template>
  <div class='chat-menu'>
    <template v-for='item in list' :key='item.command'>
      <menu-item :config='item' />
    </template>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './menu-item.vue';
import { useMenuState } from '../../../store/menu';

const { list } = useMenuState();
</script>

<style scoped>
.chat-menu{
  background-color: #303133;
  padding: 0 10px;
  box-sizing: border-box;
  height: 100%;
}
</style>