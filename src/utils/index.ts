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
  return 'dz-xxxxxxxx-yxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

const utils = {
  getLocalData,
  saveLocalData,
  createUUID,
}

export default utils;
