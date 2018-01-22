/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable */
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
    // sean's
    const newNode = new GraphNode({
      value,
      edges,
    });
    // ensure that the edges that this node is connected to also 
    // connect back to this new node we're creating 
    
    if (edges.length > 0) {
      edges.forEach((edge) => {
        this.addEdge(newNode, edge);
      });
    }
    
    this.vertices.push(newNode);
    
    // we need to check if there are exactly two nodes in the graph and they do 
    // not have a connection between them
    
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return newNode;

  }
  
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let containValue = false;
    this.vertices.forEach((vertex) => {
      if(vertex.value === value){
        containValue = true;
      }
    });
    return containValue;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    this.vertices.forEach((vertex, i) => {
      if(vertex.value === value){
        this.vertices.splice(i, 1);
        if(vertex.edges.length > 0){
          vertex.edges.forEach((edge) => {
          this.removeEdge(vertex, edge);
        });
        }
      }
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  
  checkIfEdgeExists(fromVertex, toVertex) {
    // sean's
    return (toVertex.edges.includes(fromVertex) && fromVertex.edges.includes(toVertex));

    // my attempt, does not return true
    
    // let counter = 0; // 2 means true
    // const fromEdges = fromVertex.edges;
    // const toEdges = toVertex.edges;
    // fromEdges.forEach((edge) => {
    //   if(edge === toVertex) counter++;
    // });
    // toEdges.forEach((edge) => {
    //   if(edge === fromVertex) counter++;
    // });
    // if(counter === 2) return true;
    // return false;
  }
  
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  
  addEdge(fromVertex, toVertex) {
    // sean's
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
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

    // if(this.checkIfEdgeExists(fromVertex, toVertex)){
    //   // loop through fromVertex's edges, check if fromVertex's edge matches toVertex 
    //   // then remove toVertex from fromVertex's edge
    //   fromVertex.edges.forEach((edge, i) => {
    //     if(edge === toVertex){
    //       fromVertex.edges.slice(i, 1);
    //     }
    //   });
    //   toVertex.edges.forEach((edge, i) => {
    //     if(edge === fromVertex){
    //       toVertex.edges.slice(i, 1);
    //     }
    //   });
    // }
  }
}

module.exports = Graph;

