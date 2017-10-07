/* eslint-disable no-undef, no-unused-vars, comma-dangle */
const Graph = require('../src/graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("should have methods named 'addVertex', 'contains', 'removeVertex', 'addEdge', 'checkIfEdgeExists', and 'removeEdge'", () => {
    expect(typeof graph.addVertex).toBe('function');
    expect(typeof graph.contains).toBe('function');
    expect(typeof graph.removeVertex).toBe('function');
    expect(typeof graph.addEdge).toBe('function');
    expect(typeof graph.checkIfEdgeExists).toBe('function');
    expect(typeof graph.removeEdge).toBe('function');
  });

  it('should store values as nodes on the graph', () => {
    graph.addVertex('Hello World!');
    expect(graph.contains('Hello World!')).toBe(true);
  });

  it('should properly remove nodes', () => {
    graph.addVertex('hi there');
    graph.removeVertex('hi there');
    expect(graph.contains('hi there')).toBe(false);
  });

  it('should automatically create an edge between two nodes if there is only two nodes in the graph', () => {
    const pineapple = graph.addVertex('pineapple');
    const banana = graph.addVertex('banana');
    expect(graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
  });

  it('should create edges between two nodes', () => {
    const pineapple = graph.addVertex('pineapple');
    const banana = graph.addVertex('banana');
    const mango = graph.addVertex('mango', [pineapple]);
    expect(graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
    expect(graph.checkIfEdgeExists(mango, banana)).toBe(false);
    expect(graph.checkIfEdgeExists(mango, pineapple)).toBe(true);
  });

  it('should be able to remove edges connecting two nodes', () => {
    const monkey = graph.addVertex('monkey');
    const human = graph.addVertex('human');
    const crocodile = graph.addVertex('crocodile', [human]);
    graph.addEdge(crocodile, monkey);
    graph.removeEdge(monkey, human);
    expect(graph.checkIfEdgeExists(monkey, human)).toBe(false);
  });

  it('should be able DFS and BFS iterate over the edges', () => {
    const array = [];
    const foo = value => ((array.push(value)));
    const pineapple = graph.addVertex('pineapple');
    const banana = graph.addVertex('banana');
    const mango = graph.addVertex('mango', [pineapple]);
    const monkey = graph.addVertex('monkey');
    const human = graph.addVertex('human');
    const crocodile = graph.addVertex('crocodile', [human]);
    const A = graph.addVertex('A');
    const b = graph.addVertex('b');
    graph.addEdge(crocodile, monkey);
    expect(graph.setupVertex()).toEqual(['banana', 'mango', 'pineapple', 'monkey', 'human', 'crocodile', 'A', 'b']);
    graph.bst.depthFirstForEach(foo);
    expect(array).toEqual(['banana', 'A', 'b', 'mango', 'human', 'crocodile', 'pineapple', 'monkey']);
    array.length = 0;
    graph.bst.breadthFirstForEach(foo);
    expect(array).toEqual(['banana', 'A', 'mango', 'b', 'human', 'pineapple', 'crocodile', 'monkey']);
  });

  it('should remove nodes without any edges', () => {
    const A = graph.addVertex('A');
    const b = graph.addVertex('b');
    expect(graph.checkIfEdgeExists(A, b)).toBe(true);
    graph.removeEdge(A, b);
    expect(graph.checkIfEdgeExists(A, b)).toBe(false);
    expect(graph.contains('A') || graph.contains('b')).toBe(false);
  });
});

