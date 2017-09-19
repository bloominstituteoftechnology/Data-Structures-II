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
    const newNode = new GraphNode({ value, edges: [] });
    const newLength = this.vertices.push(newNode);

    // If a second one is added, connect them
    if (this.vertices.length === 2) {
      this.addEdge(newNode, this.vertices[0]);
    }

    if (edges.length >= 1) {
      edges.forEach((connection, i) => {
        this.addEdge(newNode, connection);
      });
    }

    return newNode;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    let found = 0;
    this.vertices.forEach(((node) => {
      if (node.value === value) found++;
    }));
    return (found > 0);
  }
  // Get a copy of the node with the specified value
  getNode(value = null) {
    if (value === null) return undefined;

    let nodeFound;
    this.vertices.forEach((node, i) => {
      if (node.value === value) nodeFound = node;
    });

    return nodeFound;
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    let count = 0;
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === value) {
        count++;
        this.vertices.splice(i, 1);
      }
    }
    return (count > 0);
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    let from = null;
    let to = null;

    // Iterate over vertices
    this.vertices.forEach((node, i) => {
      if (node.value === fromVertex.value) from = { node, i };
      if (node.value === toVertex.value) to = { node, i };
    });

    // IF they are both found
    if (from !== null && to !== null) {
      // Get to and from edges
      const toEdges = to.node.edges;
      const fromEdges = from.node.edges;

      // is there an index of the value
      if (fromEdges.indexOf(to.node.value) === -1) {
        return false;
      }
      if (toEdges.indexOf(from.node.value) === -1) {
        return false;
      }
      return true;
    }
    return false;
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    // Return false if any argument is not defined
    if (fromVertex === undefined || toVertex === undefined) {
      return false;
    }

    // get the value of from
    const from = fromVertex.value || fromVertex;
    const to = toVertex.value || toVertex;

    // If it doesn't exists, return false
    if (!this.contains(from) || !this.contains(to)) {
      return false;
    }

    // Check if the vertecise connect to one-another
    if (this.checkIfEdgeExists(fromVertex, toVertex)) return true;

    // Index holders
    let fromVertexIndex = null;
    let toVertexIndex = null;

    // It should be safe to find these since it didn't return false before
    this.vertices.forEach((node, i) => {
      if (node.value === from) fromVertexIndex = i;
      if (node.value === to) toVertexIndex = i;
    });

    this.vertices[fromVertexIndex].pushToEdges(toVertex.value);
    this.vertices[toVertexIndex].pushToEdges(fromVertex.value);
    return true;
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    // If the vertices can't be found
    if (!this.contains(fromVertex.value) || !this.contains(toVertex.value)) return false;

    // Does an edge exist before we continue
    if (!this.checkIfEdgeExists(fromVertex, toVertex)) return false;

    // Know edge exists, remove in loop process.
    for (let i = this.vertices.length - 1; i >= 0; i--) {
      const node = this.vertices[i];

      if (node.value === fromVertex.value) {
        if (node.numberOfEdges === 1) {
          this.vertices.splice(i, 1);
        } else {
          node.edges.splice(node.edges.indexOf(toVertex.value), 1);
        }
      }

      if (node.value === toVertex.value) {
        console.log('To Node: ', node);
        if (node.numberOfEdges === 1) {
          this.vertices.splice(i, 1);
        } else {
          node.edges.splice(node.edges.indexOf(fromVertex.value), 1);
        }
      }
    }
  }
}

module.exports = Graph;
