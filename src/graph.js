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
    if (this.vertices.length === 1 && value !== this.vertices[0].value) {
      if (!this.vertices[0].edges.includes(vertex) && !vertex.edges.includes(this.vertices[0])) {
        this.vertices[0].pushToEdges(vertex);
        vertex.pushToEdges(this.vertices[0]);
      } else if (!this.vertices[0].edges.includes(vertex)) {
        this.vertices[0].pushToEdges(vertex);
      } else if (!vertex.edges.includes(this.vertices[0])) {
        vertex.pushToEdges(this.vertices[0]);
      }
      this.vertices.push(vertex);
    } else if (this.vertices !== 0) {
      if (edges.length !== 0) {
        edges.forEach((item) => {
          if (this.vertices.includes(item) && !item.edges.includes(vertex)) {
            this.vertices[this.vertices.indexOf(item)].pushToEdges(vertex);
          } 
        });
      }
      this.vertices.push(vertex);
    }
    return vertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let flag = false;
    this.vertices.forEach((item) => {
      if (item.value === value) flag = true;
    });
    return flag;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const vertex = this.vertices.find(item => item.value === value);
    if (vertex) {
      vertex.edges.forEach((node) => {
        this.removeEdge(vertex, node);
      });
      this.vertices.splice(this.vertices.indexOf(vertex), 1);
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    if (!this.vertices.includes(fromVertex) || !this.vertices.includes(toVertex)) return false;
    if (fromEdges.includes(toVertex) && toEdges.includes(fromVertex)) return true;
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    if (!this.vertices.includes(fromVertex) || !this.vertices.includes(toVertex)) return undefined;
    if (fromEdges.includes(toVertex) && toEdges.includes(fromVertex)) return undefined;
    if (fromEdges.includes(toVertex) && !toEdges.includes(fromVertex)) {
      toVertex.pushToEdges(fromVertex);
      this.vertices[this.vertices.indexOf(toVertex)] = toVertex;
    }
    if (!fromEdges.includes(toVertex) && toEdges.includes(fromVertex)) {
      fromVertex.pushToEdges(toVertex);
      this.vertices[this.vertices.indexOf(fromVertex)] = fromVertex;
    }
    if (!fromEdges.includes(toVertex) && !toEdges.includes(fromVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
      this.vertices[this.vertices.indexOf(toVertex)] = toVertex;
      this.vertices[this.vertices.indexOf(fromVertex)] = fromVertex;
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      const fromEdges = fromVertex.edges;
      const toEdges = toVertex.edges;
      fromEdges.splice(fromEdges.indexOf(toVertex), 1);
      if (fromEdges.length === 0) this.vertices.splice(this.vertices.indexOf(fromVertex), 1);
      fromVertex.edges = fromEdges;
      this.vertices[this.vertices.indexOf(fromVertex)] = fromVertex;
      toEdges.splice(toEdges.indexOf(fromVertex), 1);
      if (toEdges.length === 0) this.vertices.splice(this.vertices.indexOf(toVertex), 1);
      toVertex.edges = toEdges;
      this.vertices[this.vertices.indexOf(toVertex)] = toVertex;
    }
  }
}

module.exports = Graph;

