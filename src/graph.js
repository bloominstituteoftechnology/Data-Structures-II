/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */

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
  // Optionally accepts an array of other GraphNodes` for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    // const newVert = new GraphNode({ value, edges });
    // for (let i = 0; i < edges.length; i++) {
    //   this.addEdge(newVert, edges[i]);
    const newNode = new GraphNode({ value, edges });

    newNode.edges.forEach((edge) => {
      this.addEdge(newNode, edge);
    });

    if (this.vertices.length === 1) {
      this.addEdge(newNode, this.vertices[0]);
    }

    this.vertices.push(newNode);
    return newNode;

    // If the length of vertices equals 1, add both to the other's edges
    // Push the new GraphNode to the Graph vertices
    // Return the new GraphNode(Vertex)
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    // this.vertices.forEach(vertex => {
    //   if (vertex.value === value) return true;
    // });
    // return false;
    // }
    return this.vertices.some(vertex => vertex.value === value);
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    // for (let i = 0; i < this.value.length; i++) {
    //   if (value === this.value[i]) {
    //     this.value[i] = null;
    //   }
    // }
    // this.checkIfEdgeExists(fromVertex, toVertex);
    // if (this.contains(value)) return;
    // const forRemoval = this.vertices.filter(vertex => vertex.value === value)[0];

    const filteredVertices = [];
    let vertexforDeletion;
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        vertexforDeletion = this.vertices[i];
      } else {
        filteredVertices.push(this.vertices[i]);
      }
    }
    this.vertices = filteredVertices;
    vertexforDeletion.edges.forEach((vertex) => {
      this.removeEdge(vertexforDeletion, vertex);
    });
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex));
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
    // If fromVertex's edges does not include toVertex, push toVertex to fromVertex's edges
    // If toVertex's edges does not include fromVertex, push fromVertex to toVertex's edges
    // let fromVertContains = false;
    // for (let i = 0; i < toVertex.edges.length; i++) {
    //   if (fromVertex === toVertex.edges[i]) {
    //     fromVertContains = true;
    //   } 
    // }
    // if (!fromVertContains) {
    //   toVertex.pushToEdges(toVertex);
    // }
    // let toVertContains = false;
    // for (let j = 0; j < fromVertex.edges.length; j++) {
    //   if (toVertex === fromVertex.edges[j]) {
    //     toVertContains = true;
    //   }
    // }
    // if (!toVertContains) {
    //   fromVertex.pushToEdges(toVertex);
    // }
    if (!fromVertex.edges.includes(toVertex)) fromVertex.pushToEdges(toVertex);
    if (!toVertex.edges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
  }
  // // Removes the edge between the two given vertices if an edge already exists between them
  // // After removing the edge, neither vertex should be referencing the other
  // // If a vertex would be left without any edges as a result of calling this function, those
  // // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) return false;
    fromVertex.edges = fromVertex.edges.filter(vertex => vertex.value !== toVertex.value); // return boolean, any vertex that passed test then add array
    toVertex.edges = toVertex.edges.filter(vertex => vertex.value !== fromVertex.value); // return boolean, any vertex that passed test then add array
    if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
    if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  }
}

module.exports = Graph;
