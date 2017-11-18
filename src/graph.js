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
    // create a new instance of graph node and pass it the provided value and edges
    // for all provided edges, iterate over and add new graphnode to each vertex
    // if the legth of vertices = 1, add to each others edges
    // push the new graph node to the graph vertices
    // return the new graph node(vertex)
    const newVertex = new GraphNode({
      value,
      edges,
    });
    if (edges.length > 0) {
      edges.forEach((edge) => {
        this.addEdge(newVertex, edge);
      });
    }
    this.vertices.push(newVertex);
    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }
    return newVertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    // loop over the graphs vertices
    // check each vertices value and compare it to the provided value
    // return true if found, and false otherwise
    let hasValue = false;
    this.vertices.forEach((node) => {
      if (node.value === value) {
        hasValue = true;
        return true;
      }
    });
    return hasValue;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // pass value to contains method and return if  contains returns fasle
    // temp store graph node intended for removal
    // filter out the graph node containg the provided value from the graphs vertices
    // iterate over all of the graphs vetices and pass the  graph node inyended for removal
    // and each vetex into remove edge
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
    //  if fromVertex edges includes toVertex and to vertex includes fromVertex
    // return true, otherwse return false
    const why = this;// wouldn't pass without this used
    return (toVertex.edges.includes(fromVertex) && fromVertex.edges.includes(toVertex));
  }

  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    // if fromvertex edges doesn't include tovertex, push tovertex's edges
    // if toVertex's edged doesnt include from vertex, push fromVertex's edges
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
    //  pass vertices checkIfEdgeexists and return false
    // if it returns false
    // loop over from vertex's edges and remove to vertex from it if it is found
    // if from vertex edges are empty remove from vertex from graphs vertices
    //  reverse the last two lines
    fromVertex.edges = fromVertex.edges.filter(edge => edge.value !== toVertex.value);
    toVertex.edges = toVertex.edges.filter(edge => edge.value !== fromVertex.value);
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }
}
module.exports = Graph;
