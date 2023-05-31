<template>
  <div
    :style="commonStyle"
    class="target"
    ref="targetRef"
    @click="onActive"
  >
    {{ element.elValue }}
  </div>

  <Moveable
    ref="moveableRef"
    v-show="isDraggable"
    className="moveableBox"
    :target="[targetRef]"
    :draggable="isDraggable"
    :resizable="true"
    :origin="false"
    :snappable="true"
    :snapThreshold="1"
    :verticalGuidelines="[0, 100, 137.5, 200, 300, 375]"
    :horizontalGuidelines="[0, 100, 200, 300, 335.5, 400, 500, 600, 667]"
    @resizeStart="({setOrigin}) => setOrigin(['%', '%'])"
    @drag="onDrag"
    @resize="onResize"
  />
</template>
<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import Moveable, { OnDrag, OnResize } from "vue3-moveable";
import { useEditorStore } from "@/stores/editor";
import { IElement } from "@/types/editor.types";
const editorStore = useEditorStore();
const props = defineProps({
  element: Object as PropType<IElement>,
})

const targetRef = ref<HTMLDivElement>();
const moveableRef = ref<Moveable>();

const commonStyle = computed(() => {
  const commonStyle = editorStore.pageInfo.elements.find(val => val.uuid === props.element.uuid)?.commonStyle;
  return commonStyle ? {
    position: "absolute",
    width: commonStyle.width + 'px',
    height: commonStyle.height + 'px',
    top: commonStyle.top + 'px',
    left: commonStyle.left + 'px',
    zIndex: 100,
    fontSize: 16,
    fontWeight: 500,
    backgroundImage: undefined,
    backgroundRepeat: undefined,
    transition: 'unset',
  } : {};
})


const isDraggable = computed(() => editorStore.activeElementId === props.element.uuid)

const { changeActiveId, setElement } = editorStore;

const onActive = () => {
  changeActiveId(props.element.uuid);
}

const onDrag = ({ left, top }: OnDrag) => {
  setElement({ ...props.element, commonStyle: { ...props.element.commonStyle, left, top } })
}

const onResize = ({ width, height, drag }: OnResize) => {
  const { left, top } = drag;
  setElement({ ...props.element, commonStyle: { ...props.element.commonStyle, top, left, width, height } })
  targetRef.value && Reflect.set(targetRef.value?.style, 'width', width + "px")
  targetRef.value && Reflect.set(targetRef.value?.style, 'left', left + "px")
  targetRef.value && Reflect.set(targetRef.value?.style, 'top', top + "px")
  targetRef.value && Reflect.set(targetRef.value?.style, 'height', height + "px")
}

</script>

<style lang="scss" scoped>

.target {
  position: relative;
  z-index: 99;
  display: inline-block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  border: 1px dashed transparent;
  &:hover {
    border: 1px dashed #8252fa;
    background-color: #8252FA0D;
  }
}

.moveableBox {
  --moveable-color: #8252fa;

  :deep(.moveable-control) {
    width: 12px;
    height: 12px;
    border: 1px solid #8252fa;
    background-color: #fff;
  }
  :deep(.moveable-line) {
    background: #8252fa;
  }
}
</style>
