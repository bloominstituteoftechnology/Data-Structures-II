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
      this.vertices[0].pushToEdges(vertex);
      vertex.pushToEdges(this.vertices[0]);
    } else {
      const currentVertex = this.vertices[Math.floor(Math.random() * this.vertices.length)];
      currentVertex.pushToEdges(vertex);
      vertex.pushToEdges(currentVertex);
    }
    return vertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let flag = false;
    this.vertices.forEach((item) => {
      if (item._value === value) flag = true;
    });
    return flag;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const vertex = this.vertices.find(item => item._value === value);
    this.vertices.splice(this.vertices.indexOf(vertex), 1);
    if (vertex) {
      vertex._edges.forEach((node) => {
        node._edges.splice(node._edges.indexOf(vertex), 1);
      });
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const fromEdges = fromVertex._edges;
    const toEdges = toVertex._edges;
    if (!this.vertices.includes(fromVertex) || !this.vertices.includes(toVertex)) return false;
    if (fromEdges.includes(toVertex) && toEdges.includes(fromVertex)) return true;
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    const fromEdges = fromVertex._edges;
    const toEdges = toVertex._edges;
    if (!this.vertices.includes(fromVertex) || !this.vertices.includes(toVertex)) return undefined;
    if (fromEdges.includes(toVertex) && toEdges.includes(fromVertex)) return undefined;
    if (fromEdges.includes(toVertex) && !toEdges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
    if (!fromEdges.includes(toVertex) && toEdges.includes(fromVertex)) fromVertex.pushToEdges(toVertex);
    if (!fromEdges.includes(toVertex) && !toEdges.includes(fromVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (!this.vertices.includes(fromVertex) || !this.vertices.includes(toVertex)) return undefined;
    
  }
}

module.exports = Graph;

