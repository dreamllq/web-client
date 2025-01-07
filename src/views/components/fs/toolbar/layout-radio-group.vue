<template>
  <el-radio-group v-model='layout'>
    <el-radio-button label='1' :value='LAYOUT.ICON'>
      <i class='iconfont icon-buju' /> 
    </el-radio-button>
    <el-radio-button label='2' :value='LAYOUT.COLUMN'>
      <i class='iconfont icon-fenlanzhankaixianshi' />
    </el-radio-button>
  </el-radio-group>
</template>

<script setup lang="ts">
import { useFsGlobalState } from '../store/fs-global';
import { LAYOUT } from '../type';

const { layout } = useFsGlobalState();
</script>

<style scoped lang="scss">
@import url('./layout-iconfont/iconfont.css');

.iconfont {
  font-size: 20px !important;
}
</style>