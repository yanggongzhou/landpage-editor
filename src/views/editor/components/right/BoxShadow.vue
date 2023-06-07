<template>
  <div class="boxShadowWrap">
    <div>
      <ItemLabel title="水平位置:" />
      <el-input-number
        size="small"
        @change="boxShadowChange($event, 'x')"
        :model-value="boxShadowState.x"
        controls-position="right"
      />
    </div>

    <div>
      <ItemLabel title="垂直位置:" />
      <el-input-number
        size="small"
        @change="boxShadowChange($event, 'y')"
        :model-value="boxShadowState.y"
        controls-position="right"
      />
    </div>

    <div style="display: flex; align-items: center;">
      <ItemLabel title="模糊距离:" />
      <el-input-number
        size="small"
        @change="boxShadowChange($event, 'blur')"
        :model-value="boxShadowState.blur"
        controls-position="right"
      />
    </div>

    <div style="display: flex; align-items: center;">
      <ItemLabel title="阴影尺寸:" />
      <el-input-number
        size="small"
        @change="boxShadowChange($event, 'spread')"
        :model-value="boxShadowState.spread"
        controls-position="right"
      />
    </div>

    <div>
      <ItemLabel title="阴影颜色:" />
      <el-color-picker
        show-alpha
        size="small"
        @change="boxShadowChange($event, 'color')"
        :model-value="boxShadowState.color"
      ></el-color-picker>
    </div>

  </div>
</template>
<script lang="ts" setup>
import ItemLabel from "@/components/ItemLabel.vue"
import { useEditorStore } from "@/stores/editor";
import { computed } from "vue";

const editorStore = useEditorStore();

const boxShadowState = computed(() => {
  const basic = {
    type: '',
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: 'rgba(255, 0, 0, 1)'
  }
  if (editorStore.currentElement && editorStore.currentElement.boxShadow) {
    return editorStore.currentElement.boxShadow || basic;
  }
  return basic
})

const boxShadowChange = (num: number | string, type: string) => {
  if (editorStore.currentElement) {
    const _boxShadow = Object.assign({}, boxShadowState.value);
    _boxShadow[type] = num;
    editorStore.setElement({
      ...editorStore.currentElement,
      boxShadow: _boxShadow,
    })
  }
}
</script>
<style lang="scss" scoped>
.boxShadowWrap {
  gap: 8px;
}
</style>
