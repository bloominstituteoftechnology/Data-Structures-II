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

  addVertex(value, edges = []) {
    const newVertex = new GraphNode({ value, edges });
    this.vertices.push(newVertex);
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    if (edges !== []) {
      for (let i = 0; i < edges.length; i++) {
        this.addEdge(newVertex, edges[i]);
      }
    }
    return newVertex;
  }

  contains(value) {
    return this.vertices.some(vertex => vertex.value === value);
  }

  removeVertex(value) {
    const filteredVertices = [];
    let vertexforDeletion;
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        vertexforDeletion = this.vertices[i];
      } else {
        filteredVertices.push(this.vertices[i]);
      }
    }
    this.vertices = filteredVertices;
    vertexforDeletion.edges.forEach((vertex) => {
      this.removeEdge(vertexforDeletion, vertex);
    });
  }

  checkIfEdgeExists(fromVertex, toVertex) {
    const useThis = this;
    return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex));    
  }

  addEdge(fromVertex, toVertex) {
    const useThis = this;
    if (!fromVertex.edges.includes(toVertex)) fromVertex.pushToEdges(toVertex);
    if (!toVertex.edges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
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
