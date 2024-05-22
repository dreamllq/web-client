<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html='html' />
</template>

<script setup lang="ts">
import { marked } from 'marked';
import { computed } from 'vue';

const props = defineProps({
  md: {
    type: String,
    default: ''
  }
});

const html = computed(() => marked.parse(props.md));

</script>

<style scoped>

</style>