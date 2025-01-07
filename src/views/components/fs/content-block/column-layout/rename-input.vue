<template>
  <input
    ref='inputRef'
    v-model='name'
    type='text'
    class='rename-input'
    @keyup.stop
    @keydown.stop
    @key.stop
    @blur='onBlur'
    @keyup.enter='onEnter'>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue';
import { usePathState } from '../../store/path';
import { F, FsService } from '@/services/api';

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
  await save();
  renameF.value = null;
  await getPathInfoById(props.f.parent?.id);
};

const onEnter = async () => {
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
  width: 100%;
  height: 100%;
  border: none;
}
</style>