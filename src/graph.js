/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
// USE  THE GETTERS AND SETTERS TO MODIFY CONSTRUCTORS WITH UNDERSCORES //ASSIGN WITH '=' DONT PASS ()
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
  /*     pseudo code   ///
   * const neWNode = new GraphNode({ value: value, edges: edges})
   * create a new instance of GraphNode and pass it the provided value and edges
   * For all provided edges, iterate over and add new GraphNode to each vertex
   * if the length of the vertices equals 1, both to the other's edges
   * push the new GraphNode to Graph vertices
   * return the new GraphNode(Vertex)
   */
  addVertex(value, edges = []) {
    const newNode = new GraphNode({ value, edges });
    newNode.edges = edges;
    newNode[value] = value;
    this.vertices.push(newNode);
    return this.vertices;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  // check vertex's value and compare it to the provide value
  // return true if found, and return false otherewise
  contains(value) {
    Graph.vertices.forEach((vertex) => {
      return !!this.vertices[value];
    });
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  // pass value to contains method and return if contains returns false
  // temporarily store GraphNode intended for removal
  // filter out the graphNode containing the provided value from the Graph's vertices
  // iterate over all of the Graph's vertices and pass the GraphNode intended for removal and each vertex into removeEdge
  removeVertex(value) {
    const checkNode = new GraphNode();

    if (this.vertices.contains(value)) {
      delete checkNode.values[value];
      delete checkNode.edges[this.vertices[value][1]];     
      delete this.vertices[value];
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  // if fromVertex includes toVertex and toVertex includes from Verteex return true otherwise false
  checkIfEdgeExists(fromVertex, toVertex) {
    const checkNode = new GraphNode();
    let key;
    for (key in checkNode.edges) {
      const first = checkNode.edges[key][0] === this.vertices[fromVertex] && checkNode.edges[key][1] === this.vertices[toVertex];
      const second = checkNode.edges[key][1] === this.vertices[fromVertex] && checkNode.edges[key][0] === this.vertices[toVertex];
      if (first || second) return true;
    }
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  // if fromvertex's edges does not include toVertex, push toVertex to from Vertex's edges
  // if to vertex's edges does not include fromVertex, push fromVertex to toVertex's edges.
  addEdge(fromVertex, toVertex) {
    const checkNode = new GraphNode();
    if (checkNode.checkIfEdgeExists(fromVertex, toVertex)) {
      checkNode.numberOfEdges.get(fromVertex).pushToEdges(toVertex);
    }  
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  // Pass Vertices to checkIfEdgeExists method and return 
  // loop over fromVertesx' edges array and remove toVertex from it if it is found
  // if fromVertex is empty, remove fromVertex from Graph's vertices
  // Loop Over Tovertex's edges array and remove fromVertex from it if it is found
  // if toVertex's edges array is empty, remove toVertex from Graph's vertices.
  removeEdge(fromVertex, toVertex) {

  }
}

module.exports = Graph;

