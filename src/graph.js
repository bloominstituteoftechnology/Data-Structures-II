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
    let ngn = new GraphNode({ value, edges });
    this.vertices.push(ngn);
    if (this.vertices.length === 2) {
      this.vertices[0].pushToEdges(ngn);
      this.vertices[1].pushToEdges(this.vertices[0]);
    }
    console.log('vertices are now', this.vertices);
    return ngn;
  }

  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) return true;
    }
    return false;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    let removed;
    if (!this.contains(value)) return;
    if (this.contains(value)) {
      for (let i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i].value === value) {
          removed = this.vertices[i];
          let newVertices = this.vertices.slice(i, 1);
          console.log(newVertices);
          console.log(removed.edges);
          if (removed.edges) {
            for (edge in removed.edges) {
              removeEdge(removed, edge);
          }
        }
      }
    }
  }
}
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
      if (fromVertex.edges.indexOf(toVertex) === -1 || toVertex.edges.indexOf(fromVertex) === -1) {
        console.log('check edge', fromVertex, toVertex, false);
        return false;
      }
      console.log('check edge', fromVertex, toVertex, true);
      return true;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      console.log('edge does not exist');
      fromVertex.pushToEdges(toVertex);
      toVertex.pushToEdges(fromVertex);
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    let index = fromVertex.edges.indexOf(toVertex);
  }
}

// let graph = new Graph();
// graph.addVertex('Hello World!');
// graph.addVertex('hi there');
// // graph.removeVertex('hi there');
// const pineapple = graph.addVertex('pineapple');
// const banana = graph.addVertex('banana');
// const mango = graph.addVertex('mango', [pineapple]);
// const monkey = graph.addVertex('monkey');
// const human = graph.addVertex('human');
// const crocodile = graph.addVertex('crocodile', [human]);
// graph.addEdge(crocodile, monkey);
// graph.removeEdge(monkey, human);
// graph.checkIfEdgeExists(crocodile, monkey);
// const A = graph.addVertex('A');
// const b = graph.addVertex('b');
// graph.removeEdge(A, b);

module.exports = Graph;
