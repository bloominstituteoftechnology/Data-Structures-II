/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* Do not modify this GraphNode class */
/* Use any of its methods as you see fit to implement your graph */
class GraphNode {
  constructor({ value, edges }) {
    this._value = value;
    this._edges = edges;
  }

  get value() {
    return this._value;
  }

  get edges() {
    return this._edges;
  }

  get numberOfEdges() {
    return this._edges.length;
  }

  set edges(x) {
    this._edges = x;
  }

  pushToEdges(y) {
    this._edges.push(y);
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    const newGraphNode = new GraphNode({ value, edges });
    if (edges.length > 0) {
      let flag = false;
      edges.forEach((edge) => {
        edge.edges.forEach((innerEdge) => {
          if (value === innerEdge.value) flag = true;
        });
        if (!flag) edge.pushToEdges(newGraphNode);
      });
    }
    if (this.vertices.length === 1) {
      if (value !== this.vertices[0].value) {
        this.vertices[0].pushToEdges(newGraphNode);
        newGraphNode.pushToEdges(this.vertices[0]);
      }
    } 
    this.vertices.push(newGraphNode);
    return newGraphNode;
  }
  contains(value) {
    if (this.vertices.length === 0) return false;
    let flag = false;
    this.vertices.forEach((e) => {
      if (e._value === value) flag = true;
    });
    return flag;
  }
  removeVertex(value) {
    if (this.vertices.length === 0) return;
    this.vertices.forEach((e, i) => {
      const edgesToRemove = e.edges;      
      if (e._value === value) this.vertices.splice(i, 1);
    });
  }
  checkIfEdgeExists(fromVertex, toVertex) {
    const that = this;
    let flag1 = false;
    for (let i = 0; i < toVertex.edges.length; i++) {
      if (fromVertex._value === toVertex.edges[i].value) {
        flag1 = true;
        break;
      }
    }
    let flag2 = false;
    for (let i = 0; i < fromVertex.edges.length; i++) {
      if (toVertex._value === fromVertex.edges[i].value) {
        flag2 = true;
        break;
      }
    }
    return flag1 && flag2;
  }
  addEdge(fromVertex, toVertex) { 
    const that = this;
    fromVertex.pushToEdges(toVertex);    
    toVertex.pushToEdges(fromVertex); 
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    // Pass vertices to checkIfEdgeExits method and return false if it return
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      // Loop over fromVertex's edges array and remove toVertex from it if it is found
      fromVertex.edges = fromVertex.edges.filter(vertex => vertex.value !== toVertex.value);
      // If fromVertex's edges array is empty, remove fromVertex from Graph's vertices
      if (fromVertex.edges.length === 0) {
        this.vertices = this.vertices.filter(vertex => vertex.value !== fromVertex.value);
      }
      // Loop over toVertex's edges array and remove fromVertex from it if it is found
      toVertex.edges = toVertex.edges.filter(vertex => vertex.value !== fromVertex.value);
      if (toVertex.edges.length === 0) {
        this.vertices = this.vertices.filter(vertex => vertex.value !== toVertex.value);
      }
    }
  }
}

module.exports = Graph;
/*
const graph = new Graph();
/*
graph.addVertex('Hello World!');

console.log(graph);
console.log(graph.contains('Hello World!'), true);
*/
/*
graph.addVertex('hi there');
console.log(graph.contains('hi there'), true);
graph.removeVertex('hi there');
console.log(graph.contains('hi there'), false);
*/
/*
const pineapple = graph.addVertex('pineapple');

console.log(pineapple)
const banana = graph.addVertex('banana');
console.log(pineapple.edges)
console.log(banana.edges)
const mango = graph.addVertex('mango', [pineapple]);
console.log(pineapple)
console.log(mango)
console.log(mango);
console.log(pineapple)
console.log(pineapple.edges);
console.log(graph.checkIfEdgeExists(pineapple, banana), true);
console.log(graph.checkIfEdgeExists(mango, banana), false);
console.log(graph.checkIfEdgeExists(mango, pineapple), true);


const A = graph.addVertex('A');
const b = graph.addVertex('b');
console.log(graph.checkIfEdgeExists(A, b), true);
graph.removeEdge(A, b);
console.log(graph.checkIfEdgeExists(A, b), false);
console.log(graph.contains('A') || graph.contains('b'), false);

const monkey = graph.addVertex('monkey');
const human = graph.addVertex('human');
console.log(graph.checkIfEdgeExists(monkey, human), true);
const crocodile = graph.addVertex('crocodile', [human]);
graph.addEdge(crocodile, monkey);
console.log(graph.checkIfEdgeExists(crocodile, monkey), true);
*/
