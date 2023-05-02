<template>
  <div class='chat-contacts'>
    <div class='chat-contacts-header-container'>
      <chat-contacts-header />
    </div>
    <div class='chat-contacts-new-friend'>
      <div class='new-friend-btn' @click='onNewFriend'>
        新朋友
      </div>
    </div>
    <div class='chat-contacts-list-container'>
      <chat-contacts-list />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatContactsHeader from './contacts-header/contacts-header.vue';
import ChatContactsList from './contacts-list.vue';
import { MainStatusEnum, useMainState } from '../../store/main';

const { setStatus } = useMainState();

const onNewFriend = () => {
  setStatus(MainStatusEnum.NewFriend);
};
</script>

<style scoped lang="scss">
.chat-contacts{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .chat-contacts-header-container{
    flex: none;
    border-bottom: 1px solid #E4E7ED;
  }

  .chat-contacts-new-friend{
    flex: none;

    .new-friend-btn{
      padding: 10px;
      font-size: 20px;
      line-height: 40px;
      border-bottom: 1px solid #E4E7ED;
      cursor: pointer;
      &:hover{
        background-color: #FAFAFA;
      }
    }
  }

  .chat-contacts-list-container{
    flex: 1;
    overflow: hidden;
  }
}
</style>