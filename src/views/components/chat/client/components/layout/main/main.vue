<template>
  <div class='chat-main'>
    <chat-main-new-friend v-if='status === MainStatusEnum.NewFriend' />
    <chat-main-friend v-if='status === MainStatusEnum.Friend' />
    <chat-main-message v-if='status === MainStatusEnum.Message' />
  </div>
</template>

<script setup lang="ts">
import ChatMainNewFriend from '../../contacts/new-friend/new-friend.vue';
import ChatMainFriend from '../../contacts/friend/friend.vue';
import ChatMainMessage from '../../message/message.vue';
import { useMainState, MainStatusEnum } from '../../../store/main';

const { status } = useMainState();

</script>

<style scoped lang="scss">
.chat-main{
  height: 100%;
}
</style>