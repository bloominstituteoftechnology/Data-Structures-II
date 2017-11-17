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
    // Create a new instance of GraphNode and pass it the provided value and edges
    // For all provided edges, iterate over and add new GraphNode to each vertex using this.addEdge
    // If the length of vertices equals 1, add both to the other's edges
    // Push the new GraphNode to the Graph vertices
    // Return the new GraphNode(Vertex)
    const newNode = new GraphNode({ value, edges });
    edges.forEach((thisEdge) => {
      this.addEdge(newNode, thisEdge);
    });
    if (this.vertices.length === 1) {
      this.addEdge(newNode, this.vertices[0]);
    }
    this.vertices.push(newNode);
    return newNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    // Loop over the Graph's vertices
    // Check each vertex's value and compare it to the provide value
    // Return true if found, and return false otherwise
    for (let i = 0; i <= this.vertices.length - 1; i++) {
      if (this.vertices[i].value === value) return true;
    }
    return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // Pass value to contains method and return if contains returns false
    // Temporarily store GraphNode intended for removal
    // Filter out the GraphNode containing the provided value from the Graph's vertices
    // Iterate over all of the Graph's vertices and pass the GraphNode intended for removal and each vertex into removeEdge
    if (!this.contains(value)) return;
    let removalNode;
    for (let i = 0; i <= this.vertices.length - 1; i++) {
      if (this.vertices[i].value === value) {
        removalNode = this.vertices[i];
        break;
      }
    }
    this.vertices = this.vertices.filter(target => target !== removalNode);
    this.vertices.forEach((edge) => {
      this.removeEdge(removalNode, edge);
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    // If fromVertex's edges includes toVertex and toVertex's edges includes fromVertex, return true
    // Otherwise return false;
    if (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex)) {
      return true;
    }
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    // If fromVertex's edges does not include toVertex, push toVertex to fromVertex's edges
    if (fromVertex.edges.indexOf(toVertex) === -1) {
      fromVertex.pushToEdges(toVertex);
    }
    // If toVertex's edges does not include fromVertex, push fromVertex to toVertex's edges
    if (toVertex.edges.indexOf(fromVertex) === -1) {
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    // Pass vertices to checkIfEdgeExits method and return false if it return
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      return false;
    }
    // Loop over fromVertex's edges array and remove toVertex from it if it is found
    // If fromVertex's edges array is empty, remove fromVertex from Graph's vertices
    fromVertex.edges = fromVertex.edges.filter(target => target !== toVertex);
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    // Loop over toVertex's edges array and remove fromVertex from it if it is found
    // If toVertex's edges array is empty, remove toVertex from Graph's vertices
    toVertex.edges = toVertex.edges.filter(target => target !== fromVertex);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }
}

module.exports = Graph;
