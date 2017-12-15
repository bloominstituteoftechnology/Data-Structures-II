/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode {
  constructor(value, edges = []) {
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

  removeEdge(x) {
    for (let i = 0; i < this._edges.length; i++) {
      if (this._edges[i] === x) {
        this._edges.splice(i, 1);
      }
    }
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
    const newVertex = new GraphNode(value, edges);
    this.vertices.push(newVertex);
    for (let i = 0; i < edges.length; i++) {
      this.addEdge(newVertex, edges[i]);
    }
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return newVertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i] !== undefined && this.vertices[i].value === value) return true;
    }
    return false;
  }
  // checks the graph to see if a GraphNode with the specidified value exists in the graph
  // removes the vertex if it is found
  // this function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    if (this.contains(value)) {
      for (let i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].value === value) {
          for (let j = 0; j < this.vertices.length; j++) {
            if (this.checkIfEdgeExists(this.vertices[i], this.vertices[j])) {
              this.removeEdge(this.vertices[i], this.vertices[j]);
            }
          }
          this.vertices.splice(i, 1);
          // delete this.vertices[i];
        }
      }
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let flag1 = false;
    let flag2 = false;
    if (!this.contains(fromVertex.value) || !this.contains(toVertex.value)) return false;
    for (let i = 0; i < fromVertex.numberOfEdges; i++) {
      if (fromVertex.edges[i] === toVertex) {
        flag1 = true;
      }
    }
    for (let i = 0; i < toVertex.numberOfEdges; i++) {
      if (toVertex.edges[i] === fromVertex) {
        flag2 = true;
      }
    }
    if (flag1 && flag2) return true;
    return false;
  }
  // // Adds an edge between the two given vertices if no edge already exists between them
  // // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.removeEdge(toVertex);
      toVertex.removeEdge(fromVertex);
      // console.log(fromVertex.numberOfEdges);
      // console.log(toVertex.numberOfEdges);
    } 
    // console.log(fromVertex.numberOfEdges);
    // console.log(toVertex.numberOfEdges);
    if (fromVertex.numberOfEdges === 0) {
      // console.log(this.contains(fromVertex.value));
      if (this.contains(fromVertex.value)) {
        this.removeVertex(fromVertex.value);
        // console.log(this.contains(fromVertex.value));
      }
    } 
    if (toVertex.numberOfEdges === 0) {
      // console.log(this.contains(toVertex.value));
      if (this.contains(toVertex.value)) {
        this.removeVertex(toVertex.value);
        // console.log(this.contains(toVertex.value));
      }
    }
  }
}

const test = new Graph();

// console.log(typeof test.addVertex);
// console.log(typeof test.contains);
// console.log(typeof test.removeVertex);
// console.log(typeof test.addEdge);
// console.log(typeof test.checkIfEdgeExists);
// console.log(typeof test.removeEdge);

// test.addVertex('Hello World!');
// console.log(test.vertices);
// console.log(test.contains('Hello World!'));
// test.addVertex('hi there');
// console.log(test.vertices);
// test.removeVertex('hi there');
// console.log(test.vertices);
// console.log(test.contains('hi there'));

// const pineapple = test.addVertex('pineapple');
// const banana = test.addVertex('banana');
// const mango = test.addVertex('mango', [pineapple]);
// console.log(test.checkIfEdgeExists(pineapple, banana));
// console.log(pineapple.edges);
// console.log(test.checkIfEdgeExists(mango, banana));
// console.log(banana.edges);
// console.log(test.checkIfEdgeExists(mango, pineapple));
// console.log(mango.edges);

// const monkey = test.addVertex('monkey');
// const human = test.addVertex('human');
// const crocodile = test.addVertex('crocodile', [human]);
// test.addEdge(crocodile, monkey);
// test.removeEdge(monkey, human);
// console.log(test.checkIfEdgeExists(monkey, human));

const A = test.addVertex('A');
const b = test.addVertex('b');
console.log(test.vertices);
console.log(test.checkIfEdgeExists(A, b));
test.removeEdge(A, b);
console.log(test.checkIfEdgeExists(A, b));
console.log(test.contains('A'));
console.log(test.contains('b'));

module.exports = Graph;

