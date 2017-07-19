/* eslint-disable */
class Node {
  constructor(label) {
    this.label = label;
    this.adj = [];
  }
}

class Graph {
  constructor(value) {
    this.graph = {};
    this.edges = 0;
  }
  addNode(newNode, toNode) {
    const newNode = new Node(newNode);
    this.graph[newNode];
    if (toNode) {
      const newToNode = new Node(toNode);
      this.graph[newToNode];
      addEdge(newNode, newToNode);
      return;
    }
    else if (this.edges === 1) {
      addEdge(this.graph[], newNode)
    }
    return;
  }
  contains(value) {
    let bool = false;
    Object.keys(this.graph).forEach((prop) => {
      for (let i = 0; i < this.graph[prop].adj.length; i++) {
        if (this.graph[prop].adj[i] === value) bool = true;
      }
    });
    return bool;
  }
  removeNode(value) {
    return;
  }
  addEdge(fromNode, toNode) {
    return;
  }
  getEdge(fromNode, toNode) {
    return true;
  }
  removeEdge(fromNode, toNode) {
    return;
  }
}

module.exports = Graph;
