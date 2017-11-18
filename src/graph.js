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
    // * Create a new instace of Graph node and pass it the provided value and edges
    // For all provided edges, iterate over and add the new GraphNode to each
    // If the length of vertices equals 1, add both to the other's edges
    // * Push the new GraphNode to the Graph vertices
    // Return the Graph Node (Vertex)
    const newVertex = new GraphNode({ value, edges }); // Create a new instace of Graph node and pass it the provided value and edges

    this.vertices.push(newVertex); // Push the new GraphNode to the Graph vertices
    if (this.vertices.length === 2) { // If the length of vertices equals 1, add both to the other's edges
      this.addEdge(this.vertices[0], this.vertices[1]);
    } else if (this.vertices.length > 2 && edges !== []) {
      edges.forEach((edge) => {
        this.addEdge(edge, newVertex);
      });
    }
    return newVertex;
  }
  // // Checks all the vertices of the graph for the target value
  // // Returns true or false

  contains(value) {
    let flag = false;
    this.vertices.forEach((vertex) => {
      if (value === vertex.value) {
        // console.log(vertex.value);
        // console.log(value);
        flag = true;
      }
    });
    return flag;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    this.vertices.forEach((vertex) => {
      if (vertex.value === value) {
        vertex.edges.forEach((edge) => {
          this.removeEdge(vertex, edge);
        });
        if (this.vertices.indexOf(vertex) !== -1) {
          this.vertices.splice(this.vertices.indexOf(vertex), 1);
        }
        return;
      }
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const vertex = this; // To Satisfy the Linter only!
    return (toVertex.edges.includes(fromVertex) && fromVertex.edges.includes(toVertex));
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      if (!toVertex.edges.includes(fromVertex)) {
        toVertex.pushToEdges(fromVertex);
      }
      if (!fromVertex.edges.includes(toVertex)) {
        fromVertex.pushToEdges(toVertex);
      }
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) return; // Default Case: If there is no edge to remove!
    fromVertex.edges.splice(fromVertex.edges.indexOf(toVertex), 1); // Delete Edge in Fron To Direction.
    toVertex.edges.splice(toVertex.edges.indexOf(fromVertex), 1); // Delete Edge in To From Direction.
    // Remove Edgeless Nodes in From Direction
    if (fromVertex.edges.length === 0) this.vertices.splice(this.vertices.indexOf(fromVertex), 1);
    // Remove Edgeless Nodes in To Direction
    if (toVertex.edges.length === 0) this.vertices.splice(this.vertices.indexOf(toVertex), 1);
  }
}

module.exports = Graph;
