<template>
  <div class="editorRightWrap">
    <ElTabs stretch class="rightTabs">
      <ElTabPane class="rightTabItem" label="Property">
        <BaseProperty/>
        <BaseTitle title="基础样式"/>
        <CommonStyle/>
      </ElTabPane>
      <ElTabPane label="Animation">
        Animation
      </ElTabPane>
    </ElTabs>
  </div>
</template>
<script lang="ts" setup>
import BaseTitle from "@/components/BaseTitle.vue";
import { useEditorStore } from "@/stores/editor";
import BaseProperty from "@/views/editor/components/right/BaseProperty.vue";
import CommonStyle from "@/views/editor/components/right/CommonStyle.vue";
const editorStore = useEditorStore();

</script>

<style scoped lang="scss">
.editorRightWrap {

  .rightTabs {

    .rightTabItem {


    }

  }
}
</style>
