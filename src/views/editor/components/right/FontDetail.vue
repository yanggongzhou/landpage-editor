<template>
  <div class="boxShadowWrap">
    <div>
      <ItemLabel title="字体大小:" />
      <el-input-number
        size="small"
        :min="12"
        @change="fontSizeChange"
        :model-value="editorStore.currentElement?.commonStyle.fontSize"
        controls-position="right"
      />
    </div>

    <div>
      <ItemLabel title="字体粗细:" />
      <el-input-number
        size="small"
        :min="300"
        :step="100"
        :max="900"
        @change="fontWeightChange"
        :model-value="editorStore.currentElement?.commonStyle.fontWeight"
        controls-position="right"
      />
    </div>

    <div style="display: flex; align-items: center;">
      <ItemLabel title="行间距:" />
      <el-input-number
        size="small"
        :min="0"
        :step="0.1"
        :max="10"
        @change="lineHeightChange"
        :model-value="editorStore.currentElement?.commonStyle.lineHeight"
        controls-position="right"
      />
    </div>

    <div style="display: flex; align-items: center;">
      <ItemLabel title="字间距:" />
      <el-input-number
        size="small"
        :min="0"
        :max="30"
        @change="fontChange($event, 'letterSpacing')"
        :model-value="editorStore.currentElement?.commonStyle.letterSpacing"
        controls-position="right"
      />
    </div>
    <div style="display: flex; align-items: center;">
      <ItemLabel title="对齐方式：" />
      <ElSpace>
        <el-check-tag :checked="editorStore.currentElement?.commonStyle.textAlign === 'left'" @change="textAlignChange('left')">左</el-check-tag>
        <el-check-tag :checked="editorStore.currentElement?.commonStyle.textAlign === 'center'" @change="textAlignChange('center')">中</el-check-tag>
        <el-check-tag :checked="editorStore.currentElement?.commonStyle.textAlign === 'right'" @change="textAlignChange('right')">右</el-check-tag>
      </ElSpace>
    </div>

    <div>
      <ItemLabel title="字体颜色:" />
      <el-color-picker
        show-alpha
        size="small"
        @change="fontChange($event, 'color')"
        :model-value="editorStore.currentElement?.commonStyle.color"
      ></el-color-picker>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ItemLabel from "@/components/ItemLabel.vue"
import { useEditorStore } from "@/stores/editor";
import { computed } from "vue";

const editorStore = useEditorStore();
const { setElement } = editorStore;
const fontSizeChange = (fontSize: number) => {
  if (editorStore.currentElement) {
    setElement({
      ...editorStore.currentElement,
      commonStyle: {
        ...editorStore.currentElement.commonStyle,
        fontSize,
      }
    })
  }
}

const fontWeightChange = (fontWeight: number) => {
  if (editorStore.currentElement) {
    setElement({
      ...editorStore.currentElement,
      commonStyle: {
        ...editorStore.currentElement.commonStyle,
        fontWeight,
      }
    })
  }
}

const lineHeightChange = (lineHeight: number) => {
  if (editorStore.currentElement) {
    setElement({
      ...editorStore.currentElement,
      commonStyle: {
        ...editorStore.currentElement.commonStyle,
        lineHeight,
      }
    })
  }
}

const fontChange = (num: number | string, type: string) => {
  if (editorStore.currentElement) {
    setElement({
      ...editorStore.currentElement,
      commonStyle: {
        ...editorStore.currentElement.commonStyle,
        [type]: num,
      }
    })
  }
}

const textAlignChange = (type: string) => {
  if (editorStore.currentElement) {
    setElement({
      ...editorStore.currentElement,
      commonStyle: {
        ...editorStore.currentElement.commonStyle,
        textAlign: type,
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.boxShadowWrap {
  gap: 8px;
}
</style>
