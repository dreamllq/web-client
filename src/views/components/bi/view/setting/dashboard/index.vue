<template>
  <div ref='dashboardRef' class='bi-dashboard'>
    <grid-layout>
      <grid-layout-item 
        :x='0'
        :y='1'
        :w='3'
        :h='2'
      >
        111
      </grid-layout-item>
      <grid-layout-item 
        :x='7'
        :y='0'
        :w='3'
        :h='2'
      >
        1112
      </grid-layout-item>
      <grid-layout-item 
        :x='7'
        :y='0'
        :w='3'
        :h='1'
        static
      >
        2222
      </grid-layout-item>
    </grid-layout>
  </div>
</template>

<script setup lang="ts">
import GridLayout from '../grid-layout/index.vue';
import GridLayoutItem from '../grid-layout-item/index.vue';
import { ref } from 'vue';

</script>

<style scoped lang="scss">
.bi-dashboard {
  width: 100%;
  height: 100%;
}
</style>