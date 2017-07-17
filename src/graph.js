/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    this.graph.push({
    newNode,
    toNode
    });
  }
  contains(value) {}
  removeNode(value) {}
  addEdge(fromNode, toNode) {}
  getEdge(fromNode, toNode) {}
  removeEdge(fromNode, toNode) {}
}

module.exports = Graph;
