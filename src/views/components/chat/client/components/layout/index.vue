<template>
  <div class='q-chat-layout'>
    <div class='menu-area'>
      <slot name='menu' />
    </div>
    <div class='aside-area'>
      <slot name='aside' />
    </div>
    <div class='main-area'>
      <slot name='main' />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.q-chat-layout{
  display: flex;
  width: 100%;
  height: 100%;

  .menu-area{
    width: 100px;
    flex: none;
    overflow: hidden;
  }

  .aside-area{
    width: 300px;
    flex: none;
    overflow: hidden;
  }

  .main-area{
    flex: 1;
    overflow: hidden;
  }
}
</style>