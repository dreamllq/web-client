<template>
  <div class='list-item'>
    <div class='title'>
      <slot name='title' />
    </div>
    <div class='operate'>
      <slot name='operate' />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.list-item{
  border-bottom: 1px solid #eee;
  padding: 4px 0;
  display: flex;

  &:last-child{
    border-bottom: 0;
  }

  .title{
    flex: 1;
  }
  .operate{
    flex: none;
  }
}
</style>