/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
const Queue = require('./queue-helper');

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
    const newNode = new GraphNode ({
				value,
				edges,
	 });
     
		 // ensure that the edges that this node is connected to also 
    //  connect back to this new node we're creating
		if (edges.length > 0) {
			edges.forEach((edge) => {
					this.addEdge(newNode, edge);
			});
	  }
		 this.vertices.push(newNode);
		// we need to check if there are exactly two nodes in the graph and 
	 //	 they do not have a connection between them
    if (this.vertices.length == 2) {
			this.addEdge(this.vertices[0], this.vertices[1]);
  }
		return newNode;
	}
  
	// Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
      let hasValue = false;
			this.vertices.forEach((node) => {
					if (node.value === value) {
	 				  hasValue = true;
						return;
  }
	});
			return hasValue;
}
  // Checks the graph to see if a GraphNode with the specified value exists in the graph 
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    const index = this.vertices.findIndex((node) => {
				return node.value === value;
	 });
		if (index === -1) 
			return;
		const removedVertex = this.vertices.splice(index, 1)[0];
		   removedVertex.edges.forEach((node) => {
		   this.removeEdge(removedVertex, node);
  });
}
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use 
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
     return fromVertex.edges.some(edge => edge === toVertex) && 
			 toVertex.edges.some(edge => edge === fromVertex);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other 
  addEdge(fromVertex, toVertex) {
     if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
			 fromVertex.pushToEdges(toVertex);
		   toVertex.pushToEdges(fromVertex);
			 fromVertex.edges = fromVertex.edges.filter((edge, index) =>
			fromVertex.edges.indexOf(edge) === index);
			 toVertex.edges = toVertex.edges.filter((edge, index) => toVertex.edges.indexOf(edge) === index);
     }
	}
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    if (this.checkIfEdgeExists(fromVertex, toVertex)) {
			fromVertex.edges = fromVertex.edges.filter(edge => edge.value !== toVertex.value);
			toVertex.edges = toVertex.edges.filter(edge => edge.value !== fromVertex.value); 
			if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
			if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
		}
	}
   depthFirstSearch(value, startVertex = this.vertices[0], alreadyTried = [], returnAlreadyTried = false) {  
    if (startVertex.value === value) {  
      if (returnAlreadyTried) return [startVertex, alreadyTried]; // when we first call depthFirstSearch we 
			                        // just want a value, otherwise we want to pass back the result & the alreadyTried array
			                       // with the return value to make it act like a global variable 
      return startVertex;   // returns the Vertex that was found
    }
    alreadyTried.push(startVertex);  // have not found the target so the Vertex is added to the alreadyTried array
    const nextVertices = startVertex.edges.filter(otherVertex => !alreadyTried.includes(otherVertex)); // gets an array of the next vertices
		                                                // that are not in the alreadyTried array
    let result = null;    // result will return null if there is no result               
    nextVertices.forEach((vertex) => {
      const rawResult = this.depthFirstSearch(value, vertex, alreadyTried, true);
      result = rawResult[0];      // if we have not found the target result will still be null otherwise result will hold the vertex we want
      alreadyTried = rawResult[1]; // the second element in the rawResult array gets assigned to alreadyTried
      if (result !== null) return;  // if we found the target, there is no need to keep search and break out of the forEach
    });
    if (returnAlreadyTried) return [result, alreadyTried];  // if returnAlreadyTried is true return both result and alreadyTried
    return result;    // if returnAlreadyTried is false, return result
  }

  breadthFirstSearch(value, startVertex) {
    const queue = new Queue();
    const alreadyTried = [];
    queue.enqueue(startVertex);
    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      if (vertex.value === value) return vertex;  // if value has been found return the vertex
      alreadyTried.push(vertex);    // value has not already been found
      vertex.edges.forEach((nextVertex) => {
        if (!alreadyTried.includes(nextVertex)) queue.enqueue(nextVertex);  // add all the connecting vertices that have not already been tried to the queue
      });
    }
    return null;    // return null if we have not found the target
  }
}

module.exports = Graph;

