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
    this.graph[newNode] = node;
    if (toNode) {
      this.graph[newNode].edge.push(toNode);
      this.graph[toNode].edge.push(newNode);
    }
    if (Object.keys(this.graph).length === 2) {
      const arr = Object.keys(this.graph);
      this.addEdge(arr[0], arr[1]);
    }
  }
  getNode() {
  }
  contains(value) {
    const arr = Object.keys(this.graph);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  removeNode(value) {
  }
  addEdge(fromNode, toNode) {
  }
  getEdge(fromNode, toNode) {
  }
  removeEdge(fromNode, toNode) {
  }
}
module.exports = Graph;

// graph = {3:{value: 3, edge: []},
// 4: {value: 4, edge: [5]},
// 5: {value: 5, edge: [4]}};