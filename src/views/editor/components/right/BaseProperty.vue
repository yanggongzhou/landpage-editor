<template>
  <el-form size="small" :model="form" label-width="100px">
    <BaseTitle title="基础属性"/>
    <el-form-item label="ID">
      <el-text size="small">{{ editorStore.currentElement?.uuid }}</el-text>
    </el-form-item>
    <el-form-item label="状态">
      <el-switch inactive-text="隐藏" active-text="显示" v-model="form.delivery" />
    </el-form-item>
    <BaseTitle title="组件属性"/>
    <el-form-item label="内容">
      <ElInput :model-value="elValue" @input="onContent" :autosize="{ minRows: 5 }" type="textarea" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { useEditorStore } from "@/stores/editor";
import { IElement } from "@/types/editor.types";
const editorStore = useEditorStore();
const { setElement } = editorStore;

const elValue = computed(() => {
  return editorStore.currentElement?.elValue || ''
});

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onContent = (value: string) => {
  if (editorStore.activeElementId) {
    setElement({ ...editorStore.currentElement, elValue: value } as IElement);
  }
}
</script>
