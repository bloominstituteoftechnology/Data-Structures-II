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
  addVertex(value, edges = []) {
    const vertex = new GraphNode({ value, edges });

    this.vertices.push(vertex);
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], vertex);
    }
    if (edges.length > 0) {
      edges.forEach((edge) => {
        this.addEdge(vertex, edge);
      });
    }

    return vertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) return true;
    }

    return false;
  }

  getVertexIndex(vertex) {
    return this.vertices.indexOf(vertex);
  }

  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  removeVertex(value) {
    let vertexToRemove;
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        vertexToRemove = this.vertices[i];
        break;
      }
    }

    if (!vertexToRemove) return;

    this.vertices.forEach((vertex) => {
      if (vertex.numberOfEdges > 0) {
        this.removeEdge(vertex, vertexToRemove);
      }
    });
    
    const vertexIdx = this.getVertexIndex(vertexToRemove);
    this.vertices.splice(vertexIdx, 1);
    return;
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    if (fromEdges.includes(toVertex) && toEdges.includes(fromVertex)) {
      return true;
    }
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
    return;
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  removeEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      const fromEdges = fromVertex.edges;
      const toEdges = toVertex.edges;
      let index = fromEdges.indexOf(toVertex);
      fromEdges.splice(index, 1);
      fromVertex.edges = fromEdges;

      index = toEdges.indexOf(fromVertex);
      toEdges.splice(index, 1);
      toVertex.edges = toEdges;
    }

    for (let i = this.vertices.length - 1; i >= 0; i--) {
      if (this.vertices[i].numberOfEdges === 0) {
        this.removeVertex(this.vertices[i].value);
      }
    }
    return;
  }
}

module.exports = Graph;

