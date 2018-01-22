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
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    const vertex = new GraphNode({ value, edges });
    this.vertices.push(vertex);
    edges.forEach(otherVertex => this.addEdge(vertex, otherVertex));
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], vertex);
    }
    return vertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    return this.vertices.some(node => node.value === value);
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const vertex = this.vertices.find(node => node.value === value);
    if (!vertex) return;
    vertex.edges.forEach(otherVertex => this.removeEdge(vertex, otherVertex));
    this.vertices.splice(this.vertices.indexOf(vertex), 1);
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    return fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    fromVertex.pushToEdges(toVertex);
    toVertex.pushToEdges(fromVertex);
    fromVertex.edges = fromVertex.edges.filter((edge, index) => fromVertex.edges.indexOf(edge) === index);
    toVertex.edges = toVertex.edges.filter((edge, index) => toVertex.edges.indexOf(edge) === index);
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    const fromIndex = fromVertex.edges.indexOf(toVertex);
    const toIndex = toVertex.edges.indexOf(fromVertex);
    fromVertex.edges.splice(fromIndex, 1);
    toVertex.edges.splice(toIndex, 1);
    if (fromVertex.numberOfEdges === 0) this.vertices.splice(this.vertices.indexOf(fromVertex), 1);
    if (toVertex.numberOfEdges === 0) this.vertices.splice(this.vertices.indexOf(toVertex), 1); 
  }

  depthFirstSearch(value, startVertex = this.vertices[0], alreadyTried = [], returnAlreadyTried = false) {
    if (startVertex.value === value) {
      if (returnAlreadyTried) return [startVertex, alreadyTried];
      return startVertex;
    }
    alreadyTried.push(startVertex);
    const nextVertices = startVertex.edges.filter(otherVertex => !alreadyTried.includes(otherVertex));
    let result = null;
    nextVertices.forEach((vertex) => {
      const rawResult = this.depthFirstSearch(value, vertex, alreadyTried, true);
      result = rawResult[0];
      alreadyTried = rawResult[1];
      if (result !== null) return;
    });
    if (returnAlreadyTried) return [result, alreadyTried];
    return result;
  }

  breadthFirstSearch(value, startVertex) {
    const queue = new Queue();
    const alreadyTried = [];
    queue.enqueue(startVertex);
    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      if (vertex.value === value) return vertex;
      alreadyTried.push(vertex);
      vertex.edges.forEach((nextVertex) => {
        if (!alreadyTried.includes(nextVertex)) queue.enqueue(nextVertex);
      });
    }
    return null;
  }
}

module.exports = Graph;
