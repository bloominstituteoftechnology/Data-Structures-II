/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
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
    const newNode = new GraphNode({ value, edges });
    // make sure what we're connected to knows about us
    if (edges.length > 0) {
      edges.forEach((nodeItShouldConnectTo) => {
        this.addEdge(newNode, nodeItShouldConnectTo);
      });
    }
    this.vertices.push(newNode);
    // if only two nodes, connect them
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return newNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let hasValue = false;
    this.vertices.forEach((elem) => {
      if (elem.value !== undefined && elem.value === value) {
        hasValue = true;
        return;
      }
    });
    return hasValue;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // if this graph contains a node with .value = given value
    if (this.contains(value)) {
      // splice out that node after finding its index
      this.vertices.splice(this.vertices.findIndex((elem) => { return elem.value === value; }, 1));
    }
    // for each node's set of edges, splice the index where the given value is found
    this.vertices.forEach((node) => {
      node.edges.splice(node.edges.findIndex((elem) => { return elem.value === value; }), 1);
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const placeHolder = this;
    return fromVertex.edges.includes(toVertex);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
    }
    if (!this.checkIfEdgeExists(toVertex, fromVertex)) {
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.edges.splice(fromVertex.edges.findIndex((elem) => { return elem.value === toVertex.value; }));
    }
    if (!this.checkIfEdgeExists(toVertex, fromVertex)) {
      toVertex.edges.splice(toVertex.edges.findIndex((elem) => { return elem.value === fromVertex.value; }), 1);
    }
    if (fromVertex.edges.length === 0) {
      this.removeVertex(fromVertex.value);
    } else if (toVertex.edges.length === 0) {
      this.removeVertex(toVertex.value);
    } else { return; }
  }
}

module.exports = Graph;

