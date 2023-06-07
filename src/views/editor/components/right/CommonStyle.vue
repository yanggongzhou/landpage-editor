<template>
  <ElCollapse class="csWrap" model-value="3">
    <ElCollapseItem title="边框边距" name="1">
      <div class="contentBox">
        <div>
          <ItemLabel title="边宽:" />
          <el-input-number
            :model-value="editorStore.currentElement?.commonStyle.borderWidth"
            :min="0"
            :step="0.5"
            :max="50"
            size="small"
            controls-position="right"
            @change="borderWidthChange"
          />
        </div>
        <div>
          <ItemLabel title="颜色:" />
          <el-color-picker
            show-alpha
            size="small"
            @change="borderColorChange"
            :model-value="editorStore.currentElement?.commonStyle.borderColor"
          ></el-color-picker>
        </div>
        <div>
          <ItemLabel title="样式:" />
          <el-select
            :model-value="editorStore.currentElement?.commonStyle.borderStyle"
            @change="borderStyleChange"
            size="small"
          >
            <el-option
              v-for="item in borderStyleList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
        <div style="display: flex; align-items: center;">
          <ItemLabel title="边框圆弧:" />
          <el-slider
            :model-value="editorStore.currentElement?.commonStyle.borderRadius"
            @input="borderRadiusChange"
            :max="50"
            size="small"/>
        </div>
        <div>
          <ItemLabel title="Padding:" />

          <el-input-number
            :model-value="editorStore.currentElement?.commonStyle.paddingTop"
            :min="0"
            :step="1"
            size="small"
            controls-position="right"
            @change="paddingChange"
          />
        </div>
        <div>
          <ItemLabel title="Margin:" />

          <el-input-number
            :model-value="editorStore.currentElement?.commonStyle.marginTop"
            :min="0"
            :step="1"
            size="small"
            controls-position="right"
            @change="marginChange"
          />
        </div>
      </div>
    </ElCollapseItem>
    <ElCollapseItem title="背景&透明度" name="2">
      <div class="contentBox">
        <div>
          <ItemLabel title="背景颜色:" />
          <el-color-picker
            show-alpha
            size="small"
            @change="backgroundColorChange"
            :model-value="editorStore.currentElement?.commonStyle.backgroundColor"
          ></el-color-picker>
        </div>

        <div>
          <ItemLabel title="背景图片:" />
          <el-input-number
            :model-value="editorStore.currentElement?.commonStyle.borderWidth"
            :min="0"
            :step="0.5"
            :max="50"
            size="small"
            controls-position="right"
            @change="borderWidthChange"
          />
        </div>

        <div style="display: flex; align-items: center;">
          <ItemLabel title="透明度:" />
          <el-slider
            :model-value="editorStore.currentElement?.commonStyle.opacity"
            @input="opacityChange"
            :step="0.01"
            :max="1"
            size="small"/>
        </div>

      </div>
    </ElCollapseItem>
    <ElCollapseItem title="阴影样式：" name="3">
      <BoxShadow/>
    </ElCollapseItem>
    <ElCollapseItem title="字体" name="4">
      <div>
        Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users;
      </div>
      <div>
        Controlled consequences: users should be granted the freedom to
        operate, including canceling, aborting or terminating current
        operation.
      </div>
    </ElCollapseItem>

  </ElCollapse>

</template>

<script lang="ts" setup>
import ItemLabel from "@/components/ItemLabel.vue"
import BoxShadow from "@/views/editor/components/right/BoxShadow.vue"
import { useEditorStore } from "@/stores/editor";
const borderStyleList = ["solid", "dashed", "dotted", "none", "double", "inset", "outset", "groove", "ridge"]
const editorStore = useEditorStore();

const { setElement } = editorStore;

const borderWidthChange = (borderWidth: number) => {
  if (editorStore.currentElement) {
    setElement({ ...editorStore.currentElement, commonStyle: { ...editorStore.currentElement.commonStyle, borderWidth } })
  }
}
const borderStyleChange = (borderStyle: string) => {
  if (editorStore.currentElement) {
    setElement({ ...editorStore.currentElement, commonStyle: { ...editorStore.currentElement.commonStyle, borderStyle } })
  }
}

const borderColorChange = (borderColor: string) => {
  if (editorStore.currentElement) {
    setElement({ ...editorStore.currentElement, commonStyle: { ...editorStore.currentElement.commonStyle, borderColor } })
  }
}

const borderRadiusChange = (borderRadius: number) => {
  console.log('borderRadius', borderRadius)
  if (editorStore.currentElement) {
    setElement({ ...editorStore.currentElement, commonStyle: { ...editorStore.currentElement.commonStyle, borderRadius } })
  }
}

const backgroundColorChange = (backgroundColor: string) => {
  if (editorStore.currentElement) {
    setElement({ ...editorStore.currentElement, commonStyle: { ...editorStore.currentElement.commonStyle, backgroundColor } })
  }
}

const paddingChange = (padding: number) => {
  if (editorStore.currentElement) {
    setElement({
      ...editorStore.currentElement,
      commonStyle: {
        ...editorStore.currentElement.commonStyle,
        paddingTop: padding,
        paddingLeft: padding,
        paddingRight: padding,
        paddingBottom: padding,
      } })
  }
}

const marginChange = (margin: number) => {
  if (editorStore.currentElement) {
    setElement({
      ...editorStore.currentElement,
      commonStyle: {
        ...editorStore.currentElement.commonStyle,
        marginTop: margin,
        marginLeft: margin,
        marginRight: margin,
        marginBottom: margin,
      } })
  }
}


const opacityChange = (opacity: number) => {
  if (editorStore.currentElement) {
    setElement({ ...editorStore.currentElement, commonStyle: { ...editorStore.currentElement.commonStyle, opacity } })
  }
}

</script>

<style lang="scss" scoped>
.csWrap {
  :deep(.el-collapse-item__header) {
    padding: 0 20px;
  }
  :deep(.el-collapse-item__content) {
    padding: 10px 20px;
  }
}
.contentBox {
  gap: 8px;
}
</style>
