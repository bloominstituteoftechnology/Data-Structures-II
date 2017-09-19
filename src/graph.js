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
    const newNode = new GraphNode({ value, edges });
    edges.forEach((edge) => {
      edge.pushToEdges(newNode);
    });
    this.vertices.push(newNode);
    if (this.vertices.length === 2) {
      this.vertices[0].pushToEdges(this.vertices[1]);
      this.vertices[1].pushToEdges(this.vertices[0]);
    }
    return newNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let doesContain = false;
    this.vertices.forEach((vert) => {
      if (vert.value === value) {
        doesContain = true;
      }
    });
    return doesContain;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        this.vertices.splice(i, 1);
      }
    }
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    let match1 = false; 
    let match2 = false;
    fromEdges.forEach((from) => {
      toEdges.forEach((to) => {
        if (fromVertex === to) {
          match1 = true;
        }
        if (toVertex === from) {
          match2 = true;
        }
      });
    });
    if (match1 && match2) {
      return true;
    }
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
      if (!toVertex.edges.includes(fromVertex)) {
        toVertex.pushToEdges(fromVertex);
      }
      if (!fromVertex.edges.includes(toVertex)) {
        fromVertex.pushToEdges(toVertex);
      }
    }
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    const fromEdges = fromVertex.edges;
    const toEdges = toVertex.edges;
    console.log(fromEdges);
    console.log(toEdges);
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
      for (let i = 0; i < fromEdges.length; i++) {
        if (fromEdges[i] === toVertex) {
          fromEdges.splice(i, 1);
          console.log(fromEdges);
        }
      }
      
      for (let j = 0; j < toEdges.length; j++) {
        if (toEdges[j] === fromVertex) {
          toEdges.splice(j, 1);
          console.log(toEdges);
        }
      }
      
      if (fromEdges.length === 0) {
        // console.log("removing1");
        this.removeVertex(fromVertex.value);
      }
  
      if (toEdges.length === 0) {
        // console.log("removing2");
        this.removeVertex(toVertex.value);
      }
    }
  }
}

const graph = new Graph();
graph.addVertex('Hello World!');
console.log(graph.contains('Hello World!'));

module.exports = Graph;

