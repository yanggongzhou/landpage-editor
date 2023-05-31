<template>
  <div class="editorRightWrap">
    <el-tabs stretch class="rightTabs">
      <el-tab-pane class="rightTabItem" label="Property">

        <BaseProperty/>
        <div class="componentBox">
          <div
            class="componentItem"
            :draggable="true"
            @dragstart="onDragStart($event, ElType.Text)"
            @click="addText">
            <div class="itemIcon">Text</div>
          </div>
          <div
            class="componentItem"
            :draggable="true"
            @dragstart="onDragStart($event, ElType.Image)"
            @click="addImage">
            <div class="itemIcon">Image</div>
          </div>
        </div>

      </el-tab-pane>
      <el-tab-pane label="Animation">
        Animation
      </el-tab-pane>
    </el-tabs>


  </div>
</template>
<script lang="ts" setup>
import { useEditorStore } from "@/stores/editor";
import { ElType } from "@/types/editor.types";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseProperty from "@/views/editor/components/right/BaseProperty.vue";


const editorStore = useEditorStore();
const { addElement } = editorStore;

const onDragStart = (e: DragEvent, elType: ElType) => {
  e.dataTransfer?.setData('DragLeftElement', elType)
}

const addText = () => {
  addElement(ElType.Text)
}

const addImage = () => {
  addElement(ElType.Image)
}
</script>

<style scoped lang="scss">
.editorRightWrap {

  .rightTabs {

    .rightTabItem {
      padding: 0 15px;
    }

  }
}
</style>
