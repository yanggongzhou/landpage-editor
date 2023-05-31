<template>
  <div class="paneWrap">
    <div class="paneMain">
      <div
        class="paneContent"
        @drop="handleDrop"
        @dragover="handleDropOver"
        @dragenter="handleDropOver"
      >
        <template
          v-for="element in editorStore.pageInfo.elements"
          :key="element.uuid">
          <EditorNode :element="element"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EditorNode from '@/views/editor/components/EditorNode.vue'
import { useEditorStore } from "@/stores/editor";
import { ElType } from "@/types/editor.types";

const editorStore = useEditorStore();
const { addElement } = editorStore;

const handleDrop = (e: DragEvent) => {
  const data = e.dataTransfer?.getData("DragLeftElement");
  data && addElement(data as ElType)
  e.preventDefault();
}

const handleDropOver = (e: Event) => {
  e.preventDefault();
}
</script>

<style lang="scss" scoped>
.paneWrap {
  height: 100%;
  width: 100%;
  padding: 35px 0;
  background-image: linear-gradient(45deg, #f5f5f5 25%, transparent 0, transparent 75%, #f5f5f5 0), linear-gradient(45deg, #f5f5f5 25%, transparent 0, transparent 75%, #f5f5f5 0);
  background-position: 0 0, 13px 13px;
  background-size: 26px 26px;
  display: flex;
  justify-content: center;

  .paneMain {
    width: 375px;
    height: 667px;
    background-color: #fff;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlQTFRF9fX18PDwAAAABQ8/pgAAAAN0Uk5T/yIA41y2EwAAABhJREFUeJxjYIAC0VAQcGCQWgUCDUONBgDH8Fwzu33LswAAAABJRU5ErkJggg==);
    border-radius: 3px;
    box-shadow: 0 3px 10px #dcdcdc;
    position: relative;

    &:before {
      content: "";
      width: 375px;
      height: 30px;
      background: url(../../../assets/img/horizontal.png) no-repeat;
      background-size: cover;
      position: absolute;
      top: -30px;
      left: 0;
    }

    &:after {
      content: "";
      width: 30px;
      height: 667px;
      background: url(../../../assets/img/vertical.png) no-repeat;
      background-size: cover;
      position: absolute;
      left: -30px;
      top: 0;
    }
  }

  .paneContent {
    position: relative;
    transform: scaleX(1);
    transform-origin: center top;
    height: 100%;
    width: 100%;
  }

}

</style>
