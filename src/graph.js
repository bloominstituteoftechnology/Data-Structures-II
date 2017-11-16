/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
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
  /* Each vertex is an array containing:
      (1) the input value of the vertex on the [0] location.
      (2) the an array of connections it has to other verteices on the [1] location.
      Example: this.vertices = [ [vertex1, [vertex2, vertex3, vertex5] ], [vertex2, [vertex1, vertex5]] ]
  */
  addVertex(value, edges = []) {
    return this.vertices.push(new GraphNode({ value, edges }));
  }
  // // Checks all the vertices of the graph for the target value
  // // Returns true or false
  contains(value) {
    let flag = false;
    this.vertices.forEach((vertex) => {
      if (value === vertex.value) {
        console.log(vertex.value);
        console.log(value);
        flag = true;
      }
    });
    return flag;
  }
  // // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // // and removes the vertex if it is found
  // // This function should also handle the removing of all edge references for the removed vertex
  // removeVertex(value) {

  // }
  // // Checks the two input vertices to see if each one references the other in their respective edges array
  // // Both vertices must reference each other for the edge to be considered valid
  // // If only one vertex references the other but not vice versa, should not return true
  // // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  // checkIfEdgeExists(fromVertex, toVertex) {

  // }
  // // Adds an edge between the two given vertices if no edge already exists between them
  // // Again, an edge means both vertices reference the other 
  // addEdge(fromVertex, toVertex) {

  // }
  // // Removes the edge between the two given vertices if an edge already exists between them
  // // After removing the edge, neither vertex should be referencing the other
  // // If a vertex would be left without any edges as a result of calling this function, those
  // // vertices should be removed as well
  // removeEdge(fromVertex, toVertex) {

  // }
}

module.exports = Graph;

const g = new Graph();
console.log(g.addVertex(1, []));
console.log(g.addVertex(2, [1]));
console.log(g.contains(1));
console.log(g.vertices);
