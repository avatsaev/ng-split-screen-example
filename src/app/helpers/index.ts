
import {Subscription} from 'rxjs';
import {Type} from '@angular/core';
import {SplitViewNode} from '../models/split-view-node';



export const findNode = (rootNode: SplitViewNode, nodeId: string): SplitViewNode => {

  if ( rootNode.id === nodeId ) {
    return rootNode;
  }

  let result;

  if ( rootNode.children ) {

    for (const node of rootNode.children) {
      result = findNode(node, nodeId);
      if (result) {
        return result;
      }
    }

  }

  return result;
};


export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const getWidgetNodeIds = (rootNode: SplitViewNode): string[] => {
  if (rootNode.widgetType && !rootNode.children) {
    return [rootNode.id];
  }

  if (!rootNode.children || !rootNode.children.length) {
    return [];
  }

  let ids = [];

  for (const node of rootNode.children) {
    ids = [...ids, ...getWidgetNodeIds(node)];
  }

  return ids;

};

export const getWidgetNodes = (rootNode: SplitViewNode) => {
  const nodsIds = getWidgetNodeIds(rootNode);
  return nodsIds.map(id => findNode(rootNode, id));
};


export const initComponentInputs = (component: any, inputs?: {[k: string]: any}) => {
  if (inputs) {
    // tslint:disable-next-line
    for (const k in inputs) {
      component[k] = inputs[k];
    }
  }
};

export const hookComponentOutputs = (component: Type<any>, outputHandlers?: {[k: string]: Function} ): Subscription[] => {
  const subs = [];
  if (outputHandlers) {
    // tslint:disable-next-line
    for (const k in outputHandlers) {
      const s = component[k].subscribe(data => outputHandlers[k](data));
      subs.push(s);
    }
  }
  return subs;
};

// export const attachCompToHostAndInit = (host: SplitViewContainerComponent, comp: Type<any>): ComponentRef<any> => {
//   const compRef = host.portalHost.attachComponentPortal(
//     new ComponentPortal(comp)
//   );
//
//   if (host.splitViewNode.inputs) {
//     initComponentInputs(compRef.instance, host.splitViewNode.inputs);
//   }
//
//   if (host.splitViewNode.outputHandlers) {
//     hookComponentOutputs(compRef.instance, host.splitViewNode.outputHandlers);
//   }
//
//   const compCdr = compRef.injector.get(ChangeDetectorRef);
//   compCdr.detectChanges();
//   return compRef;
// };
//
//
