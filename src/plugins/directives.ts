import { App, Directive } from 'vue'
import * as directivesHub from '@/plugins/directivesHub'
/**
 * 注册全局自定义指令
 * @param app
 */
export function setupDirectives (app: App) {
  // app.directive('waves', waves)
  Object.keys(directivesHub).forEach(key => {
    console.log('key', key)
    app.directive(key, (directivesHub as { [key: string ]: Directive })[key])
  })
}
