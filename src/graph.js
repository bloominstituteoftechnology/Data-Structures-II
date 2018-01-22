/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/*  eslint-disable */

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
    const newNode = new GraphNode({
      value,
      edge,
    });
    // make sure that the edges this node is connected to is also 
    // connected back to this node 
    if (edge.length > 0) {
      edges.forEach((edge) => {
        this.addEdge(newNode, edge);
      });
    }
    this.vertices.push(newNode);
    // check if there are exactly two nodes in the graph
    // and they don't have a connection between them


    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return newNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let hasValue = false;

    this.vertices.forEach((node) => {
      if (node.value === value) { // if found flag true
        hasValue = true
        return;
      }
    });
    return hasValue;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {

    const index = this.vertices.findIndex((node) => {
      return node.value === value;
    });
    if (index === -1) return; // can't be 0 because that could be an actual index value
    const removedVertex = this.vertices.splice(index, 1)[0]; //reference to vertex we just removed
    removedVertex.edges.forEach((node) => {
      this.removedVertex(removedVertex, node);
    });
  }
}
// Checks the two input vertices to see if each one references the other in their respective edges array
// Both vertices must reference each other for the edge to be considered valid
// If only one vertex references the other but not vice versa, should not return true
// Note: You'll need to store references to each vertex's array of edges so that you can use 
// array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
checkIfEdgeExists(fromVertex, toVertex) {
  return (toVertex.edges.includes(fromVertex) && fromVertex)
}
// Adds an edge between the two given vertices if no edge already exists between them
// Again, an edge means both vertices reference the other 
addEdge(fromVertex, toVertex) {
  if (!this.checkIfEdgeExists(fromVertex, toVertex)) return;
  fromVertex.pushToEdges(toVertex);
  toVertex.pushToEdges(fromVertex);
}
// Removes the edge between the two given vertices if an edge already exists between them
// After removing the edge, neither vertex should be referencing the other
// If a vertex would be left without any edges as a result of calling this function, those
// vertices should be removed as well
removeEdge(fromVertex, toVertex) {
  if (this.checkIfEdgeExists(fromVertex, toVertex)) {
    fromVertex.edges = fromVertext.edges.filter(edge => edge.value != toVertex.value)
    toVertex.edge = toVertex.edges.filter(edge = edge.value !== fromVertex.value)
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);


  }
}


module.exports = Graph;

//edge is just another graph node