/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(newNode, toNode) {}
    // if toNode given, should have edge between new and existing toNode
  contains(value) {}
  removeNode(value) {}
  addEdge(fromNode, toNode) {}
  getEdge(fromNode, toNode) {}
  removeEdge(fromNode, toNode) {}
}

module.exports = Graph;

// Extra - add method to search through edges, first use depth first, then use breadth first
