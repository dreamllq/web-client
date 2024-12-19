<template>
  <div class='fs-layout'>
    <div class='aside'>
      <div class='top-block' />
      <div class='aside-content'>
        2
      </div>
    </div>
    <div class='right-container'>
      <div class='fs-header'>
        <div class='navigation-wrapper'>
          <navigation />
        </div>
        <div class='toolbar-wrapper'>
          <operation />
        </div>
      </div>
      <div class='content-container'>
        <content-block />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/views/components/fs/navigation/index.vue';
import ContentBlock from '@/views/components/fs/content-block/index.vue';
import Operation from '@/views/components/fs/toolbar/operation.vue';
</script>

<style scoped lang="scss">
.fs-layout{
  --border-color: var(--el-border-color);
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid var(--border-color);
  border-radius: 12px;

  .aside{
    width: 176px;
    border-right: 1px solid var(--border-color);
    display: flex;
    height: 100%;
    flex-direction: column;
    
    .top-block{
      height: 58px;
    }
  }

  .right-container{
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    .fs-header{
      height: 58px;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      width: 100%;
      overflow: hidden;
      align-items: center;

      .navigation-wrapper{
        flex: 1;
        overflow: hidden;
      }

      .toolbar-wrapper{
        flex: none
      }
    }

    .content-container{
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>

<route>
  {
    "name":"fs"
  }
</route>