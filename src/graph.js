/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }

addNode(value) {
  const node = {
  value: value,
  edges: []
  };
  this.graph[value] = node;
}

contains(value) {
  if (this.graph[value]) {
    return true;
  } else { return false;
  } 
}
removeNode(value) {
  delete this.graph[value];
}
addEdge(fromNode, toNode) {
  this.edges.push[fromNode]
  fromNode.edges.push[toNode]
}
getEdge() {

}
removeEdge(value) {
  for(var i = 0; i < edges.length; i++){
    if (edges[i] === value) {
      edges.splice(i, 1);
    }
  }
}
}

module.exports = Graph;
