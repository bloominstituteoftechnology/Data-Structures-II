/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
/* eslint-disable */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode {
  constructor({
    value,
    edges,
  }) {
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
    // const currentNode = new GraphNode(value, edges);
    if (this.vertices.length === 0) {
      // this.vertices.push(currentNode);
      this.vertices.push(new GraphNode({ value, edges, }));
    } else {
      // this.vertices.push(currentNode);      
      this.vertices.push(new GraphNode({ value, edges, }));
      const i = this.vertices.length;
      this.vertices[i - 2].edges.push(this.vertices[i - 1].value);
      this.vertices[i - 1].edges.push(this.vertices[i - 2].value);
    }
    // return currentNode;
    return this.vertices[this.vertices.length - 1];
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      // console.log(this.vertices[i]);
      if (this.vertices[i].value === value) {
        return true;
      } 
    }
    return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].edges.includes(value)) {
        this.vertices[i].edges = this.vertices[i].edges.filter(x => x !== value);
      }
      if (this.vertices[i].value === value) {
        this.vertices.splice(i, 1);
      }
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    console.log(fromVertex);
    console.log(toVertex);
    for (let i = 0; i < toVertex.length; i++) {
      if (fromVertex.value === toVertex.edges[i]) return true;
    }
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {

  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {

  }
}

module.exports = Graph;
