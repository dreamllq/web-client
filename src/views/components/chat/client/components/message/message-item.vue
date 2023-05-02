<template>
  <div v-if='props.info.creator.id !== userId' class='chat-message-item'>
    <div class='item-img'>
      <img :src='props.info.creator.headimg' alt=''>
    </div>

    <div class='item-content'>
      {{ props.info.content }}
    </div>
  </div>
  <div v-else class='chat-message-item'>
    <div class='item-content align-right'>
      {{ props.info.content }}
    </div>
    <div class='item-img'>
      <img :src='props.info.creator.headimg' alt=''>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Message } from '../../store/message';
import { useBaseState } from '../../store/base';

const { userId } = useBaseState();

const props = defineProps({
  info: {
    type: Object as PropType<Message>,
    required: true
  }
});
</script>

<style scoped lang="scss">
.chat-message-item{
  display: flex;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  .item-img{
    img{
      width: 40px;
      height: 40px;
    }
  }

  .item-content{
    font-size: 16px;
    line-height: 1.4;
    margin-left: 10px;
    margin-right: 10px;
    flex: 1;
    overflow: hidden;
   
    &.align-right{
      text-align: right;
    }
  }
}
</style>