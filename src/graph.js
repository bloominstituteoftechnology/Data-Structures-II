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

  depthFirstSearch(value) {
    // pass in copies of filtered edges
    const searchEdgeTree = (edges) => {
      console.log(edges);
      if (edges[0].value === value) return true;
      if (node.numberOfEdges === 1) searchEdgeTree(node.edges.filter(edgeNodes => edgeNodes.value !== node.value)[0]);
      if (node.numberOfEdges > 1) {
        node.edges.forEach(edgeNode => searchEdgeTree(edgeNode.edges.filter(edge => edge.value !== node.value)));
      }
      return;
    };
    return searchEdgeTree(this.vertices) || false;
  }
}

module.exports = Graph;

