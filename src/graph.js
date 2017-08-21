/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {
      nodes: [],
      edges: []
    }
  }
  addNode(newNode, toNode) {
    const node = this.graph.nodes;
    const edge = this.graph.edges;

    node.push(newNode);
    edge[newNode] = [];
    if (toNode) {
      edge[newNode].push(toNode);
    }
    if (node.length === 2) {
      this.addEdge(node[0], node[1]);
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
      this.graph.nodes.splice(this.graph.nodes.indexOf(value), 1);
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
    if (this.getEdge(fromNode, toNode)) {
      let index = this.graph.edges[fromNode[toNode]];
      this.graph.edges[fromNode].splice(index, 1);
    }
    if (this.getEdge(toNode, fromNode)) {
      let index = this.graph.edges[toNode[fromNode]];
      this.graph.edges[toNode].splice(index, 1);
    }
    if (this.graph.edges[fromNode].length === 0) {
      this.removeNode(fromNode);
     }
     if (this.graph.edges[toNode].length === 0) {
       this.removeNode(toNode);
     }
   }
 }

module.exports = Graph;
