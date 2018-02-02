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

  get value() {  // give me current value
    return this._value;
  }

  get edges() {  // give me current edge
    return this._edges;
  }

  get numberOfEdges() {  // give me how many edges i have
    return this._edges.length;
  }

  set edges(x) {  // sets an edge to parameter
    this._edges = x;
  }

  pushToEdges(y) {  // push parameter into edges array
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
    // need new GraphNode
    // add to array of vertices (this.vertices.push(node))
    // if(only two nodes ---> conect via an edge(set edges? push to edges?))
    // accept array of other nodes, connects new vertex, Returns
    const graphNode = new GraphNode({value, edges});
    // this.vertices.push(graphNode.value) is what i need to do;

    // i might need edge values... const edgeValues = [].
    const edgeValues = edges.map(edge => edge.value);  // edgeValues is an array that changes each edge and spits out the corresponding edge value.

    // add nodeValue to edges (node.pushToEdges)
    if (edges.length !== null) {   // if it's defined/has shit in there
      edges.forEach(edgeValues => {   // ... run forEach on each edge value...
        graphNode.pushToEdges(edgeValues);   // on graphnode, call pushToEdges with those edge values...
      });
    }

    // now push shit
    this.vertices.push(graphNode);


    // if(this.vertices.length === 2) {
      // this.vertices[?].pushToEdges(graphNode.value)
    // }

  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {

  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {

  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {

  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {

  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {

  }
}

module.exports = Graph;
