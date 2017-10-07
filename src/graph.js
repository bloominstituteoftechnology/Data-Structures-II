/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces, arrow-parens, no-console */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
const BinarySearchTreeObject = require('./binary-search-tree-object');

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
    const gn = new GraphNode({ value, edges: [] });
    if (edges.length === 0) {
      if (this.vertices.length > 0) {
        this.vertices[this.vertices.length - 1].pushToEdges(gn);
        gn.pushToEdges(this.vertices[this.vertices.length - 1]);
      }
    }
    edges.forEach(edge => {
      edge.pushToEdges(gn);
      gn.pushToEdges(edge);
    });
    this.vertices.push(gn);
    return gn;
  }

  get vertexValues() {
    return this.vertices.reduce((memo, v) => {
      memo.push(v.value);
      return memo;
    }, []);
  }
  get vertexEdges() {
    return this.vertices.reduce((memo, v) => {
      v.vertices.forEach(ver => memo.push(ver));
      return memo;
    }, []);
  }  
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    return this.vertices.findIndex(v => v.value === value) >= 0;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const index = this.vertices.findIndex(v => v.value === value);
    this.vertices.splice(index, 1);
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    return (
      fromVertex.edges.indexOf(toVertex) >= 0 &&
      toVertex.edges.indexOf(fromVertex) >= 0
    );
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    if (fromVertex.edges.indexOf(toVertex) < 0) {
      fromVertex.pushToEdges(toVertex);
    }
    if (toVertex.edges.indexOf(fromVertex) < 0) {
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    let index = fromVertex.edges.findIndex(v => v === toVertex);
    if (index >= 0) {
      fromVertex.edges.splice(index, 1);
      if (fromVertex.numberOfEdges === 0) {
        this.removeVertex(fromVertex.value);
      }
    }
    index = toVertex.edges.findIndex(v => v === fromVertex);
    if (index >= 0) {
      toVertex.edges.splice(index, 1);
      if (toVertex.numberOfEdges === 0) {
        this.removeVertex(toVertex.value);
      }
    }
  }
}

module.exports = Graph;
