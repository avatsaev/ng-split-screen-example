export interface SplitViewNode {
  id: string;
  title?: string;
  splitDirection?: 'vertical' | 'horizontal';
  children?: SplitViewNode[];
  parentId?: string;
  widgetType?: string;
  inputs?: {[key: string]: any};
  outputHandlers?: {[key: string]: Function};
  size?: number;
  visible?: boolean;
}
