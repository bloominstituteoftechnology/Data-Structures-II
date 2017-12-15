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
    this.vertices.splice(this.vertices.findIndex((vertex) => {
      return vertex.value === value;
    }), 1);
  }

  checkIfEdgeExists(fromVertex, toVertex) {
    return fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex);
  }

  addEdge(fromVertex, toVertex) {
    // check if an edge does not already exist
    if (!(this.checkIfEdgeExists(fromVertex, toVertex))) {
      // if not, add an edge
      // check if from vertex edge has the other vertex
      // to avoid duplicate edges
      if (!fromVertex.edges.includes(toVertex)) fromVertex.pushToEdges(toVertex);
      if (!toVertex.edges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
    }
  }

  removeEdge(fromVertex, toVertex) {
    // if no edge exists, do nothing
    if (!(this.checkIfEdgeExists(fromVertex, toVertex))) return;
    // else an edge exists between two vertices
    const findEdgeIndex = (edges, otherVertex) => {
      return edges.findIndex((edge) => {
        return edge === otherVertex;
      });
    };
    const badEdge = fromVertex.edges[findEdgeIndex(fromVertex.edges, toVertex)];
    fromVertex.edges.splice(fromVertex.edges.indexOf(badEdge));
    toVertex.edges.splice(toVertex.edges.indexOf(badEdge));
    // check both vertices to see if it has any edges
    // if no edges exist, remove it
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }

  depthFirstSearch(value) {
    let isFound = false;
    const searchEdge = (edge) => {
      if (edge.value === value) return true;
      if (edge.numberOfEdges === 0) return;
      if (edge.numberOfEdges === 1) return searchEdge(edge.edges[0]);
      return searchEdge(edge.edges[0]) || searchEdge(edge.edges.splice(1));
    };
    isFound = searchEdge(this.vertices[0]);
    return isFound || false;
  }
}

module.exports = Graph;

