/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    if (Object.keys(this.graph).length === 1) {
      this.graph[newNode] = {};
      const firstNode = Object.keys(this.graph)[0];
      this.graph[firstNode][newNode] = true;
      this.graph[newNode][firstNode] = true;
    }
    this.graph[newNode] = {};
    if (toNode) {
      if (this.graph[toNode]) {
        this.graph[newNode][toNode] = true;
        this.graph[toNode][newNode] = true;
      }
    }
  }
  contains(value) {
    if (this.graph[value]) {
      return true;
    }
    return false;
  }
  removeNode(value) {
    delete this.graph[value];
    const keys = Object.keys(this.graph);
    keys.forEach((key) => {
      if (this.graph[key][value]) {
        delete this.graph[key][value]
      }
    });
  }
  addEdge(fromNode, toNode) {
    if (this.graph[fromNode] && this.graph[toNode]) {
      this.graph[fromNode][toNode] = true;
      this.graph[toNode][fromNode] = true;
    }
    return 'Not possible'
  }
  getEdge(fromNode, toNode) {
    if (this.graph[fromNode] && this.graph[toNode]) {
      if (this.graph[fromNode][toNode] || this.graph[toNode][fromNode]) {
        return true;
      }
    }
    return false;
  }
  removeEdge(fromNode, toNode) {
    if (this.graph[fromNode] && this.graph[toNode]) {
      delete this.graph[fromNode][toNode];
      delete this.graph[toNode][fromNode];
    }
    return 'Not possible';
  }
}
// const graph = new Graph();
// graph.addNode('sony');
// graph.addNode('PS3');
// graph.removeEdge('sony', 'PS3');
// console.log(graph);
// module.exports = Graph;
