/* eslint-disable */
class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
  addEdge(node){
    if (this.edges.indexOf(node) < 0) {
      this.edges[this.edges.length] = node;
      node.addEdge(this);
      return true;
    }
    return false;
  }
  removeEdge(node) {
    if (this.edges.indexOf(node) >= 0) {
      this.edges = this.edges.reduce((array, n) => {
        if (node !== node) {
          array.push(n);
        }
        return array;
      }, []);
      node.removeEdge(this);
      return true;
    }
    return false;
  }
}

class Graph {
  constructor() {
    this.graph = {};
  }
  addNode(newNode, toNode) {
    if (!this.graph.hasOwnProperty('nodes')) {
      this.graph['nodes'] = [];
    }
    if (this.contains(newNode)) {
      return false;
    }
    const node = new Node(newNode);
    if (this.contains(toNode)) {
      node.addEdge(this.getNode(toNode));
    }
    this.graph.nodes.push(node);
    if (this.graph.nodes.length === 2) {
      this.graph.nodes[0].addEdge(this.graph.nodes[1]);
    }
    return true;
  }
  contains(value) {
    return this.searchEdges(value, (nodeValue) => {
      if (value === nodeValue) {
        return true;
      }
    }, true) || false;
  }
  removeNode(value) {
    if (value instanceof Node) {
      value = value.value;
    }
    if (this.contains(value)) {
      const node = this.getNode(value);
      node.edges.forEach(edge => node.removeEdge(edge));
      this.graph.nodes = this.graph.nodes.reduce((array, graphNode) => {
        if(node !== graphNode) {
          array.push(graphNode);
        }
        return array;
      }, []);
      return true;
    }
    return false;
  }
  addEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      return this.getNode(fromNode).addEdge(this.getNode(toNode));
    }
    return false;
  }
  getEdge(fromNode, toNode) { // hasEdge
    if (this.contains(fromNode) && this.contains(toNode)) {
      return this.getNode(toNode).edges.indexOf(this.getNode(fromNode)) >= 0;
    }
    return false;
  }
  removeEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      const fNode = this.getNode(fromNode);
      const tNode = this.getNode(toNode);
      if (!fNode.removeEdge(tNode)) {
        return false;
      }
      const checkNode = (node) => {
        if (node.edges.length === 0) {
          this.removeNode(node);
        }
      }
      checkNode(fNode);
      checkNode(tNode);
      return true;
    }
    return false;
  }
  getNode(value) {
    let node;
    for (let i = 0; i < this.graph.nodes.length; i++) {
      if (value === this.graph.nodes[i].value) {
        node = this.graph.nodes[i];
        break;
      }
    }
    return node;
  }
  searchEdges(start, cb, allowReturn = false) {
    if (!("nodes" in this.graph) || start === null || start === undefined) {
      return false;
    }
    let startNode = this.getNode(start);
    if (startNode === null || startNode === undefined) {
      return false;
    }
    const searchedNodes = [];
    // this stops the loop and lets you return what you want.
    // as long as you're not wanting to return undefined.
    let toReturn;
    // === Depth First Search ===
    // const searchNode = (node) => {
    //   if (allowReturn === true && toReturn !== undefined) {
    //     return;
    //   }
    //   toReturn = cb(node.value, node);
    //   node.edges.forEach(edge => {
    //     if (searchedNodes.indexOf(edge) < 0) {
    //       searchNode(edge)
    //     }
    //   });
    // }
    // searchNode(startNode);
    // === Breadth First Search ===
    const queue = [];
    const addToQueue = (edges) => {
      edges.forEach(edge => {
        if (searchedNodes.indexOf(edge) < 0) {
          queue.push(edge)
        }
      });
    }
    let current;
    do {
      if (allowReturn === true && toReturn !== undefined) {
        break;
      }
      current = queue.shift() || startNode;
      toReturn = cb(current.value, current);
      addToQueue(current.edges);
    } while(queue.length > 0);
    return toReturn;
  }
}

module.exports = Graph;
