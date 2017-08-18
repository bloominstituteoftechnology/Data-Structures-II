/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    const node = {
      value: newNode,
      edge: []
    }
    this.graph[newNode] = node;
    if (toNode) {
      this.graph[newNode].edge.push(toNode);
      this.graph[toNode].edge.push(newNode);
    }
    if (Object.keys(this.graph).length === 2) {
      const keys = Object.keys(this.graph);
      this.graph[keys[0]].edge.push(keys[1]);
      this.graph[keys[1]].edge.push(keys[0]);
    }
  }
  contains(value) {
    if (this.graph[value]) return true;
    return false;
  }
  removeNode(value) {
    if (this.graph[value]) delete this.graph[value];
  }
  addEdge(fromNode, toNode) {
    this.graph[fromNode].edge.push(toNode);
    this.graph[toNode].edge.push(fromNode);
  }
  getEdge(fromNode, toNode) {
    if (this.graph[fromNode].edge.includes(toNode) && this.graph[toNode].edge.includes(fromNode)) return true;
    return false;
  }
  removeEdge(fromNode, toNode) {
    this.graph[fromNode].edge = this.graph[fromNode].edge.filter(e => e !== toNode);
    this.graph[toNode].edge = this.graph[toNode].edge.filter(e => e !== fromNode);
    if (!this.graph[fromNode].edge[0]) this.removeNode(fromNode);
    if (!this.graph[toNode].edge[0]) this.removeNode(toNode);
  }
  search(value) {
    const visited = [];
    let bool = false;
    const rec = (current) => {
      if (current.edge.includes(value)) {
        bool = true;
      }
      current.edge.forEach((e) => {
        if (!visited.includes(e)) {
          visited.push(e);
          rec(this.graph[e]);
        }
      });
    };
    rec(Object.values(this.graph)[0]);
    return bool;
  }
  // i decided to start it with the first value in the graph however you could also add a root arguement for where
  // you want the search to start
  // I also made the decision to search for a matching value given in the arguement;

  bfssearch(value, root) {
    const queue = [root];
    const visited =[root];
    let current;
    while (queue.length !== 0) {
      current = queue.shift();
      if (current === value) return true;
      this.graph[current].edge.forEach((e) => {
        if (!visited.includes(e)) {
          visited.push(e);
          queue.push(e);
        }
      });
    }
    return false;
  }
}
  //DFS
//   const graph = new Graph();
//     graph.addNode('A');
//     graph.addNode('B');
//     graph.addNode('C', 'B');
//     graph.addNode('D', 'B');
//     graph.addNode('G', 'D')
    
// console.log(graph.search('A'));
// console.log(graph.search('G'));
// console.log(graph.search('H'));


module.exports = Graph;
