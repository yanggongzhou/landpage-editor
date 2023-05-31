import utils from '@/utils'
import { cloneDeep, merge } from 'lodash'
import configObj from '@/config/index'
import { ElType } from "@/types/editor.types";

// 元素配置信息字段
const elementConfig = {
  elName: '', // 组件名
  animations: [], // 动画
  commonStyle: {
    position: 'absolute',
    width: configObj.canvasH5Width,
    height: 30,
    top: 200,
    left: 0,
    // rotate: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    borderWidth: 0,
    borderColor: '',
    borderStyle: 'solid',
    borderRadius: 0,
    boxShadow: '',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    backgroundImage: '',
    backgroundSize: 'cover',
    opacity: 1,
    zIndex: 1,
    transition: 'unset'
  }, // 公共样式
  events: [], // 事件
  propsValue: {}, // 属性参数
  value: '', // 绑定值
  valueType: 'String' // 值类型
}
// 页面配置信息字段
const pageConfig = {
  name: '默认状态',
  elements: [],
  commonStyle: {
    backgroundColor: '',
    backgroundImage: '',
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    width: configObj.canvasH5Width,
    height: configObj.canvasH5Height
  },
  config: {}
}
// 项目配置信息字段
const projectConfig = {
  name: 1,
  title: '页面标题',
  description: '这是一个H5可视化编辑器制作的H5',
  coverImage: '',
  auther: '',
  script: '',
  // width: configObj.canvasH5Width,
  // height: configObj.canvasH5Height,
  pages: []
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getElementConfig = function (element: ReturnType<typeof elementConfig>, extendStyle = {}) {
  const elementData = cloneDeep(element)
  const type = elementData.valueType || 'String' // 默认string类型
  const dict = {
    'Sting': '',
    'Array': [],
    'Object': {},
    'Boolean': false,
    'Number': 0
    // 待扩展数据类型
  }
  const uuid = utils.createUUID()
  const elementConfigData = cloneDeep(elementConfig)
  const config = {
    ...elementConfigData,
    uuid: uuid,
    brotherUuid: uuid,
    elName: elementData.elName,
    propsValue: cloneDeep(elementData.needProps || {})
  }

  // 样式
  config.commonStyle = merge(config.commonStyle, elementData.defaultStyle)
  config.commonStyle = merge(config.commonStyle, extendStyle)
  Reflect.set(config, 'resizable', elementData.resizable)
  Reflect.set(config, 'movable', elementData.movable)
  Reflect.set(config, 'autoHeight', elementData.autoHeight || false)
  Reflect.set(config, 'autoWidth', elementData.autoWidth || false)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Reflect.set(config, 'value', element.defaultValue || dict?.[type])
  Reflect.set(config, 'valueType', type)
  Reflect.set(config, 'isForm', !!element.isForm)
  Reflect.set(config, 'componentsType', element.componentsType)
  Reflect.set(config, 'visible', typeof element.visible === 'string' ? element.visible : 'return true')
  Reflect.set(config, 'hasSlot', !!element.hasSlot)
  return config
}
const copyElement = function (element = {} as any, extendStyle = {}) {
  const uuid = utils.createUUID()
  element = cloneDeep(element)
  element.uuid = uuid
  element.brotherUuid = uuid
  element.commonStyle = merge(element.commonStyle, extendStyle)
  // 加上一点偏移量，以作区分
  element.commonStyle.top = element.commonStyle.top + 10
  element.commonStyle.left = element.commonStyle.left + 10
  if (element.elements) {
    element.elements = element.elements.map((item: any) => copyElement(item))
  }
  return element
}

const getPageConfig = function (pageName = 1) {
  return {
    ...cloneDeep(pageConfig),
    uuid: utils.createUUID(),
    name: pageName
  }
}
const copyPage = function (data = {} as any, pageName: string) {
  const pageData = cloneDeep(data)
  pageData.uuid = utils.createUUID()
  pageData.name = pageName
  pageData.elements = pageData.elements.map((element = {} as any) => {
    return {
      ...element,
      uuid: utils.createUUID()
    }
  })
  return pageData
}

const getProjectConfig = function () {
  const project = cloneDeep(projectConfig)
  const onePage = getPageConfig()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  project.pages.push({
    ...onePage
  })
  return { ...project }
}

/**
 * 获取元素样式
 * @param styleObj
 */
const getCommonStyle = function (styleObj = {} as any) {
  const needUnitStr = ['width', 'height', 'top', 'left', 'bottom', 'right', 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom', 'borderWidth', 'fontSize', 'borderRadius', 'letterSpacing']

  const style = {
    visible: true,
    position: "absolute",
    width: 200,
    height: 200,
    top: 0,
    left: 0,
    zIndex: 100,
    fontSize: 16,
    fontWeight: 500,
    backgroundImage: undefined,
    backgroundRepeat: undefined,
  }

  for (const key in styleObj) {
    if (needUnitStr.includes(key) && typeof styleObj[key] === 'number') {
      if ((key === 'width' || key === 'height') && styleObj[key] === 0) {
        Reflect.set(style, key, 'auto')
      } else {
        Reflect.set(style, key, styleObj[key] + 'px')
      }
    } else {
      Reflect.set(style, key, styleObj[key])
    }
  }

  if (Reflect.get(style, 'bottom')) {
    Reflect.deleteProperty(style, 'top')
  }
  if (Reflect.get(style, 'right')) {
    Reflect.deleteProperty(style, 'left')
  }

  Reflect.set(style, 'backgroundImage', style.backgroundImage ? `url(${style.backgroundImage})` : '')
  Reflect.set(style, 'backgroundRepeat', style.backgroundRepeat || 'no-repeat');
  console.log('style------------>', style)
  return style
}

const editorProjectConfig = {
  elementConfig,
  pageConfig,
  projectConfig,
  getElementConfig,
  getPageConfig,
  getProjectConfig,
  copyPage,
  copyElement,
  getCommonStyle
}

export default editorProjectConfig;
