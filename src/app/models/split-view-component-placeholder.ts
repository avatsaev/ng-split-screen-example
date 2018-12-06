import {Type} from '@angular/core';


export class SplitViewComponentPlaceholder<T> {

  constructor(
    public component: Type<T>,
    public params?: {
      widgetType?: string;
      inputs?: {[P in keyof T]?: T[P]},
      outputHandlers?: {[P in keyof T]?: Function},
      title?: string
    }
  ) {}

}
