<template>
  <div class='new-friend'>
    <div class='new-friend-header'>
      新朋友
    </div>
    <template v-for='item in newFriendList' :key='item.id'>
      <new-friend-item :info='item' />
    </template>
  </div>
</template>

<script setup lang="ts">
import NewFriendItem from './new-friend-item.vue';
import { useContactsState } from '../../../store/contacts';

const { newFriendList } = useContactsState();

</script>

<style scoped lang="scss">
.new-friend{
  height: 100%;
  box-sizing: border-box;

  .new-friend-header{
    line-height: 52px;
    border-bottom: 1px solid #E4E7ED;
    flex: none;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>