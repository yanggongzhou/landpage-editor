const pathKey = 'app' // storage 命名空间

export const getLocalData = (key: string, isSession?: boolean) => {
  const value = (isSession ? sessionStorage : localStorage).getItem(`_${pathKey}_${key}`);
  return value ? JSON.parse(<string>(isSession ? sessionStorage : localStorage).getItem(`_${pathKey}_${key}`)) : undefined
}

export const saveLocalData = (key: string, item: any, isSession?: boolean) => {
  try {
    (isSession ? sessionStorage : localStorage).setItem(`_${pathKey}_${key}`, JSON.stringify(item))
  } catch (error) {
    console.error(error)
  }
}

/**
 * 生成uuid方法
 * @returns {string}
 */
export const createUUID = () => {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getActiveElement = (element: any, uuid: string) => {
  if (!element) return null
  if (element.uuid === uuid) return element
  if (element.elements && element.elements.length > 0) {
    for (const el of element.elements) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const activeElement = getActiveElement(el, uuid)
      if (activeElement) return activeElement
    }
  }
  return null
}

const utils = {
  getLocalData,
  saveLocalData,
  createUUID,
  getActiveElement,
}

export default utils;
