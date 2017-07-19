class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    this.graph[newNode] = [];
    if (toNode) {
      this.graph[toNode] = [];
      this.addEdge(newNode, toNode);
    } else if (Object.keys(this.graph).length === 2) {
      const tempProp = Object.keys(this.graph);
      this.addEdge(tempProp[0], newNode);
    }
  }
  contains(value) {
    let bool = false;
    Object.keys(this.graph).forEach((prop) => {
      if (prop === value) bool = true;
    });
    return bool;
  }
  removeNode(value) {
    delete this.graph[value];
  }
  addEdge(fromNode, toNode) {
    this.graph[fromNode].push(toNode);
    this.graph[toNode].push(fromNode);
  }
  getEdge(fromNode, toNode) {
    let bool = false;
    for (let i = 0; i < this.graph[fromNode].length; i++) {
      if (this.graph[fromNode][i] === toNode) bool = true;
    }
    return bool;
  }
  removeEdge(fromNode, toNode) {
    const fromIndex = this.graph[fromNode].indexOf(toNode);
    const toIndex = this.graph[toNode].indexOf(fromNode);
    this.graph[fromNode].splice(fromIndex, 1);
    this.graph[toNode].splice(toIndex, 1);
    if (this.graph[fromNode].length === 0) this.removeNode(fromNode);
    if (this.graph[toNode].length === 0) this.removeNode(toNode);
    return;
  }
}

module.exports = Graph;
