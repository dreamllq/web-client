<template>
  <div v-if='ready' style='width:100%' class='rich-editor'>
    <ckeditor
      v-model='editorData'
      :editor='editor'
      :config='editorConfig'
      @input='onEditorInput' />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import ClassicEditor from './build-editor';
import CKEditor from '@ckeditor/ckeditor5-vue';
import { Editor, EditorConfig } from '@ckeditor/ckeditor5-core';
// import { CustomUploadAdapterPlugin } from './upload-adapter';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue']);

const ready = ref(false);
const ckeditor = CKEditor.component;
const editor = ClassicEditor;
const editorData = ref(props.modelValue);
const editorConfig = ref<EditorConfig>({});

onMounted(() => {
  ready.value = true;
});

const onEditorInput = (value) => {
  emit('update:modelValue', value);
};

</script>


<style lang="scss">
.rich-editor {
  .ck.ck-editor__main > .ck-content {
    min-height: 300px;
  }
}
.ck {
    --ck-z-modal: calc( var(--ck-z-default) + 5000 );
}
</style>