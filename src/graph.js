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
    // this.vertices.includes(value);
    let containsValue = false;
    this.vertices.forEach((node) => {
      if (node.value === value) return containsValue = true;
    });
    return containsValue;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const index = this.vertices.findIndex((node) => {
      return node.value === value;
    });
    if (index === -1) return;
    const removedVertex = this.vertices.splice(index, 1)[0];
    removedVertex.edges.forEach((node) => {
      this.removeEdge(removedVertex, node);
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    return fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex);
    // let count = 0;
    // const arrFrom = fromVertex.edges;
    // const arrTo = toVertex.edges;
    // arrFrom.forEach((edge) => { 
    //   if(edge.value === toVertex.value) count++;
    // });
    // arrTo.forEach((edge) => { 
    //   if(edge.value === fromVertex.value) count++;
    // });
    // if (count === 2) return true;
    // return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    fromVertex.pushToEdges(toVertex);
    toVertex.pushToEdges(fromVertex);
    // in case there are multiple of the same in [edges]
    fromVertex.edges = fromVertex.edges.filter((edge, i) => {
      return fromVertex.edges.indexOf(edge) === i;
    });
    toVertex.edges = toVertex.edges.filter((edge, i) => {
      return toVertex.edges.indexOf(edge) === i;
    });
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.edges = fromVertex.edges.filter((edge) => {
        edge.value !== toVertex.value;
      });
      toVertex.edges = toVertex.edges.filter((edge) => {
        edge.value !== fromVertex.value;
      });
      if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
      if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
    }
    
    // const remove = (first, second) => {
    //   if (first.edges.includes(second)) {
    //     first.splice(first.edges.indexOf(second), 1);
    //     if (first.length === 0) {
    //       this.vertices.splice(this.vertices.indexOf(first), 1);
    //     }
    //   }
    // } 
    // remove(fromVertex, toVertex);
    // remove(toVertex, fromVertex);
    // if (fromVertex.edges.includes(toVertex)) {
    //   fromVertex.splice(fromVertex.edges.indexOf(toVertex), 1);
    //   if (fromVertex.length === 0) {

    //   }
    // }
    // if (toVertex.edges.includes(fromVertex)) {
    //   toVertex.splice(toVertex.edges.indexOf(fromVertex), 1);
    //   if (toVertex.length === 0) {

    //   }
    // }
  }
}

module.exports = Graph;

