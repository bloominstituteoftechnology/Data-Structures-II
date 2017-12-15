/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */

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

    const newNode = new GraphNode({value, edges});
    newNode.edges.forEach((vertex) => {
      this.addEdge(newNode, vertex);

    });

    if (this.vertices.length === 1) {
      this.addEdge(newNode, this.vertices[0]);

    }

    this.vertices.push(newNode);
    return newNode;

  }

  contains(value) {

    return this.vertices.some(vertex => vertex.value === value);

  }

  removeVertex(value) {

    this.vertices = this.vertices.filter(vertex => vertex.value !== value);
    this.vertices = this.vertices.filter((vertex) => {
      const cleanEdges = vertex.edges.filter(edge => edge.value !== value);
      vertex.edges = cleanEdges;
      return vertex.edges !== undefined;

    });
  }

  checkIfEdgeExists(fromVertex, toVertex) {

    return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex))
  }

  addEdge(fromVertex, toVertex) {
  
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }

  removeEdge(fromVertex, toVertex) {

    if (!this.checkIfEdgeExists(fromVertex, toVertex)) return false;
    fromVertex.edges = fromVertex.edges.filter(vertex => vertex.value !== toVertex.value);
    toVertex.edges = toVertex.edges.filter(vertex => vertex.value !== fromVertex.value);
    
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }
}

module.exports = Graph;

