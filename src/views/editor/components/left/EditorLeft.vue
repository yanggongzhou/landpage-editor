<template>
  <div class="editorLeftWrap">
    <div class="componentBox">
      <div
        class="componentItem"
        :draggable="true"
        @dragstart="onDragStart($event, ElType.Text)"
        @click="addElement(ElType.Text)">
        <div class="itemIcon">Text</div>
      </div>
      <div
        class="componentItem"
        :draggable="true"
        @dragstart="onDragStart($event, ElType.Image)"
        @click="addElement(ElType.Image)">
        <div class="itemIcon">Image</div>
      </div>

      <div
        class="componentItem"
        :draggable="true"
        @dragstart="onDragStart($event, ElType.Button)"
        @click="addElement(ElType.Button)">
        <div class="itemIcon">Button</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useEditorStore } from "@/stores/editor";
import { ElType } from "@/types/editor.types";
import { defineComponent } from "vue";

const editorStore = useEditorStore();
const { addElement } = editorStore;

const onDragStart = (e: DragEvent, elType: ElType) => {
  e.dataTransfer?.setData('DragLeftElement', elType)
}

defineComponent({
  name: "EditorLeft"
})
</script>

<style scoped lang="scss">
.editorLeftWrap {

  .componentBox {

    .componentItem {
      text-align: center;
      background: #fff;
      width: 60px;
      min-height: 60px;
      float: left;
      margin: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 5px;
      font-size: 12px;

      .itemIcon {
        transition: all 0.3s ease-in-out;
        font-size: 16px;
        font-weight: 600;
        background: linear-gradient(90deg, #8252fa 0%, #eca2f1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

    }

  }
}
</style>
