/* eslint-disable */
class Node {
  constructor(name) {
    this.name = name;
    this.edges = [];
  }
}
class Edge {
  constructor(source, destination) {
    this.source = source;
    this.destination = destination;
  }
}
class Graph {
  constructor() {
    this.graph = {};
    this.edges = [];
    this.nodes = [];
  }

  addNode(newNode, toNode) {
    // if toNode given, should have edge between new and existing toNode
    this.nodes.push(new Node(newNode));
    if (this.nodes.length === 2 && this.edges.length === 0) {
      this.edges.push(new Edge(this.nodes[0].name, this.nodes[1].name));
    }
    if (toNode) {
      this.edges.push(new Edge(newNode, toNode));
    }
  }
  contains(value) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].name === value){
        return true;
      }
    }
    return false;
  }
  removeNode(value) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].name === value) {
        this.nodes.splice(i, 1);
      }
    }
    for (let j = this.edges.length - 1; j >= 0; j--){
      if (this.edges[j].source === value || this.edges[j].destination === value) {
        this.edges.splice(j, 1);
      }
    }
  }
  addEdge(fromNode, toNode) {
    this.edges.push(new Edge(fromNode, toNode));
  }
  getEdge(fromNode, toNode) {
    for (let i = 0; i < this.edges.length; i++) {
      if (this.edges[i].source === fromNode && this.edges[i].destination === toNode) {
        return true;
      }
    }
    return false;
  }
  removeEdge(fromNode, toNode) {
    for (let i = 0; i < this.edges.length; i++) {
      if (this.edges[i].source === fromNode && this.edges[i].destination === toNode)
        delete this.edges[i];
    }
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].name === fromNode || this.nodes[i].name ===toNode){
        if(this.nodes[i].edges.length === 0) {
          this.nodes.splice(i, 1);
	}
      }
    }
    console.log(this.nodes);
  }
}

const agraph = new Graph();
agraph.addNode('pineapple');
agraph.addNode('banana');

module.exports = Graph;

// Extra - add method to search through edges, first use depth first, then use breadth first
