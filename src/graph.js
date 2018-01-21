/* eslint-disable */
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

    addVertex(value, edges = []) {
        const newVertex = new GraphNode({
            value,
            edges
        });
        if (edges.length > 0) {
            edges.forEach(edge => {
                this.addEdge(newVertex, edge);
            });
        }
        this.vertices.push(newVertex);
        if (this.vertices.length === 2) {
            this.addEdge(this.vertices[0], this.vertices[1]);
        }
        return newVertex;
    }

    contains(value) {
        let hasValue = false;
        this.vertices.forEach(node => {
            if (node.value === value) {
                hasValue = true;
                return;
            }
        });
        return hasValue;
    }

    removeVertex(value) {
        const index = this.vertices.findIndex(node => {
            return node.value === value;
        });
        if (index === -1) return;
        const removedVertex = this.vertices.splice(index, 1)[0];
        removedVertex.edges.forEach(node => {
            this.removeEdge(removedVertex, node);
        });
    }

    checkIfEdgeExists(fromVertex, toVertex) {
       return (toVertex.edges.includes(fromVertex) && fromVertex.edges.includes(toVertex));
    }

    addEdge(fromVertex, toVertex) {
        if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
            fromVertex.pushToEdges(toVertex);
            toVertex.pushToEdges(fromVertex);
        }
    }

    removeEdge(fromVertex, toVertex) {
        if (this.checkIfEdgeExists(fromVertex, toVertex)) {
            fromVertex.edges = fromVertex.edges.filter(edge => edge.value !== toVertex.value);
            toVertex.edges = toVertex.edges.filter(edge => edge.value !== fromVertex.value);
            if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
            if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
        }
    }
}

module.exports = Graph;
