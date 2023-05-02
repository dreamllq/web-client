<template>
  <div class='layout-header'>
    <div class='logo'>
      <slot name='logo' />
    </div>
    <div class='flex-grow' />
    <div class='toolbar'>
      <slot name='toolbar' />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.layout-header{
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;

  .flex-grow{
    flex:1
  }
}
</style>