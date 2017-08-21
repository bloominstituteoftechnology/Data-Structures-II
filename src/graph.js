/* eslint-disable */
class Node {
  constructor() {
    this.edges = [];
  }
  get hasEdges() {
    return this.edges.length !== 0;
  }
  hasEdge(node) {
    return this.edges.indexOf(node) !== -1;
  }
  newEdge(node) {
    this.edges.push(node);
  }
  removeEdge(node) {
    this.edges.splice(this.edges.indexOf(node), 1);
  }
}
class Graph {
  constructor(value) {
    this.graph = {};
  }
  get keys() {
    return Object.keys(this.graph);
  }
  get size() {
    return this.keys.length;
  }
  contains(node) {
    return this.graph[node] ? true : false;
  }
  addEdge(node1, node2) {
    this.graph[node1].newEdge(node2);
    this.graph[node2].newEdge(node1);
  }
  addNode(node1, node2) {
    this.graph[node1] = new Node();
    if (node2 && !this.graph[node2]) this.graph[node2] = new Node();
    if (this.size === 2 && !node2) this.addEdge(node1, this.keys[0]);
    if (node2) this.addEdge(node1, node2);
  }
  noEdgeDelete(node) {
    if (!this.graph[node].hasEdges) delete this.graph[node];
  }
  removeNode(node) {
    const edges = this.graph[node].edges;
    edges.forEach(edge => {
      this.graph[edge].removeEdge(node)
      this.noEdgeDelete[edge];
    });
    delete this.graph[node];
  }
  getEdge(node1, node2) {
    return this.graph[node1].hasEdge(node2) || this.graph[node2].hasEdge(node1);
  }
  removeEdge(node1, node2) {
    const nodes = [node1, node2];
    nodes.forEach((node, i) => {
      this.graph[node].removeEdge(i > 0 ? nodes[0] : nodes[1]);
      this.noEdgeDelete(node);
    });
  }
}
module.exports = Graph;
