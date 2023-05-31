import { defineStore, } from 'pinia'
import { ElType, IElement, IPageInfo } from "@/types/editor.types";
import { computed, ref } from "vue";
import utils from "@/utils";

export const useEditorStore = defineStore('editor', () => {
  // ----------------------------------state--------------------------------------------
  const pageInfo = ref<IPageInfo>({
    uuid: '1',
    elements: [],
  });
  // 当前正在编辑的页面uuid
  const activeElementId = ref('');
  // // 历史操作数据用于undo redo
  // const historyCache = ref('');
  // ----------------------------------gutter--------------------------------------------
  // 当前编辑器编辑工程项目数据
  const currentElement = computed(() => pageInfo.value.elements.find(ele => ele.uuid === activeElementId.value));

  const pageElements = computed(() => pageInfo.value.elements)

  // ----------------------------------actions--------------------------------------------
  const changeActiveId = (uuid: string) => {
    activeElementId.value = uuid;
  }

  const addElement = (elType: ElType) => {
    const uuid = utils.createUUID();
    const textNode = {
      uuid,
      elType: elType,
      elValue: "测试text",
      animations: [],
      autoHeight: false,
      autoWidth: false,
      visible: true,
      commonStyle: {
        position: "absolute",
        width: 200,
        height: 200,
        top: 0,
        left: 0,
        zIndex: 100,
        fontSize: 16,
        fontWeight: 500,
      }
    } as IElement
    pageInfo.value.elements.push(textNode);
    activeElementId.value = uuid;
  }

  const setElement = (element: IElement) => {
    const index = pageInfo.value.elements.findIndex(ele => ele.uuid === element.uuid);
    pageInfo.value.elements.splice(index, 1, element)
  }

  const deleteElement = (uuid?: string) => {
    const index = pageInfo.value.elements.findIndex(ele => ele.uuid === (uuid ?? activeElementId.value));
    pageInfo.value.elements.splice(index, 1)
    activeElementId.value = '';
  }

  return {
    pageInfo,
    activeElementId,
    currentElement,
    pageElements,
    changeActiveId,
    addElement,
    deleteElement,
    setElement,
  };
})
