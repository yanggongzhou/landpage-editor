import { IElement, IPageInfo } from "@/types/editor.types";

/** Device */
export interface IDeviceState {
  isOnline: boolean;
  headerData: {[key: string]: any}
  readingStartTime: number;
  readChapterList: string[];
  isPrevRefresh: boolean;
  isRetain: boolean;
  isShowUnlockTip: boolean;
  isShowOperationTip: boolean; // 是否显示新手引导提示
  isNeedReload: boolean;
}

/** Editor */
export interface IEditorState {
  pageInfo: IPageInfo;
  // 当前正在编辑的页面uuid
  activeElementId: string;
  // 历史操作数据用于undo redo
  historyCache: any[],
}
