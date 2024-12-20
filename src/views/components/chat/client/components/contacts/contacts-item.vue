<template>
  <div class='contacts-item' @click='onSelect' @contextmenu='onContextMenu'>
    <div class='item-img'>
      <img :src='props.info.contacts.headimg' alt=''>
    </div>

    <div class='item-title'>
      {{ props.info.contacts.nickName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatContacts, ChatContactsService } from '@/services/api';
import { PropType } from 'vue';
import { MainStatusEnum, useMainState } from '../../store/main';
import { useContactsState } from '../../store/contacts';
import ContextMenu from '@imengyu/vue3-context-menu';
import { ElMessageBox } from 'element-plus';

const { setStatus } = useMainState();
const { setCurrent } = useContactsState();



const props = defineProps({
  info: {
    type: Object as PropType<ChatContacts>,
    required: true
  }
});

const onSelect = () => {
  setStatus(MainStatusEnum.Friend);
  setCurrent(props.info);
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
          await ChatContactsService.remove({ path: { id: props.info.id } });
        }
      }
    ]
  }); 
};

</script>

<style scoped lang="scss">
.contacts-item{
  border-bottom: 1px solid #E4E7ED;
  display: flex;
  padding: 10px;
  cursor: pointer;
  &:hover{
    background-color: #FAFAFA;
  }

  .item-img{
    img{
      width: 30px;
      height: 30px;
    }
  }

  .item-title{
    font-size: 20px;
    line-height: 30px;
    margin-left: 10px;
    flex: 1;
    overflow: hidden;
  }
}
</style>