/* eslint-disable no-undef */
const Graph = require('../src/graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "getEdge", and "removeEdge"', () => {
    expect(typeof graph.addNode).toBe('function');
    expect(typeof graph.contains).toBe('function');
    expect(typeof graph.removeNode).toBe('function');
    expect(typeof graph.addEdge).toBe('function');
    expect(typeof graph.getEdge).toBe('function');
    expect(typeof graph.removeEdge).toBe('function');
  });

  it('should store values as nodes on the graph', () => {
    graph.addNode('Hello World!');
    expect(graph.contains('Hello World!')).toBe(true);
  });

  it('should properly remove nodes', () => {
    graph.addNode('hi there');
    graph.removeNode('hi there');
    expect(graph.contains('hi there')).toBe(false);
  });

  it('should automatically create an edge between two nodes if there is only one node in the graph', () => {
    graph.addNode('pineapple');
    graph.addNode('banana');
    expect(graph.getEdge('pineapple', 'banana')).toBe(true);
  });

  it('should create edges between two nodes', () => {
    graph.addNode('pineapple');
    graph.addNode('banana');
    graph.addNode('mango', 'pineapple');
    expect(graph.getEdge('mango', 'pineapple')).toBe(true);
    expect(graph.getEdge('mango', 'banana')).toBe(false);
  });

  it('should be able to remove edges connecting two nodes', () => {
    graph.addNode('monkey');
    graph.addNode('human');
    graph.addNode('crocodile', 'human');
    graph.addEdge('crocodile', 'monkey');
    graph.removeEdge('monkey', 'human');
    expect(graph.getEdge('monkey', 'human')).toBe(false);
  });

  it('should remove nodes without any edges', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.removeEdge('A', 'B');
    expect(graph.contains('A') || graph.contains('B')).toBe(false);
  });
});
