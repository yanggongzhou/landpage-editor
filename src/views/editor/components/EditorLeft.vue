<template>
  <div class="editorLeftWrap">
    <el-button type="primary" @click="addText">
      Text
    </el-button>

    <el-button type="primary" @click="addImage">
      Image
    </el-button>

  </div>
</template>
<script lang="ts" setup>
import { useEditorStore } from "@/stores/editor";
import { ElType, IElement } from "@/types/editor.types";
import { defineComponent } from "vue";

const editorStore = useEditorStore();
const { addElement } = editorStore;

const addText = () => {
  addElement(ElType.Text)
}

const addImage = () => {
  addElement(ElType.Image)
}

defineComponent({
  name: "EditorLeft"
})
</script>

<style scoped lang="scss">
.editorLeftWrap {

}
</style>
