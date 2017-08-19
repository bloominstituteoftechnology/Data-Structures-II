/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {
      nodes: [],
      edges: []
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
  removeEdge(fromNode, toNode) {
    // remove edge
    if (this.getEdge(fromNode, toNode)) {
      let index = this.graph.edges[fromNode[toNode]];
      this.graph.edges[fromNode].splice(index, 1);
    }
    if (this.getEdge(toNode, fromNode)) {
      let index = this.graph.edges[toNode[fromNode]];
      this.graph.edges[toNode].splice(index, 1);
    }
    // check for nodes without edges and call remove node
    if (this.graph.edges[fromNode].length === 0) {
      this.removeNode(fromNode);
    }
    if (this.graph.edges[toNode].length === 0) {
      this.removeNode(toNode);
    }
  }
}

module.exports = Graph;
