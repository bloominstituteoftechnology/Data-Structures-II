class Graph {
  constructor() {
    this.graph = [];
  }
  addNode(value, edge) {
    const cgl = this.graph.length;
    const node = { value, edges: [] };
    if (cgl === 1) {
      node.edges.push(this.graph[0].value);
      this.graph[0].edges.push(node.value);
    } else if (cgl > 1 && edge) {
      node.edges.push(edge);
    }
    this.graph.push(node);
  }
  getNode(node) {
    const cgl = this.graph.length;
    for (let i = 0; i < cgl; i++) {
      if (this.graph[i].value === node) return this.graph[i];
    } return null;
  }
  contains(node) {
    const cgl = this.graph.length;
    for (let i = 0; i < cgl; i++) {
      if (this.graph[i].value === node) return true;
    } return false;
  }
  removeNode(node) {
    const nodeIndex = this.graph.indexOf(this.getNode(node));
    return this.graph.splice(nodeIndex, 1);
  }
  addEdge(node, edge) {
    this.getNode(node).edges.push(edge);
    this.getNode(edge).edges.push(node);
  }
  getEdge(node, edgeValue) {
    for (let i = 0; i < this.getNode(node).edges.length; i++) {
      if (edgeValue === this.getNode(node).edges[i]) return true;
    } return false;
  }
  removeEdge(node, edge) {
    for (let i = 0; i < this.getNode(node).edges.length; i++) {
      if (edge === this.getNode(node).edges[i]) {
        this.getNode(node).edges.splice(i, 1);
      }
    }
    for (let j = 0; j < this.getNode(edge).edges.length; j++) {
      if (node === this.getNode(edge).edges[j]) {
        this.getNode(edge).edges.splice(j, 1);
      }
    }
    for (let k = 0; k < this.graph.length; k++) {
      if (this.graph[k].edges.length === 0) {
        this.graph.splice(k, 2);
        return true;
      }
    }
    return false;
  }
}

module.exports = Graph;
