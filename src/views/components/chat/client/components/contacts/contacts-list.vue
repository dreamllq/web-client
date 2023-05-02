<template>
  <div class='chat-contacts'>
    <template v-for='item in friendList' :key='item.id'>
      <chat-contacts-item :info='item' />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useContactsState } from '../../store/contacts';
import ChatContactsItem from './contacts-item.vue';

const { friendList } = useContactsState();

</script>

<style scoped>
.chat-contacts{
  
}
</style>