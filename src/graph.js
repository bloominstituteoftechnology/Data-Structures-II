/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    if (newNode === toNode) return;
    if (toNode) {
      if (this.graph[newNode]) {
        if (!this.graph[newNode].includes(toNode)) {
          this.graph[newNode].push(toNode);
        }
      } else {
        this.graph[newNode] = [toNode];
      }
      if (this.graph[toNode]) {
        if (!this.graph[toNode].includes(newNode)) {
          this.graph[toNode].push(newNode)
        }
      } else {
        this.graph[toNode] = [newNode];
      }

    } else if (Object.keys(this.graph).length === 1) {
      const k = Object.keys(this.graph)[0]
      this.graph[k].push(newNode)
      this.graph[newNode] = [k]
    } else {
      if (!this.graph[newNode]) this.graph[newNode] = [];
      if (Object.keys(this.graph).length >= 2) this.checkNode(newNode);
    }
  }
  contains(value) {
    if (Object.keys(this.graph).includes(value)) return true;
    return false;
  }
  getEdge(fromNode, toNode) {
    if (this.graph[fromNode].includes(toNode)) return true;
    return false;
  }
  removeEdge(fromNode, toNode) {
    let indexToRemove = this.graph[fromNode].indexOf(toNode);
    this.graph[fromNode].splice(indexToRemove, 1);
    indexToRemove = this.graph[toNode].indexOf(fromNode);
    this.graph[toNode].splice(indexToRemove, 1);
    this.checkNode(fromNode, toNode);
  }
  checkNode(...args) {
    args.forEach((node) => {
      if (this.graph[node].length === 0) delete this.graph[node];
    })
  }
  addEdge(fromNode, toNode) {
    this.graph[fromNode].push(toNode);
    this.graph[toNode].push(fromNode);
  }
  removeNode(node) {
    if (this.graph[node]) {
      for (let i = 0; i < this.graph[node].length; i++) {
        let current = this.graph[node][i];
        let index = this.graph[current].indexOf(node);
        this.graph[current].splice(index,1);
        this.checkNode(current);
      }
      delete this.graph[node]; 
    }
  }
}

module.exports = Graph;

// const graph = new Graph()
// graph.addNode('monkey')
// graph.addNode('human')
// graph.addNode('crocodile','human')
// graph.addEdge('crocodile','monkey')
// graph.removeEdge('monkey', 'human')
// // graph.addNode('ballon')
// // graph.addNode('a', 'b')
// // graph.addNode('a', 'b')
// // graph.addNode('b')
// // graph.addNode('y', 'a')
// // graph.addNode('z', 'y')
// // graph.addNode('s', 'a')
// // graph.addNode('x')
// // graph.removeEdge('s', 'a')
// // graph.removeNode('a')
// // console.log(graph.contains(''))
// console.log(graph.getEdge('monkey', 'human'))
// console.log(graph.graph)
