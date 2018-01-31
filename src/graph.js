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
    const node = new GraphNode({ value, edges });
    if (edges.length) {
      node.pushToEdges(...edges);
    }
    this.vertices.push(node);

    if (this.vertices.length === 2) {
      this.vertices[0].pushToEdges(node.value)
      this.vertices[1].pushToEdges(this.vertices[0].value)
    }
  }

  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    return this.vertices.some(v => v.value === value);
  }

  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // pulled off `removed` in case we wanted to go through the graph and remove all references to the removed vertex later
    const [removed, index] = this.vertices.reduce((acc, v, idx) => {
      if (v.value === value) return [v.value, idx]
      return acc
    }, [])

    return this.vertices.splice(index)
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

const myGraph = new Graph()
myGraph.addVertex('guido')
myGraph.addVertex('bianca')
myGraph.addVertex('grizzly', ['guido', 'bianca'])

console.log(myGraph)

module.exports = Graph;

