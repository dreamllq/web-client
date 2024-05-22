<template>
  <div>
    <div>
      <video
        ref='videoRef'
        autoplay=''
        controls=''
        class='h-100 w-auto' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserMedia } from '@vueuse/core';
import { onUnmounted, watchEffect, onBeforeUnmount, ref, onMounted } from 'vue';

const { stream, start, stop } = useUserMedia();

// const video = document.getElementById('video');
const videoRef = ref();

onMounted(() => {
  start();
});

watchEffect(() => {
  // preview on a video element
  if (videoRef.value) {
    videoRef.value.srcObject = stream.value;
    console.log(stream.value);
  }
});


onBeforeUnmount(() => {
  stop();
});
</script>

<style scoped>
.w-auto {
    width: auto;
}
.h-100 {
    height: 25rem;
}
</style>

<route>
  {
    "name":"demo"
  }
</route>