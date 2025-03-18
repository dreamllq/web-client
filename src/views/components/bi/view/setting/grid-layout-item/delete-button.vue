<template>
  <div class='item-delete-button' @click.prevent.stop='onClick'>
    <el-icon size='20'>
      <circle-close />
    </el-icon>
  </div>
</template>

<script setup lang="ts">

const onClick = () => {};
</script>

<style scoped style="scss">
.item-delete-button{
  position: absolute;
  top:0;
  right:0;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}
</style>