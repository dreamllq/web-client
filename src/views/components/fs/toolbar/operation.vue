<template>
  <div>
    <!-- <add-file-upload v-model='file' /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import addFileUpload from './add-file-upload.vue';

const file = ref();
const fileUpload = ref();

const onAddDocument = () => {
  console.log(fileUpload.value);
  
  fileUpload.value.click();
};
</script>

<style scoped>

</style>