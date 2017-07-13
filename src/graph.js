/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
    this.graph.nodes = [];
  }

  get size() {
    return this.graph.nodes.length;
  }

  noEdges(i) {
    return this.graph.nodes[i].edges.length === 0;
  }

  addNode(...values) {
    const initialSize = this.size;
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      this.graph.nodes.push({name: value, edges: []});
      // add an edge if this node was the second to be added
      if (this.size === 2) {
        this.addEdge(this.graph.nodes[0].name, this.graph.nodes[1].name);
      }
    }
    // also add an edge if two nodes were added at the same time
    if (values.length === 2) {
      this.addEdge(this.graph.nodes[this.size - 2].name, this.graph.nodes[this.size - 1].name);
    }
  }

  contains(value) {
    for (let n = 0; n < this.size; n++) {
      if (this.graph.nodes[n].name === value) return true;
    }
    return false;
  }

  removeNode(value) {
    for (let n = 0; n < this.size; n++) {
      if (this.graph.nodes[n].name === value) {
        this.graph.nodes.splice(n, 1);
        return;
      }
    }
    return;
  }

  nodeIndex(value) {
    for (let i = 0; i < this.size; i++) {
      if (this.graph.nodes[i].name === value) return i;
    }
    return null;
  }

  addEdge(v1, v2) {
    const i1 = this.graph.nodes.findIndex(n => n.name === v1);
    // don't add an edge if one already exists
    if (this.graph.nodes[i1].edges.findIndex(v => v === v2) > 0) return;
    const i2 = this.graph.nodes.findIndex(n => n.name === v2);
    this.graph.nodes[i1].edges.push(v2);
    this.graph.nodes[i2].edges.push(v1);
  }

  getEdge(v1, v2) {
    const i1 = this.graph.nodes.findIndex(n => n.name === v1);
    for (let i = 0; i < this.graph.nodes[i1].edges.length; i++) {
      if (this.graph.nodes[i1].edges[i] === v2) return true;
    }
    return false;
  }

  removeEdge(v1, v2) {
    // find indices of the two node values
    const i1 = this.graph.nodes.findIndex(n => n.name === v1);
    const i2 = this.graph.nodes.findIndex(n => n.name === v2);

    // find indices of the edge nodes
    const i3 = this.graph.nodes[i1].edges.findIndex(v => v === v2);
    if (i3 != -1) this.graph.nodes[i1].edges.splice(i3, 1);

    const i4 = this.graph.nodes[i2].edges.findIndex(v => v === v1);
    if (i4 != -1) this.graph.nodes[i2].edges.splice(i4, 1);

    // remove nodes without edges
    if (this.noEdges(i1)) this.removeNode(v1);
    // need to recalculate new index in case prior node was removed
    const i5 = this.graph.nodes.findIndex(n => n.name === v2);
    if (this.noEdges(i5)) this.removeNode(v2);
  }
}

module.exports = Graph;
