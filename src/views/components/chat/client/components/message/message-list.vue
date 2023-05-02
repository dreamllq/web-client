<template>
  <div
    ref='messageListRef'
    class='chat-message-list'
    @scroll='onScroll'
    @wheel='onWheel'>
    <div v-if='hasMore' style='text-align: center;'>
      <el-button
        link
        type='primary'
        :loading='loading'
        @click='onMoreMessage'>
        查看更多消息
      </el-button>
    </div>
    <template v-for='item in mList' :key='item.id'>
      <chat-message-item :info='item' />
    </template>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, computed, ref, watch } from 'vue';
import ChatMessageItem from './message-item.vue';
import { useSessionState } from '../../store/session';
import { useMessageState } from '../../store/message';
import { cloneDeep, reverse } from 'lodash';
import { nextTick } from 'vue';

const { currentSession } = useSessionState();
const { list, refresh, getByDirection, hasMore, loading } = useMessageState();

const messageListRef = ref();
const isBottom = ref(true);
const isTop = ref(false);

const mList = computed(() => {
  let l = cloneDeep(list.value);
  reverse(l);
  return l;
});

watchEffect(async () => {
  await refresh({ contactsId: currentSession.value!.contacts.id });
});

watch(() => currentSession.value, () => {
  messageListRef.value.scrollTop = messageListRef.value.scrollHeight - messageListRef.value.clientHeight;
});

watch(() => mList.value, async () => {
  const scrollBottom = messageListRef.value.scrollHeight - messageListRef.value.clientHeight - messageListRef.value.scrollTop;
  await nextTick();
  messageListRef.value.scrollTop = messageListRef.value.scrollHeight - messageListRef.value.clientHeight - scrollBottom;
}, { deep: true });

const onScroll = () => {
  isBottom.value = messageListRef.value.scrollHeight === (messageListRef.value.clientHeight + messageListRef.value.scrollTop);
  isTop.value = messageListRef.value.scrollTop === 0;
};

const onWheel = () => {
  if (isTop.value && hasMore.value) {
    getByDirection(currentSession.value!.contacts.id, 'forward');
  }
};

const onMoreMessage = () => {
  getByDirection(currentSession.value!.contacts.id, 'forward');
};
</script>

<style scoped lang="scss">
.chat-message-list{
  height: 100%;
  overflow: auto;
}
</style>