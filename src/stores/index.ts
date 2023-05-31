import { App } from 'vue'
import { createPinia } from 'pinia'
import { useAppStore } from '@/stores/app'
import { useEditorStore } from '@/stores/editor'

export interface IAppStore {
  useEditorStore: ReturnType<typeof useEditorStore>
  useAppStore: ReturnType<typeof useAppStore>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * 注册app状态库
 */
export const setupStore = (app: App) => {
  app.use(createPinia());
  // 注册pinia状态管理库
  appStore.useAppStore = useAppStore();
  appStore.useEditorStore = useEditorStore();
}

export default appStore;
