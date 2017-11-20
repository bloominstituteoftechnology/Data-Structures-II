/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode {
  constructor({ value, edges }) {
    this._value = value; //underscore '_' means those values are private, you could get they only through these methods.
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
      // if the length of vertices equals 1, add both to the other's edges
      // push the new GraphNode to the Graph vertices
      // return the new GraphNode
    const newNode = new GraphNode({ value, edges });
    
    newNode.edges.forEach(vertex => {
      this.addEdge(newNode, vertex);
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
    // loop over the Graph's vertices
    // check each vertex's value and compare it to the provide value
    // return true if found, and return false otherwise
    this.vertices.forEach(node => {
      if (node.value === value) return true;
    });
    return false;
  // From teacher Ivan
    //return this.vertices.some(vertex => vertex.value === value);
  }

  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // pass value to contains method and return if contains returns false
    // temporarily store GraphNode intended for removal
    // filter out the GraphNode containing the provided value from the Graph's vertices
    // iterate over all the Graph's vertices and pass the GraphNode intended for removal and each vertex into removeEdge
    if (!contains(value)) return;
    this.vertices = this.vertices.filter(vertex => vertex.value !== value);
    this.vertices = this.vertices.filter(vertex => {
      const filteredEdges = vertex.edges.filter(edge => edge.value !== value);
      vertex.edges = filteredEdges
      return vertex.edges !== undefined;
    });   
  }

  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    // if fromVertex includes toVertex and toVertex includes fromVertex, return true
    // otherwise return false;
    return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex));
  }

  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    // if fromVertex's edges does not include toVertex, push toVertex to fromVertex's edges
    // if toVertex's edges does not include fromVertex, push fromVertex to toVertex's edges
    if (!fromVertex.edges.includes(toVertex)) fromVertex.pushToEdges(toVertex);
    if (!toVertex.edges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
  }

  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    // pass vertices to checkIfEdgeExits method and return if it returns false
    // Loop over fromVertex's edges array and remove toVertex from it if it is found
    // if fromVertex's edge array is empty, remove fromVertex from Graph's vertices
    // Loop over toVertex's edges array and remove fromVertex from it if it is found
    // if toVertex's edge array is empty, remove toVertex from Graph's vertices
    fromVertex.edges = fromVertex.edges.filter(vertex => vertex.value !== toVertex.value);
    toVertex.edges = toVertex.edges.filter(vertex => vertex.value !== fromVertex.value);
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value); 
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value); 
  }
}

module.exports = Graph;

