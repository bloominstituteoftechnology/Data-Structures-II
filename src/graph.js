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
  /* eslint-disable */
  addVertex(value, edges = []) {
    const newNode = new GraphNode({value, edges});
    this.vertices.push(newNode);
    if (this.vertices.length === 2 ) {
      this.addEdge(this.vertices[0],this.vertices[1]);
    } 
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let bool = false;
    this.vertices.forEach((edge) => {
      if (value === edge.value) {
        bool = true;
      }
    });
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    if (this.contains(value)) {

    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let fvertex_edges = [];
    let tvertex_edges = [];
    for(let i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].value === fromVertex) {
          fvertex_edges = this.vertices[i].edges;
        }
        if (this.vertices[i].value === toVertex ) {
          tvertex_edges = this.vertices[i].edges;
        }
        
        return false;
    }    
    if(fvertex_edges.includes(toVertex) && tvertex_edges.includes(fromVertex)) {
      return true;
    }

  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if(this.checkIfEdgeExists(fromVertex,toVertex)){
      return true;
    };
    for(let i = 0; i < this.vertices.length; i++) {
      if(this.vertices[i].value === fromVertex) {
        this.vertices[i].pushToEdges(toVertex);
      }
      if (this.vertices[i].value === toVertex) {
        this.vertices[i].pushToEdges(fromVertex);
      }
    }
    
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    this.vertices.push(100);
  }
}

module.exports = Graph;

