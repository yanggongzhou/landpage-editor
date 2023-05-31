<template>
  <ElContainer class="editorWrap">
    <ElHeader class="editorHeader">Header</ElHeader>
    <ElContainer>
      <ElAside class="editorLeft">
        <EditorLeft/>
      </ElAside>
      <ElMain class="editorMain">
        <EditorPane/>
      </ElMain>
      <ElAside class="editorRight">Aside Right</ElAside>
    </ElContainer>
  </ElContainer>
</template>

<script lang="ts" setup>
import EditorPane from "@/views/editor/components/EditorPane.vue"
import EditorLeft from "@/views/editor/components/EditorLeft.vue"

</script>

<style lang="scss" scoped>
.editorWrap {
  background-color: #fbf8ff;
  min-width: 1000px;
  height: 100%;

  .editorHeader {
    padding: 0 12px;
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  }

  .editorLeft {
    width: 295px;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e6ebed;
  }

  .editorMain {
    overflow: hidden;
    flex: 1;
    background: #f0f2f5;
    position: relative;
  }

  .editorRight {
    width: 380px;
    border-left: 1px solid #e6ebed;
  }

}
</style>
