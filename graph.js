/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(value, toNode) {
    const node = {
      value: value,
      edges: [],
    }
    this.graph[value] = node;
    if (!toNode) {
      const keys = Object.keys(this.graph);
      if (keys.length === 2) toNode = this.graph[keys[0]].value;
    }
    if (toNode) this.addEdge(value, toNode);
  }

  contains(value) {
    if (this.graph[value]) return true;
    else return false;
  };
  
  removeNode(value) { 
    if (this.contains) delete this.graph[value];
  };

  addEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (!this.getEdge(fromNode, toNode)) {
        this.graph[toNode].edges.push(fromNode);
        this.graph[fromNode].edges.push(toNode);
      }
    }
  }
  getEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (this.graph[fromNode].edges.indexOf(this.graph[toNode].value) > -1) return true;
    }
    return false;
  }
  removeEdge(fromNode, toNode) {
    if (this.getEdge(fromNode, toNode)) {
      const frm = this.graph[toNode].edges.indexOf(fromNode);
      const t = this.graph[fromNode].edges.indexOf(toNode);
      this.graph[toNode].edges.splice(frm, 1);
      this.graph[fromNode].edges.splice(t, 1);
      if (this.graph[fromNode].edges.length === 0) this.removeNode(fromNode);
      if (this.graph[toNode].edges.length === 0) this.removeNode(toNode);
    } 
    
    
  }
}





  

module.exports = Graph;
