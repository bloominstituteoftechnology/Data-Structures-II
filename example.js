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
    this.nodes = [];
    this.edges = 0;
  }
  addNode(newNode, toNode) {
    // const node = new Node(newNode);
    this.nodes.push(newNode);
    this.graph[node];
    if (toNode) {
      const newToNode = new Node(toNode);
      this.graph[newToNode];
      addEdge(newNode, newToNode);
      this.edges++;
      return;
    }
    else if (this.edges === 1) {
      addEdge(this.graph[0], newNode)
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
    this.graph[fromNode].adj.push(toNode);
    this.edges++;
    return;
  }
  getEdge(fromNode, toNode) {
    let bool = false;
    for (let i = 0; i < this.graph[fromNode].adj.length; i++) {
      if (this.graph[fromNode].adj[i] === toNode) bool = true;
    }
    return bool;
  }
  removeEdge(fromNode, toNode) {
    return;
  }
}

module.exports = Graph;
