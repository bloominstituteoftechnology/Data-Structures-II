/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(value, toNode) {
    const node = {
      value: value,
      edges: []
    };
    this.graph[value] = node;
    if (!toNode) {
      const keys = Object.keys(this.graph);
      if (keys.length >= 2) toNode = this.graph[keys[0]].value;
    }
    if (toNode) this.addEdge(value, toNode);
  }
  contains(value) {
    if (this.graph[value]) return true;
    else return false;
  }
  getEdge(fromNode, toNode) {
    if (this.graph[fromNode].edges.indexOf(this.graph[toNode].value) > -1) return true;
    else return false;
  }
  addEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (!this.getEdge(fromNode, toNode)) {
        this.graph[toNode].edges.push(fromNode);
        this.graph[fromNode].edges.push(toNode);
      } else return `An edge between ${fromNode} and ${toNode} already exists`;
    } else return 'One of these nodes does not exist in the graph';
  }
  removeEdge(fromNode, toNode) {
    if (this.getEdge(fromNode, toNode)) {
      const f = this.graph[fromNode].edges;
      const t = this.graph[toNode].edges;
      f.splice(f.indexOf(toNode), 1);
      t.splice(t.indexOf(fromNode), 1);
      if (f.length === 0) this.removeNode(fromNode);
      if (t.length === 0) this.removeNode(toNode);
    } else return `There is no edge between ${fromNode} and ${toNode}`;
  }
  removeNode(value) { 
    if (this.contains(value)) {
      const edges = this.graph[value].edges;
      if (edges.length > 0) {
          edges.forEach((edge) => {
            this.removeEdge(value, edge);
          });
      }
      delete this.graph[value];
    } else return `${value} does not exist in this graph`;
  }
  depthFirstSearch(start, value) {
    const first = this.graph[start];
    const set = new Set();
    let flag = false;
    const dfs = (obj) => {
      if (!set.has(obj.value)) {
        if (obj.value === value) flag = true;
        else {
          set.add(obj.value);
          if (obj.edges.length > 0) {
            obj.edges.forEach((edge) => {
              dfs(this.graph[edge]);
            });
          }
        }
      }
    };
    dfs(first);
    return flag;
  }
  breadthFirstSearch(start, value) {
    let queue = [start];
    let flag = false;
    for (let i = 0; i < queue.length; i++) {
      const gval = queue[i];
      if (this.graph[gval].value === value) flag = true;
      else if (this.graph[gval].edges.length > 0) {
        this.graph[gval].edges.forEach((edge) => {
          if (queue.indexOf(edge) < 0) queue = queue.concat(edge);
        });
      }
    }
    return flag;
  }
}

module.exports = Graph;
