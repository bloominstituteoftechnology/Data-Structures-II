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
    if (this.vertices.length === 1) {
      const newNode = new GraphNode({ value, edges });
      this.vertices.push(newNode);

      // this.vertices[0]._edges = newNode;
      this.addEdge(this.vertices[0], this.vertices[1]);
      return newNode;
    } 
    const newNode = new GraphNode({ value, edges });
    this.vertices.push(newNode);
    return newNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i]._value === value) return true;
    }
    return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  removeVertex(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i]._value === value) {
        this.vertices.splice(i, 1);
      }
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    if (fromVertex._edges) {
      for (let i = 0; i < fromVertex._edges.length; i++) {
        if (fromVertex._edges[i] === toVertex) return true;
      }
    }
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (!fromVertex._edges) {
      fromVertex._edges = [];
    }
    if (!toVertex._edges) {
      toVertex._edges = [];
    }
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  removeEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      for (let i = 0; i < fromVertex._edges.length; i++) {
        if (fromVertex._edges[i] === toVertex) {
          fromVertex._edges.splice(i, 1);
        }
      }
      for (let i = 0; i < toVertex._edges.length; i++) {
        if (toVertex._edges[i] === fromVertex) {
          toVertex._edges.splice(i, 1);
        }
      }
    }
    fromVertex._value = undefined;
    toVertex._value = undefined;
  }
}

module.exports = Graph;

