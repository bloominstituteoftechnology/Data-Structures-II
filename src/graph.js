/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
 class GraphNode {
   constructor({ value, edges }) {
     this._value = value;
     this._edges = edges; // bi-directional friendships
   }

   get value() {
     return this._value;  // ._ convention to show they are private
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
     newNode.edges.forEach((vertex) => {
       this.addEdge(newNode, vertex);
     });
     if (this.vertices.length === 1) {
       this.addEdge(newNode, this.vertices[0]);
     }
     this.vertices.push(newNode);
     return newNode;
    // create a new instance of GraphNode and pass it to the provided value and edges
    // for all provided edges, iterate over and add new GraphNode to each vertex using this.addEdge
    // if the length of vertices equals 1, add both to each other's edges
    // push the new graphNode to the graph vertices
    // return the new graphnode(vertex)
   }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
   contains(value) {
    /* return this.vertices.forEach( vertex => {
      if (vertex.value === value ) return true;
    });
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value)
    } return false;
   } */
     return this.vertices.some(vertex => vertex.value === value);
    // loop over the graph's vertices
    // check each vertex's value and compare it to the provided value
    // return true if found, and return false otherwise 
   }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
   removeVertex(value) {
    // Pass value to contains method and return if contains returns false 
    // filter out the GraphNode containing the provided value from the Graph's vertices
    // iterate over all of the graph's vertices and pass the GraphNode intended for removal and each vertex into removeEdge
     if (!this.contains(value)) return;
     const forRemoval = this.vertices.filter(vertex => vertex.value === value)[0];
     /* 
     const filteredVertices = [];
     let forRemoval;
     for (let i = 0); i< this.vertices.length; i++) {
        if (this.vertices[i].value === value) {
          forRemoval = this.vertices[i];
        } else {
          filteredVertices.push(this.vertices[i]);
        }
     }
     this.vertices = filteredVertices;
     vertexForDeletion.edges.forEach( vertex => {
       this.removeEdge(forRemoval, vertex);
     });
   } */
   }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
   checkIfEdgeExists(fromVertex, toVertex) {
    // if fromVertex includes toVertex and toVertex includes from Vertex, return true
    // otherwise return false;
     return (fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex));
/* with a for loop 
   const that = this;
    let flag1 = false;
    for (let i = 0; i < toVertex.edges.length; i++) {
      if (fromVertex._value === toVertex.edges[i].value) {
        flag1 = true;
        break;
      }
    }
    let flag2 = false;
    for (let i = 0; i < fromVertex.edges.length; i++) {
      if (toVertex._value === fromVertex.edges[i].value) {
        flag2 = true;
        break;
      }
    }
    return flag1 && flag2; */
   }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
   addEdge(fromVertex, toVertex) {
     if (!fromVertex.edges.includes(toVertex)) fromVertex.pushToEdges(toVertex);
     if (!toVertex.edges.includes(fromVertex)) toVertex.pushToEdges(fromVertex);
      // if fromvertex;s edges does not include toVertex, push toVertex to fromVertex's edges
      // if toVertex's edges does not include fromVertex, push fromVertex to toVertex's edges
   }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
   removeEdge(fromVertex, toVertex) {
     if (!this.checkIfEdgeExists(fromVertex, toVertex)) return false;
     fromVertex.edges = fromVertex.filter(vertex => vertex.value !== toVertex.value);
     toVertex.edges = toVertex.edges.filter(vertex => vertex.value !== fromVertex.value);
     if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
     if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
  // Pass vertices to checkIfEdgeExists method and return false if it retur
  // Loop over fromVertex's edges array and remove toVertex from it if it's found
   // if fromVertex's edges array is empty, remove fromVertex from Graph's vertices
  // Loop over toVertex's edges array and remove fromVertex from it if it's found
  // if toVertex's edges array is empty, remove toVertex from Graph's vertices
   }
}

 module.exports = Graph; 

