/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(newNode, toNode) {
    const keys = Object.keys(this.graph);
    if (arguments.length === 2) {
      this.graph[newNode] = {value: newNode, edges: [toNode]};
    } else {
      if (keys.length === 1) {
        console.log(keys[0]);
        this.graph[newNode] = {value: newNode, edges: [keys[0]]};
        this.graph[keys[0]].edges.push(newNode);
      } else {
        this.graph[newNode] = {value: newNode, edges: []};
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
  }

  addEdge(fromNode, toNode) {
    this.graph[fromNode].edges.push(toNode);
    this.graph[toNode].edges.push(fromNode);
  }

  getEdge(fromNode, toNode) {
    if (this.graph[fromNode].edges.indexOf(toNode) !== -1) {
      return true;
    }
    return false;
  }

  removeEdge(fromNode, toNode) {
    let fromIndex = this.graph[fromNode].edges.indexOf(toNode);
    let toIndex = this.graph[toNode].edges.indexOf(fromNode);

    this.graph[fromNode].edges.splice(fromIndex, 1);
    this.graph[toNode].edges.splice(toIndex, 1);

    if (this.graph[fromNode].edges.length === 0) {
      delete this.graph[fromNode];
    }

    if (this.graph[toNode].edges.length === 0) {
      delete this.graph[toNode];
    }
  }
}

module.exports = Graph;
