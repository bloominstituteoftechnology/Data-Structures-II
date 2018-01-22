/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
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
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (!fromVertex.edges.includes(toVertex)) fromVertex.edges.push(toVertex);
    if (!toVertex.edges.includes(fromVertex)) toVertex.edges.push(fromVertex);
  }

  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically 
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    const newVertex = new GraphNode({ value, edges });

    edges.forEach((edgeToAdd) => {
      this.addEdge(newVertex, edgeToAdd);
    });

    if (this.vertices.length === 1) this.addEdge(newVertex, this.vertices[0]);

    this.vertices.push(newVertex);
    return newVertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let vertexIsPresent = false;
    this.vertices.forEach(vertex => {
      if (vertex.value === value) return vertexIsPresent = true;
    });
    return vertexIsPresent;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    if (this.contains(value)) {
    const indexOfVertToKill = this.vertices.indexOf(this.vertices.find((vertex) => {
      if (vertex.value === value) return vertex;
    }));
    const vertexToKill = this.vertices[indexOfVertToKill];
    this.vertices.splice(indexOfVertToKill, 1);

    const verticesWithEdgesToKill = vertexToKill.edges;
    verticesWithEdgesToKill.forEach(vertexWithEdgeToKill => {
      vertexWithEdgeToKill.edges.splice(vertexWithEdgeToKill.edges.indexOf(vertexToKill), 1);
      }); 
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let edgeExists = true;
    if (!fromVertex.edges.includes(toVertex)) edgeExists = false;
    if (!toVertex.edges.includes(fromVertex)) edgeExists = false;
    return edgeExists;
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
  }
}

module.exports = Graph;

