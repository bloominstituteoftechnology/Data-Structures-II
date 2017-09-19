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
    const newGN = new GraphNode({ value, edges });
    
    if (this.vertices.length === 0) {
      this.vertices.push(newGN);
    } else if (this.vertices.length === 1) {
      this.vertices.push(newGN);
      this.vertices[0].pushToEdges(newGN);
      newGN.pushToEdges(this.vertices[0]);
    } else {
      this.vertices.push(newGN);
      newGN.edges.forEach((node) => {
        node.pushToEdges(newGN);
      });
      // newGN.edges().forEach((ngeNode) => {
      //   this.vertices.forEach((vNode) => {
      //     if (ngeNode.value() === vNode.value()) {
      //       vNode.pushToEdges(newGN);
      //     }
      //   });
      // });
      // this.vertices.forEach((vert) => {
      //   newGN.edges().forEach((newGNConnection) => {
      //     if (newGNConnection === vert.value()) {
      //     vert.pushToEdges(newGN); 
      //     }
      //   });
      //   vert.edges().forEach((connectionNode) => {
      //     if (connectionNode.value() === newGN.value() && The connection node doesn't already exist) {
      //       newGN.pushToEdges(connectionNode);
      //     }
      //   })
      // });
    }
    return newGN;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let found = false;
    this.vertices.forEach((node) => {
      if (node.value === value) {
        found = true;
      }
    });
    return found;
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
    
    let checkEdge = false;
    fromEdges.forEach((efNode) => {
      toEdges.forEach((etNode) => {
        if (efNode === toVertex && etNode === fromVertex) {
          checkEdge = true;
          return;
        }
      });
    });
    return checkEdge;
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
const pineapple = graph.addVertex('pineapple');
const banana = graph.addVertex('banana');
const mango = graph.addVertex('mango', [pineapple]);
graph.removeEdge(mango, pineapple);
console.log(graph);
console.log(graph.checkIfEdgeExists(pineapple, mango));

module.exports = Graph;

