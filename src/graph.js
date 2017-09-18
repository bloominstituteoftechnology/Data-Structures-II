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
    const graphNode = new GraphNode({ value, edges });
    this.vertices.push(graphNode);      
    if (graphNode.edges[0]) {
      this.addEdge(graphNode, graphNode.edges[0]); 
    }
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return graphNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    const vertices = this.vertices;
    if (!vertices) return false;
    for (let i = 0; i < vertices.length; i++) {    
      if (vertices[i].value === value) return true;
    }
    return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  removeVertex(value) {
    const vertices = this.vertices;
    if (!vertices) return null;
    for (let i = 0; i < vertices.length; i++) { 
      if (vertices[i].value === value) {
        if (i > 0) this.vertices = vertices.slice(0, i).concat(vertices.slice(i + 1));
        if (!i) this.vertices = vertices.slice(1);
        if (i === vertices.length - 1) this.vertices = vertices.slice(0, i);
      }
    }
    return null;
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let count = 0;
    this.vertices[(this.vertices.indexOf(fromVertex))].edges.forEach((x) => {
      if (x === toVertex.value) count++;
    });
    this.vertices[(this.vertices.indexOf(toVertex))].edges.forEach((x) => {
      if (x === fromVertex.value) count++;
    });
    return count >= 2;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    const index1 = this.vertices.indexOf(fromVertex);
    const index2 = this.vertices.indexOf(toVertex);
    if (this.vertices.indexOf(fromVertex.value) === -1) this.vertices[index2].pushToEdges(fromVertex.value);
    if (this.vertices.indexOf(toVertex.value) === -1) this.vertices[index1].pushToEdges(toVertex.value);
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].edges = this.vertices[i].edges.filter(x => typeof x === 'string');
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  removeEdge(fromVertex, toVertex) {
    const index1 = this.vertices.indexOf(fromVertex);
    let index2 = this.vertices.indexOf(toVertex);
    const indexToCut1 = this.vertices[index2].edges.indexOf(fromVertex.value);
    const indexToCut2 = this.vertices[index1].edges.indexOf(toVertex.value);
    this.vertices[index1].edges.splice(indexToCut1, 1);
    this.vertices[index2].edges.splice(indexToCut2, 1);
    if (!fromVertex.edges[0]) this.vertices.splice(index1, 1);
    index2 = this.vertices.indexOf(toVertex);
    if (!toVertex.edges[0]) this.vertices.splice(index2, 1);    
  }
}

module.exports = Graph;

