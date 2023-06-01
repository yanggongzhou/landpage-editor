<template>
  <ElCollapse class="csWrap" model-value="1">
    <ElCollapseItem title="边框边距" name="1">
      <div class="contentBox">
        <ItemLabel title="边框" />
        <el-input-number
          :value="editorStore.currentElement?.commonStyle.borderWidth"
          :min="1"
          :max="10"
          size="small"
          controls-position="right"
          @change="handleChange"
        />
      </div>

      <div class="attr-item-edit-wrapper">

        <!--        <div class="col-3 attr-item-edit-input">-->
        <!--          <el-color-picker-->
        <!--            show-alpha-->
        <!--            size="mini"-->
        <!--            @change="throttleAddHistory"-->
        <!--            v-model="activeElement.commonStyle.borderColor"-->
        <!--          ></el-color-picker>-->
        <!--          <div class="attr-item-edit-input-des">颜色</div>-->
        <!--        </div>-->
        <!--        <div class="col-2 attr-item-edit-input">-->
        <!--          <el-select-->
        <!--            v-model="activeElement.commonStyle.borderStyle"-->
        <!--            @change="throttleAddHistory"-->
        <!--            size="mini"-->
        <!--          >-->
        <!--            <el-option-->
        <!--              v-for="item in borderStyleList"-->
        <!--              :key="item.value"-->
        <!--              :label="item.label"-->
        <!--              :value="item.value"-->
        <!--            />-->
        <!--          </el-select>-->
        <!--          <div class="attr-item-edit-input-des">样式</div>-->
        <!--        </div>-->
      </div>
      <!--      <div class="attr-item-edit-wrapper">-->
      <!--        <p class="attr-item-title">边框圆弧：</p>-->
      <!--        <div class="col-2 attr-item-edit-input">-->
      <!--          <el-input-number-->
      <!--            size="mini"-->
      <!--            @change="throttleAddHistory"-->
      <!--            v-model="activeElement.commonStyle.borderRadius"-->
      <!--            controls-position="right"-->
      <!--            :min="0"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      &lt;!&ndash;边距&ndash;&gt;-->

      <!--      <div class="attr-item-edit-wrapper">-->
      <!--        <p class="attr-item-title">上下边距：</p>-->
      <!--        <div class="col-2 attr-item-edit-input">-->
      <!--          <el-input-number-->
      <!--            size="mini"-->
      <!--            @change="throttleAddHistory"-->
      <!--            v-model="activeElement.commonStyle.paddingTop"-->
      <!--            controls-position="right"-->
      <!--            :min="0"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div class="col-2 attr-item-edit-input">-->
      <!--          <el-input-number-->
      <!--            size="mini"-->
      <!--            @change="throttleAddHistory"-->
      <!--            v-model="activeElement.commonStyle.paddingBottom"-->
      <!--            controls-position="right"-->
      <!--            :min="0"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="attr-item-edit-wrapper">-->
      <!--        <p class="attr-item-title">左右边距：</p>-->
      <!--        <div class="col-2 attr-item-edit-input">-->
      <!--          <el-input-number-->
      <!--            size="mini"-->
      <!--            @change="throttleAddHistory"-->
      <!--            v-model="activeElement.commonStyle.paddingLeft"-->
      <!--            controls-position="right"-->
      <!--            :min="0"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div class="col-2 attr-item-edit-input">-->
      <!--          <el-input-number-->
      <!--            size="mini"-->
      <!--            @change="throttleAddHistory"-->
      <!--            v-model="activeElement.commonStyle.paddingRight"-->
      <!--            controls-position="right"-->
      <!--            :min="0"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->
    </ElCollapseItem>
    <ElCollapseItem title="尺寸与位置：" name="1">
      <div>
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
      </div>
      <div>
        Consistent within interface: all elements should be consistent, such
        as: design style, icons and texts, position of elements, etc.
      </div>
    </ElCollapseItem>

    <ElCollapseItem title="阴影样式：" name="3">
      <div>
        Simplify the process: keep operating process simple and intuitive;
      </div>
      <div>
        Definite and clear: enunciate your intentions clearly so that the
        users can quickly understand and make decisions;
      </div>
      <div>
        Easy to identify: the interface should be straightforward, which helps
        the users to identify and frees them from memorizing and recalling.
      </div>
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
    <ElCollapseItem title="背景&透明度" name="4">
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
import { useEditorStore } from "@/stores/editor";
const editorStore = useEditorStore();

const { currentElement } = editorStore;

const handleChange = () => {

}

const onSubmit = () => {
  console.log('submit!')
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

}
</style>
