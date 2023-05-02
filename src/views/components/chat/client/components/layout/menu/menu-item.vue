<template>
  <div class='chat-menu-item'>
    <div class='chat-menu-item__inner' @click='setCurrent(props.config.command)'>
      <el-icon
        v-if='current !== props.config.command'
        size='40'
        style='vertical-align: middle;'
        color='#A8ABB2'>
        <component :is='props.config.icon' />
      </el-icon>
      <el-icon
        v-else
        size='40'
        style='vertical-align: middle;'
        color='#409EFF'>
        <component :is='props.config.selectedIcon' />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuState } from '../../../store/menu';


const props = defineProps({
  config: {
    type: Object,
    required: true
  }
});

const { current, setCurrent } = useMenuState();

</script>

<style scoped lang="scss">
.chat-menu-item{
  padding: 10px 0;
  .chat-menu-item__inner{
    height: 80px;
    text-align: center;
    line-height: 80px;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
      background-color: rgba(256,256,256, 0.2);
    }
    
  }
}
</style>