/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {
      nodes: [],
      edges: [],
      numberOfEdges: 0
    }
  }
  addNode(newNode, toNode = undefined) {
    this.graph.nodes.push(newNode);
    this.graph.edges[newNode] = [];
    if (toNode !== undefined) {
      this.graph.edges[newNode].push(toNode);
    }
    if (this.graph.nodes.length === 2) {
      this.addEdge(this.graph.nodes[0], this.graph.nodes[1]);
    }
  }
  contains(value) {
    if (this.graph.nodes.includes(value)) {
      return true;
    }
    return false;
  }
  removeNode(value) {
    if (this.contains(value)) {
      let index = this.graph.nodes.indexOf(value);
      this.graph.nodes.splice(index, 1);
    }
  }
  addEdge(fromNode, toNode) {
    this.graph.edges[fromNode].push(toNode);
    this.graph.edges[toNode].push(fromNode);
  }
  getEdge(fromNode, toNode) {
    if (this.graph.edges[fromNode].includes(toNode)) {
      return true;
    }
    return false;
  }
  removeEdge() {}
}

module.exports = Graph;
