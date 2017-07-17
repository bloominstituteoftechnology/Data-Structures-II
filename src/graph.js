/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    this.graph[newNode] = {};
    this.graph[newNode].edges = [];
    if (Object.keys(this.graph).length === 2 && !toNode) {
      Object.keys(this.graph).forEach((key) => {
        const next = this.graph[key];
        if (key !== newNode) toNode = key;
      });
    }
    if (toNode) {
      this.graph[newNode].edges.push(toNode);
      this.graph[toNode].edges.push(newNode);
    }
  }
  contains(node) {
    let hasNode = false;
    Object.keys(this.graph).forEach(key => {
      if (key === node) hasNode = true;
    });
    return hasNode;
  }
  removeNode(node) {
    delete this.graph[node];
    Object.keys(this.graph).forEach((key) => {
      const index = obj[key].edges.indexOf(node);
      if (index === -1) return;
      obj[key].edges.splice(index, 1);
    });
  }

  getEdge(fromNode, toNode) {
    const fromNodeHasEdge = this.graph[fromNode].edges.indexOf(toNode) !== -1;
    const toNodeHasEdge = this.graph[toNode].edges.indexOf(fromNode) !== -1;
    return fromNodeHasEdge && toNodeHasEdge;
  }

  addEdge(fromNode, toNode) {
    const fromHasntEdge = this.graph[fromNode].edges.indexOf(toNode) === -1;
    const toHasntEdge = this.graph[fromNode].edges.indexOf(toNode) === -1;
    if (fromHasntEdge) this.graph[fromNode].edges.push(toNode);
    if (toHasntEdge) this.graph[toNode].edges.push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    const indexOfFrom = this.graph[fromNode].edges.indexOf(toNode);
    const indexOfTo = this.graph[toNode].edges.indexOf(fromNode);
    this.graph[fromNode].edges.splice(indexOfFrom, 1);
    this.graph[toNode].edges.splice(indexOfTo, 1);
    if (this.graph[fromNode].edges.length === 0) delete this.graph[fromNode];
    if (this.graph[toNode].edges.length === 0) delete this.graph[toNode];
  }
}

module.exports = Graph;
