export interface IPageInfo {
  uuid: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  width?: number;
  height?: number;
  elements: IElement[];
}

export interface IElement {
  uuid: string;
  elType: ElType;
  elValue: string;
  animations: [],
  autoHeight: boolean;
  autoWidth: boolean;
  visible: boolean;
  commonStyle: {
    position: "absolute" | "fixed";
    width: number;
    height: number;
    top: number;
    left: number;
    zIndex: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    letterSpacing?: number;
    opacity?: number;
    textAlign?: "left" | "center" | "right",
    borderRadius?: number;
    color?: string;
    backgroundColor?: string;
    borderWidth?: 0,
    borderColor?: string;
    borderStyle?: string;
    boxShadow?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    transition?: string;
  }
}

export enum ElType {
  Text = 'text',
  Image = 'image',
}
