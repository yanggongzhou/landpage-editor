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
  boxShadow?: {
    type?: string;
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: string;
  }
  commonStyle: {
    position: "absolute" | "fixed";
    width: number;
    height: number;
    top: number;
    left: number;
    zIndex: number;
    borderWidth: number,
    borderStyle: string;
    backgroundColor?: string;
    borderRadius?: number;

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

    color?: string;

    borderColor?: string;

    backgroundImage?: string;
    backgroundSize?: string;
    transition?: string;
  }
}

export enum ElType {
  Text = 'text',
  Image = 'image',
  Button = 'button'
}
