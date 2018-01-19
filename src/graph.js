/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
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
  addVertex(value, edges = []) {
    const vertex = new GraphNode({ value, edges });
    this.vertices.push(vertex);
    edges.forEach(otherVertex => this.addEdge(vertex, otherVertex));
    if (this.vertices.length === 2 && vertex.numberOfEdges === 0) {
      this.addEdge(this.vertices[0], vertex);
    }
    return vertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    return this.vertices.some(node => node.value === value);
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const vertex = this.vertices.find(node => node.value === value);
    vertex.edges.forEach((otherVertex) => {
      this.removeEdge(vertex, otherVertex);
      this.removeEdge(otherVertex, vertex);
    });
    this.vertices.splice(this.vertices.indexOf(vertex), 1);
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    return fromVertex.edges.some(edge => edge === toVertex) &&
      toVertex.edges.some(edge => edge === fromVertex);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    fromVertex.pushToEdges(toVertex);
    toVertex.pushToEdges(fromVertex);
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    const fromEdge = fromVertex.edges.find(edge => edge === toVertex);
    const toEdge = toVertex.edges.find(edge => edge === fromVertex);
    fromVertex.edges.splice(fromVertex.edges.indexOf(fromEdge), 1);
    toVertex.edges.splice(toVertex.edges.indexOf(toEdge), 1);
    if (fromVertex.numberOfEdges === 0) this.vertices.splice(this.vertices.indexOf(fromVertex), 1);
    if (toVertex.numberOfEdges === 0) this.vertices.splice(this.vertices.indexOf(toVertex), 1); 
  }
}

module.exports = Graph;

