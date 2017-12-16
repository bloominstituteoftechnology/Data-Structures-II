/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */

const Queue = require('./queue-helper');

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

  addVertex(value, edges = []) {
    const newVertex = new GraphNode({ value, edges });
    this.vertices.push(newVertex);
    // if pre-existing edges were sent as params
    if (edges.length > 0) {
      // if so, add each edge to current vertex
      edges.forEach((edge) => {
        edge.pushToEdges(newVertex);
      });
    }
    // check if there are only two vertices here
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return newVertex;
  }

  contains(value) {
    return undefined !== this.vertices.find((vertex) => {
      return vertex.value === value;
    });
  }

  removeVertex(value) {
    // vertices passed in should already have been checked for no edges
    this.vertices = this.vertices.filter(vertex => vertex.value !== value);
    this.vertices = this.vertices.filter((vertex) => {
      const filteredEdges = vertex.edges.filter(edge => edge.value !== value);
      vertex.edges = filteredEdges;
      return vertex.numberOfEdges > 0;
    });
  }

  checkIfEdgeExists(fromVertex, toVertex) {
    return fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex);
  }

  addEdge(fromVertex, toVertex) {
    // check if an edge does not already exist
    if (!(this.checkIfEdgeExists(fromVertex, toVertex))) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }

  removeEdge(fromVertex, toVertex) {
    // if no edge exists, do nothing
    if (!(this.checkIfEdgeExists(fromVertex, toVertex))) return;
    // else an edge exists between two vertices
    fromVertex.edges = fromVertex.edges.filter(edge => edge.value !== toVertex.value);
    toVertex.edges = toVertex.edges.filter(edge => edge.value !== fromVertex.value);
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }

  depthFirstForEach(cb) {
    // to avoid going around in circles
    const vertexVals = [];
    // recur method for depth first search
    const depthFirstForEachEdge = (edges) => {
      edges.forEach((edge) => {
        if (!vertexVals.includes(edge.value)) {
          cb(edge.value);
          vertexVals.push(edge.value);
        }
        depthFirstForEachEdge(edge.edges.filter(edgeChild => !vertexVals.includes(edgeChild.value)));
      });
    };
    depthFirstForEachEdge([this.vertices[0]]);
  }

  breadthFirstForEach(cb) {
    const queue = new Queue();
    const vertexVals = [];
    queue.enqueue(this.vertices[0]);
    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      cb(vertex.value);
      vertexVals.push(vertex.value);
      vertex.edges.forEach((edge) => {
        if (!vertexVals.includes(edge.value)) queue.enqueue(edge);
      });
    }
  }
}

module.exports = Graph;

