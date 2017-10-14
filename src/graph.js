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
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex

  addVertex(value, edges = []) {
    const node = new GraphNode({ value, edges: [] }); // new node...I shall love it and hold it and squeeze it and call it George
    if (this.vertices.length === 1) { // am I first???
      const firstNode = this.vertices[0]; // #1 takes their place at the head of the table
      node.pushToEdges(firstNode); // node connects to firstNode A -> B
      firstNode.pushToEdges(node); // firstNode connects to node B -> A
    }
    edges.forEach((connection) => { connection.pushToEdges(node); }); // since I'm not first connect me to my peers
    this.vertices.push(node); // push me to that great array in teh sky
    return node; // return my node-y goodness
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false

  contains(value) {
    /* I found this method this morning, it makes sense to try it here
    in the class array called vertices, return the first element that satisfies the condition
    pass vertices as an argument into the function, which is an if statement
    where the indexed value is strictly equal to the passed in value */
    return (this.vertices.findIndex(vertices => vertices.value === value) >= 0); 
  }

  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  
  removeVertex(value) {
    const mightyI = this.vertices.findIndex(vertices => vertices.value === value); // the mightyI is the holder of the matching value
    this.vertices.splice(mightyI, 1); // splice it (which means something completely different in sailing...)
    this.vertices.forEach((item) => { // iterate through passing in my item
      item.edges.splice(this.vertices.findIndex(vertices => vertices.value === value), 1); // splice again
    });
  }

  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class

  checkIfEdgeExists(fromVertex, toVertex) {
    return (fromVertex.edges.indexOf(toVertex) >= 0 || toVertex.edges.indexOf(fromVertex) >= 0); // a little Schrodinger's cat
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex) === false) { // the cat doesn't exist
      fromVertex.pushToEdges(toVertex); // but if it starts networking
      toVertex.pushToEdges(fromVertex); // it will...
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    fromVertex.edges.splice(fromVertex.edges.indexOf(toVertex), 1); // remove the instance of A -> B
    toVertex.edges.splice(toVertex.edges.indexOf(fromVertex), 1); // remove the instance of B -> A
    if (fromVertex.edges.length === 0) { // if you defriended me
      this.removeVertex(fromVertex); // I'll defriend you
    }
    if (toVertex.edges.length === 0) {
      this.removeVertex(toVertex);
    }
  }
}

module.exports = Graph;

