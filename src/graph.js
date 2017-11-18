/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
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
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  addVertex(value, edges = []) {
    /* teacher code 
    const newNode = new GraphNode ({ value, edges });
    newNode.edges.forEach(vertex => {
      this.addEdge(newNode, vertex);
    });
    if (this.vertices.length === 1){
      this.addEdge(newNode, vertices[0]);
    }
    this.vertices.push(newNode);
    return newNode;
    */
    const newNode = new GraphNode({
      value,
      edges: [],
    });
    if (edges.length === 0) {
      if (this.vertices.length > 0) {
        this.vertices[this.vertices.length - 1].pushToEdges(newNode);
        newNode.pushToEdges(this.vertices[this.vertices.length - 1]);
      }
    }
    edges.forEach((edge) => {
      edge.push(newNode);
    });
    this.vertices.push(newNode);
    return newNode;
  }
  // // Checks all the vertices of the graph for the target value
  // // Returns true or false
  contains(value) {
    /* teacher code
    for (let i = 0; i < this.vertices.length) {
      if (this.vertices[i].value === value) return true;
    }
    return false;
    // or
    // return this.vertices.some(vertex => vertex.value === value);
    // or
    // this.vertices.forEach(vertex => {
    //   if (vertex.value === value) return true;
    // });
    // return false;
    */
    let flag = false;
    this.vertices.forEach((vertex) => {
      if (vertex.value === value) {
        flag = true;
      }
    });
    return flag;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    /* teacher code
    this.vertices = this.vertices.filter(vertex => vertex.value !== value);
    this.vertices = this.vertices.filter(vertex => {
      const filteredEdges = vertex.edges.filter(edge => edge.value !==value);
      vertex.edges = filteredEdges;
      return vertex.edges !== undefined;
    })
    // OR
    if (!this.contains(value)) return;
    const forRemoval = this.vertices.filter(vertex => vertex.value === value)[0];
    // OR
    const filteredVertices = [];
    let forRemoval;
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        forRemoval = this.vertices[i];
      } else {
        filteredVertices.push(this.vertices[i]);
      }
    }
    this.vertices = filteredVertices;
    forRemoval.edges.forEach(vertex => {
      this.removeEdge(forRemoval, vertex);
    });
    */
    for (let i = 0; i < this.vertices.length; i++) {
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
    /* teacher code
    return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex));
    */
    let flag = false;
    const theThis = this.vertices;
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    fromEdges.forEach((edge1) => {
      if (edge1 === toVertex) {
        toEdges.forEach((edge2) => {
          if (edge2 === fromVertex) {
            flag = true;
          }
        });
      }
    });
    return flag;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  // If fromVertex's edges does not include toVertex, push toVertex to fromVertex's edges
  // If toVertex's edges does not include fromVertex, push fromVertex to toVertex's edges
  addEdge(fromVertex, toVertex) {
    /* teacher code -he created the 2 lines directly below last
    if (!fromVertex.edges.includes(toVertex)) fromVertex.pushToEdges(toVertex);
    if(!toVertex.edges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
    // his initial code that he decided to change was below
    // if (checkIfEdgeExists(fromVertex, toVertex)) return;
    // fromVertex.pushToEdges(toVertex);
    // toVertex.pushToEdges(fromVertex);
    */
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  // Pass vertices to checkIfEdgeExits method and return false if it return
  // Loop over fromVertex's edges array and remove toVertex from it if it is found
  // If fromVertex's edges array is empty, remove fromVertex from Graph's vertices
  // Loop over toVertex's edges array and remove fromVertex from it if it is found
  // If toVertex's edges array is empty, remove toVertex from Graph's vertices
  removeEdge(fromVertex, toVertex) {
    /* teacher code
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) return false;
    fromVertex.edges = fromVertex.edges.filter(vertex => vertex.value !== toVertex.value);
    toVertex.edges = toVertex.edges.filter(vertex => vertex.value !== fromVertex.value);
    if (fromVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
    */
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromEdges.splice(fromEdges.indexOf(toVertex), 1);
      toEdges.splice(toEdges.indexOf(fromVertex), 1);
    }
    if (fromEdges.length === 0) {
      this.vertices.splice(this.vertices.indexOf(fromVertex), 1);
    }
    if (toEdges.length === 0) {
      this.vertices.splice(this.vertices.indexOf(toVertex), 1);
    }
  }
}

module.exports = Graph;
