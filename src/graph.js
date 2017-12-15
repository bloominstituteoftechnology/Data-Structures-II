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
        this.addEdge(newVertex, edge);
      });
    }
    // check if there are only two vertices here
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return newVertex;
  }

  contains(value) {
    let isFound = false;
    this.vertices.forEach((vertex) => {
      if (vertex.value === value) isFound = true;
    });
    return isFound;
  }

  removeVertex(value) {
    // vertices passed in should already have been checked for no edges
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        this.vertices.splice(i, 1);
        break;
      }
    }
  }

  checkIfEdgeExists(fromVertex, toVertex) {
    return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex));
  }

  addEdge(fromVertex, toVertex) {
    // check if an edge does not already exist
    if (!(this.checkIfEdgeExists(fromVertex, toVertex))) {
      // if not, add an edge
      const fromArr = fromVertex.edges;
      const toArr = toVertex.edges;
      // check each vertex's edge for the other vertex
      // to avoid duplicate edges
      let dupEdgeExists = false;
      fromArr.forEach((edge) => {
        if (edge === toVertex) {
          dupEdgeExists = true;
        }
      });
      // if there are no duplicates, push the edge
      if (!dupEdgeExists) fromVertex.pushToEdges(toVertex);
      // do the same for the other vertex
      dupEdgeExists = false;
      toArr.forEach((edge) => {
        if (edge === fromVertex) {
          dupEdgeExists = true;
        }
      });
      if (!dupEdgeExists) toVertex.pushToEdges(fromVertex);
    }
  }

  removeEdge(fromVertex, toVertex) {
    // if no edge exists, do nothing
    if (!(this.checkIfEdgeExists(fromVertex, toVertex))) return;
    // else an edge exists
    const fromArr = fromVertex.edges;
    const toArr = toVertex.edges;
    // for each of the vertex's edge
    fromArr.forEach((fromArrEdge) => {
      // if the edge is equal to the other vertex
      if (fromArrEdge === toVertex) {
        // remove the other vertex reference
        fromArr.splice(fromArr.indexOf(fromArrEdge), 1);
      }
    });
    // do the same for the other vertex
    toArr.forEach((toArrEdge) => {
      if (toArrEdge === fromVertex) {
        toArr.splice(toArr.indexOf(toArrEdge), 1);
      }
    });
    // check both vertices to see if it has any edges
    // if no edges exist, remove it
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }
}

module.exports = Graph;

