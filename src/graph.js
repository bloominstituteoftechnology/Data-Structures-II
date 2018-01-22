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
    this._vertices = [];
  }

  get vertices() {
    return this._vertices;
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    const newNode = new GraphNode({
      value,
      edges,
    });
    // ensure that the edges that this node is connected to also
    // connects back to this node (necessary for undirected/bidirectional graph)
    // and an empty array wasn't passed in
    if (edges.length > 0) {
      // iterates through the connected nodes and adds edge
      // addEdge is a functino we create below
      edges.forEach(edge => this.addEdge(newNode, edge));
    }
    // pushes the new node to the vertices array in the overarching Graph object
    this.vertices.push(newNode);
  
    // check if there are exactly two nodes in the graph and they are 
    // do not have a connection between them
    // instead of this.vertices.length, implement a getter for this instead
    // adds an edge from the first vertices[0] and vertices[1] and vice versa
    if (this.vertices.length === 2) this.addEdge(this.vertices[0], this.vertices[1]);
    return newNode;
  }
  
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let flag = false;
    this.vertices.forEach((node) => {
      if (node.value === value) flag = true;
    });
    return flag;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // index of the node we are looking for
    // find index iterates through array
    const index = this.vertices.findIndex((node) => {
      return node.value === value;
    });
    // if it doesn't find a match it will return -1 by default
    if (index === -1) return;
    // removes the graph node we are trying to remove and puts in array removedVertex
    // [0] because it returns a double array otherwise (I think...)
    const removedVertex = this.vertices.splice(index, 1)[0];
    removedVertex.edges.forEach((edge) => {
      this.removeEdge(removedVertex, edge);
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let toFrom = false;
    let fromTo = false;
    const blah = this;
    
    // Sure there is a better way to do this
    // Checks whether the two node's edges are connected either way to each other
    for (let i = 0; i < fromVertex.edges.length; i++) {
      if (fromVertex.edges[i] === toVertex) fromTo = true;
      if (toVertex.edges[i] === fromVertex) toFrom = true;
      if (toVertex === fromVertex.edges[i]) toFrom = true;
      if (fromVertex === toVertex.edges[i]) fromTo = true;
    }
    if (toFrom && fromTo) return true;
    return false;
  }
// Adds an edge between the two given vertices if no edge already exists between them
// Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    const blah = this;
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
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.edges = fromVertex.edges.filter(edge => edge.value !== toVertex.value);
      toVertex.edges = toVertex.edges.filter(edge => edge.value !== fromVertex.value);
      if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
      if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
    }
  }
}
module.exports = Graph;

