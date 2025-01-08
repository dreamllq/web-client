<template>
  <textarea
    ref='inputRef'
    v-model='name'
    type='text'
    class='rename-input'
    @keyup.stop
    @keydown.stop
    @key.stop
    @blur='onBlur'
    @keydown.enter.stop.prevent
    @keyup.enter.stop.prevent='onEnter' />
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue';
import { F, FsService } from '@/services/api';
import { usePathState } from '../store/path';

const { renameF, getPathInfoById } = usePathState()!;
const inputRef = ref<HTMLInputElement>();

const props = defineProps({
  f: {
    type: Object as PropType<F>,
    required: true
  }
});

const name = ref<string>(props.f.name);

onMounted(() => {
  inputRef.value!.focus();
  inputRef.value!.select();
});

const onBlur = async () => {
  if (name.value === props.f.name) {
    renameF.value = null;
    return;
  }
  await save();
  renameF.value = null;
  await getPathInfoById(props.f.parent?.id);
};

const onEnter = async () => {
  if (name.value === props.f.name) {
    renameF.value = null;
    return;
  }
  await save();
  renameF.value = null;
  await getPathInfoById(props.f.parent?.id);
};

const save = async () => {
  await FsService.update({
    path: { id: props.f.id },
    body: { name: name.value } 
  });
};
</script>

<style scoped lang="scss">
.rename-input {
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border: none;
  box-sizing: border-box;
}
</style>