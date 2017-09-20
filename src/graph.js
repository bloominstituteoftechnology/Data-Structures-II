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
    // create a new vertex with the inputs given, value and edges
    const newVertex = new GraphNode({
      value,
      edges,
    });
    // if the new vertex has edges, implement them to the existing nodes
    if (edges.length > 0) {
      edges.forEach((edge) => {
        this.addEdge(newVertex, edge);
      });
    }
    // add newVertex to graphs vertices
    this.vertices.push(newVertex);

    // handle edge case that the newVertex is the 2nd vertex added
    // which to automatically connect them
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }

    // return new polished vertrex to graph :D
    return newVertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let hasValue = false;
    this.vertices.forEach((node) => {
      if (node.value === value) {
        hasValue = true;
        return;
      }
    });
    // return false;
    return hasValue;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  removeVertex(value) {
    // find the index of the proposed node to remove
    const index = this.vertices.findIndex(node => node.value === value);
    // check if node youre looking for exists
    if (index === -1) return;

    // now remove the edge references of all the other nodes to the removed node
    // create a reference to removed node
    const removedVertex = this.vertices.splice(index, 1)[0];
    // get all the connecting nodes and remove edge
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
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    const toVertexEdgeIndex = fromEdges.findIndex(node => node.value === toVertex.value);
    const fromVertexEdgeIndex = toEdges.findIndex(node => node.value === fromVertex.value);
    return (toVertexEdgeIndex > -1) && (fromVertexEdgeIndex > -1);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  removeEdge(fromVertex, toVertex) {
    // check if there is an edge between two vertexs
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      // get reference of edges of each vertex
      const fromEdges = fromVertex.edges;
      const toEdges = toVertex.edges;
      // filter out / remove the edge connecting the two vertexes by reassigning vertexInQuestion.edges
      fromVertex.edges = fromEdges.filter(edge => edge.value !== toVertex.value);
      toVertex.edges = toEdges.filter(edge => edge.value !== fromVertex.value);
      // if removed edge isolated the vertex, remove the vertex
      if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
      if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
    }
  }
}

module.exports = Graph;

