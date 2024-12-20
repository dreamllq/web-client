<template>
  <div class='new-friend-item'>
    <div class='item-img'>
      <img :src='props.info.contacts.headimg' alt=''>
    </div>
    <div class='item-title'>
      {{ props.info.contacts.nickName }}
    </div>
    <div class='item-operator'>
      <template v-if='props.info.status === ChatContactsTypeEnum.CAN_PASS'>
        <el-button type='danger' @click='onRefuse'>
          拒绝
        </el-button>
        <el-button type='primary' @click='onAgree'>
          同意
        </el-button>
      </template>
      <template v-if='props.info.status === ChatContactsTypeEnum.PASSED'>
        已添加
      </template>
      <template v-if='props.info.status === ChatContactsTypeEnum.REFUSE'>
        已拒绝
      </template>
      <template v-if='props.info.status === ChatContactsTypeEnum.REFUSED'>
        被拒绝
      </template>
      <template v-if='props.info.status === ChatContactsTypeEnum.WAITING_VERIFICATION'>
        等待验证
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatContacts, ChatContactsTypeEnum } from '@/services/api';
import { PropType } from 'vue';
import { useContactsState } from '../../../store/contacts';

const { agree, refuse } = useContactsState();

const props = defineProps({
  info: {
    type: Object as PropType<ChatContacts>,
    required: true
  }
});
const onRefuse = async () => {
  await refuse(props.info.id);
};
const onAgree = async () => {
  await agree(props.info.id);
};

</script>

<style scoped lang="scss">
.new-friend-item{
  border-bottom: 1px solid #E4E7ED;
  display: flex;
  padding: 10px;

  .item-img{
    img{
      width: 30px;
      height: 30px;
    }
  }

  .item-title{
    font-size: 14px;
    line-height: 30px;
    margin-left: 10px;
    flex: 1;
    overflow: hidden;
  }

  .item-operator{
    font-size: 14px;
    line-height: 30px;
  }
}
</style>