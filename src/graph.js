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
    const currentNode = new GraphNode({ value, edges: []});
    if (this.vertices.length === 1) {
      const nextNode = this.vertices[0];
      currentNode.pushToEdges(nextNode);
      nextNode.pushToEdges(currentNode);
    }
    edges.forEach((edge) => {edge.pushToEdges(currentNode); });
    this.vertices.push(currentNode);
    return currentNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    return (this.vertices.findIndex(vertices => vertices.value === value) >= 0);
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const vertexIndex = this.vertices.findIndex(function(vertices) { 
      return vertices.value === value });
    this.vertices.splice(vertexIndex, 1);
    this.vertices.forEach((item) => {
      item.edges.splice(this.vertices.findIndex(vertices => vertices.value === value), 1);
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(descend, ascend) {
    return (descend.edges.indexOf(ascend) >= 0 || ascend.edges.indexOf(descend) >= 0);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(descend, ascend) {
    if (this.checkIfEdgeExists(descend, ascend) === false) {
      descend.pushToEdges(ascend);
      ascend.pushToEdges(descend);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(descend, ascend) {
    descend.edges.splice(descend.edges.indexOf(ascend), 1);
    ascend.edges.splice(ascend.edges.indexOf(descend), 1);
    if (descend.edges.length === 0) {
      this.removeVertex(descend);
    }
    if (ascend.edges.length === 0) {
      this.removeVertex(ascend);
    }
  }
}

module.exports = Graph;

