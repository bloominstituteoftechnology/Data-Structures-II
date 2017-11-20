/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
/* eslint-disable class-methods-use-this */
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
    // Create a new instance of GraphNode and pass it the provided value and edges
    // For all provided edges, iterate over and add new GraphNode to each vertex
    // If the length of verticies equals 1, add both to the other's edges
    // Push the new GraphNode to the Graph vertices
    // Return the new GraphNode
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    // Loop over the Graph's vertices
    // Check each vertex's value and compare it to the provided value
    // Return true if found, and return false otherwise    
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // Pass value to contains method and return if contains returns false
    // Temporarily store GraphNode intended for removal
    // Filter out the GraphNode containing the provided value from the Graph's vertices
    // Iterate over all of the Graph's verticies and pass the GraphNode intended for removal and each vertex into removeEdge
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    // If fromVertex includes toVertex and toVertex includes from Vertex, return true
    // Otherwise, return false
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    // If fromVertex's edges does not include toVertex, push toVertex to fromVertex's edges
    // If toVertex's edges does not include fromVertex, push fromVertex to toVertex's edges
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    // Pass vertices to checkIfEdgeExists method and return false if not found
    // Loop over fromVertex's edges array and remove toVertex from it if it is found
    // If fromVertex's edges array is empty, remove fromVertex from Graph's vertices
    // Loop over toVertex's edges array and remove fromVertex to it if it is found
    // If toVertex's edges array is empty, remove toVertex from the Graph's vertices

    // Moises' Example:
    // Pass vertices to checkIfEdgeExists method, and if it returns false: stop
    // Pass vertices to checkIfEdgeExists method, and if it returns true:
    //  + Loop over fromVertex's edges and remove toVertex if found;
    //  //  + if fromVertex's edges array is empty remove fromVertex from Graph.
    //  + Loop over toVertex's edges and remove fromVertex if found;
    //  //  + if toVertex's edges array is empty remove toVertex from Graph.
  }
}

module.exports = Graph;
