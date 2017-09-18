/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode {
  constructor(value, edges = []) {
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
    const newVertex = new GraphNode(value, edges);
    this.vertices.push(newVertex);
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    if (edges.length !== 0 && this.vertices.length > 2) {
      newVertex.edges.forEach((vertex) => {
        this.addEdge(newVertex, vertex);
      });
    }
    return newVertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let found = false;
    this.vertices.forEach((vertex) => {
      if (value === vertex.value) {
        found = true;
      }
    });
    return found;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  removeVertex(value) {
    this.vertices.forEach((vertex, index) => {
      if (value === vertex.value) {
        this.vertices.splice(index, 1);
      }
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const fromVertexEdges = fromVertex.edges; 
    const toVertexEdges = toVertex.edges;
    let aToB = false;
    let bToA = false;
    fromVertexEdges.forEach((edge) => {
      if (edge === toVertex) {
        aToB = true;
      }
    });
    toVertexEdges.forEach((edge) => {
      if (edge === fromVertex) {
        bToA = true;
      }
    });
    return (aToB && bToA);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    fromVertex.edges.push(toVertex);
    toVertex.edges.push(fromVertex);
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  removeEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.edges.forEach((edge, index) => {
        if (edge === toVertex) {
          fromVertex.edges.splice(index, 1);
        }
      });
      toVertex.edges.forEach((edge, index) => {
        if (edge === fromVertex) {
          toVertex.edges.splice(index, 1);
        }
      });
    }
    if (fromVertex.edges.length === 0) {
      this.vertices.forEach((vertex, index) => {
        if (vertex === fromVertex) {
          this.vertices.splice(index, 1);
        }
      });
    }
    if (toVertex.edges.length === 0) {
      this.vertices.forEach((vertex, index) => {
        if (vertex === toVertex) {
          this.vertices.splice(index, 1);
        }
      });
    }
  }
}

module.exports = Graph;

