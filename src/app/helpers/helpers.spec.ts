
import {findNode, getWidgetNodeIds, getWidgetNodes} from './index';
import {SplitViewNode} from '../models/split-view-node';




describe('Split Screen helpers', () => {


  let rootNode: SplitViewNode;

  beforeEach(() => {
    rootNode = {
      id: '1',
      splitDirection: 'vertical',
      children: [
        {
          id: '1.1',
          splitDirection: 'horizontal',
          children: [
            {
              id: '1.1.1',
              widgetType: 'A'
            }, {
              id: '1.1.2'
            }
          ]
        }, {
          id: '1.2',
          splitDirection: 'horizontal',
          children: [
            {
              id: '1.2.1',
              widgetType: 'B'
            }, {
              id: '1.2.2'
            }
          ]
        }
      ]
    };
  });

  it('should find node', () => {
    const node = findNode(rootNode, '1.2.1');
    expect(node).toBeDefined();
    expect(node.id).toEqual('1.2.1');
  });

  it('should return node ids that contains a widget', () => {
    const nodeIds = getWidgetNodeIds(rootNode);

    expect(nodeIds.length).toEqual(2);
    expect(nodeIds).toContain('1.1.1');
    expect(nodeIds).toContain('1.2.1');

  });

  it('should return nodes that contain a widget', () => {
    const nodes = getWidgetNodes(rootNode);

    const nodeA = findNode(rootNode, '1.1.1');
    const nodeB = findNode(rootNode, '1.2.1');

    expect(nodes).toContain(nodeA);
    expect(nodes).toContain(nodeB);
  });


});
