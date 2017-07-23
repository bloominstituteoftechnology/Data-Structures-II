/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    const node = {
      value: newNode,
      edge: []
    };
    this.graph.node = node;
  }
}

module.exports = Graph;
