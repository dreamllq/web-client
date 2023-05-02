<template>
  <div class='chat-aside'>
    <chat-contacts v-if='current === "contacts"' />
    <chat-session v-if='current === "chat"' />
  </div>
</template>

<script setup lang="ts">
import ChatContacts from '../../contacts/contacts.vue';
import ChatSession from '../../session/session.vue';
import { useMenuState } from '../../../store/menu';

const { current } = useMenuState();

</script>

<style scoped lang="scss">
.chat-aside{
  height: 100%;
  border-right: 1px solid #E4E7ED;
}
</style>