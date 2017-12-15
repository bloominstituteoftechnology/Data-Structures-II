/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
// Do not modify this GraphNode class
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
    const newNode = new GraphNode({ value, edges });

    newNode.edges.forEach((edge) => {
      this.addEdge(newNode, edge);
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
    return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex));
  }
  addEdge(fromVertex, toVertex) {
    if (!fromVertex.edges.includes(toVertex)) fromVertex.pushToEdges(toVertex);
    if (!toVertex.edges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
  }
  removeEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) return false;
    fromVertex.edges = fromVertex.edges.filter(vertex => vertex.value !== toVertex.value); // return boolean, any vertex that passed test then add array
    toVertex.edges = toVertex.edges.filter(vertex => vertex.value !== fromVertex.value); // return boolean, any vertex that passed test then add array
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }
}

module.exports = Graph;

