<template>
  <div
    class='session-item'
    :class='{selected:currentSession?.id === props.info.id}'
    @click='onSelectSession'
    @contextmenu='onContextMenu'>
    <div class='item-img'>
      <img :src='props.info.contacts.contacts.headimg' alt=''>
    </div>

    <div class='item-title'>
      <div class='name'>
        {{ props.info.contacts.contacts.nickName }}
      </div>
      <div class='tip'>
        <span v-if='unReadStatus[props.info.contacts.id]' class='tip-status'>[新消息]</span>
        <span class='tip-text'>{{ lastMessageMap[props.info.contacts.id] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatSession, ChatSessionService } from '@/services/api';
import { PropType, ref } from 'vue';
import { useSessionState } from '../../store/session';
import { MainStatusEnum, useMainState } from '../../store/main';
import { useMessageState } from '../../store/message';
import ContextMenu from '@imengyu/vue3-context-menu';
import { ElMessageBox } from 'element-plus';

const { currentSession, setCurrentSession, unReadStatus } = useSessionState();
const { setStatus } = useMainState();
const { lastMessageMap } = useMessageState();


const props = defineProps({
  info: {
    type: Object as PropType<ChatSession>,
    required: true
  }
});

const onSelectSession = () => {
  setCurrentSession(props.info);
  setStatus(MainStatusEnum.Message);
};

const onContextMenu = (e : MouseEvent) => {
// prevent the browser's default menu
  e.preventDefault();
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    items: [
      { 
        label: '删除', 
        onClick: async () => {
          await ElMessageBox.confirm('确认删除吗?', '删除');
          await ChatSessionService.remove({ path: { id: props.info.id } });
        }
      }
    ]
  }); 
};
</script>

<style scoped lang="scss">
.session-item{
  border-bottom: 1px solid #E4E7ED;
  display: flex;
  padding: 10px;
  cursor: pointer;
  &:hover{
    background-color: #FAFAFA;
  }

  &.selected{
    background-color: #FAFAFA;
  }

  .item-img{
    img{
      width: 50px;
      height: 50px;
    }
  }

  .item-title {
    font-size: 16px;
    line-height: 25px;
    margin-left: 10px;
    flex: 1;
    overflow: hidden;
    color: #333;

    .tip{
      font-size: 14px;
      overflow: hidden;
      color: #666;
      text-overflow: ellipsis;
      word-wrap: none;
      .tip-status{
        color: #F56C6C;
        font-weight: bolder;
      }
      .tip-text{
        
      }
    }
  }
}
</style>