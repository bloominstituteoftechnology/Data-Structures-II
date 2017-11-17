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
        // Create a new instace of Graph node and pass it the provided value and edges
        // For all provided edges, iterate over and add the new GraphNode to each
        // If the length of vertices equals 1, add both to the other's edges
        // Push the new GraphNode to the Graph vertices
        // Return the Graph Node (Vertex)
        const newVertex = new GraphNode({ value, edges });
        this.vertices.push(newVertex);

        if (this.vertices.length === 1) {

        }
        return newVertex;
    }
    // Checks all the vertices of the graph for the target value
    // Returns true or false
    contains(value) {
        // loop over the Graph's vertices
        // Check each vertex value and compare it to the passed value
        // Return true if found, otherwise return false.
        let flag = false;
        this.vertices.forEach((vertex) => {
            if (value === vertex.value) {
                // console.log(vertex.value);
                // console.log(value);
                flag = true;
            }
        });
        return flag;
    }
    // Checks the graph to see if a GraphNode with the specified value exists in the graph 
    // and removes the vertex if it is found
    // This function should also handle the removing of all edge references for the removed vertex
    removeVertex(value) {
        // Pass value to contains method, if it returns false:
        //  + Loop over the Graph and find the Vertex that contains the passed value
        //  + Iterate over the Graph's vertices and pass the NodeToBeRemoved and each vertex into the removeEdge method

    }
    // Checks the two input vertices to see if each one references the other in their respective edges array
    // Both vertices must reference each other for the edge to be considered valid
    // If only one vertex references the other but not vice versa, should not return true
    // Note: You'll need to store references to each vertex's array of edges so that you can use 
    // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
    checkIfEdgeExists(fromVertex, toVertex) {
        // if fromVertex includes toVertex and toVertex includes fromVertex, return true
        // Otherwise return false.

    }
    // Adds an edge between the two given vertices if no edge already exists between them
    // Again, an edge means both vertices reference the other 
    addEdge(fromVertex, toVertex) {
        //if fromVertex edges does not Include toVertex
        //    //Push toVertex to fromVertex edges.
        //if toVertex edges does not Include fromVertex
        //    //Push fromVertex to toVertex edges.
    }
    // Removes the edge between the two given vertices if an edge already exists between them
    // After removing the edge, neither vertex should be referencing the other
    // If a vertex would be left without any edges as a result of calling this function, those
    // vertices should be removed as well
    removeEdge(fromVertex, toVertex) {
        // Pass vertices to checkIfEdgeExists method, and if it returns false: stop
        // Pass vertices to checkIfEdgeExists method, and if it returns true:
        //  + Loop over fromVertex's edges and remove toVertex if found;
        //  //  + if fromVertex's edges array is empty remove fromVertex from Graph.
        //  + Loop over toVertex's edges and remove fromVertex if found;
        //  //  + if toVertex's edges array is empty remove toVertex from Graph.
    }
}

module.exports = Graph;

graph = new Graph();

console.log('should store values as nodes on the graph')
graph.addVertex('Hello World!');
console.log(graph)
console.log(graph.contains('Hello World!'));


//     it('should properly remove nodes', () => {
//         graph.addVertex('hi there');
//         graph.removeVertex('hi there');
//         expect(graph.contains('hi there')).toBe(false);
//     });

//     it('should automatically create an edge between two nodes if there is only two nodes in the graph', () => {
//         const pineapple = graph.addVertex('pineapple');
//         const banana = graph.addVertex('banana');
//         expect(graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
//     });

//     it('should create edges between two nodes', () => {
//         const pineapple = graph.addVertex('pineapple');
//         const banana = graph.addVertex('banana');
//         const mango = graph.addVertex('mango', [pineapple]);
//         expect(graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
//         expect(graph.checkIfEdgeExists(mango, banana)).toBe(false);
//         expect(graph.checkIfEdgeExists(mango, pineapple)).toBe(true);
//     });

//     it('should be able to remove edges connecting two nodes', () => {
//         const monkey = graph.addVertex('monkey');
//         const human = graph.addVertex('human');
//         const crocodile = graph.addVertex('crocodile', [human]);
//         graph.addEdge(crocodile, monkey);
//         graph.removeEdge(monkey, human);
//         expect(graph.checkIfEdgeExists(monkey, human)).toBe(false);
//     });

//     it('should remove nodes without any edges', () => {
//         const A = graph.addVertex('A');
//         const b = graph.addVertex('b');
//         expect(graph.checkIfEdgeExists(A, b)).toBe(true);
//         graph.removeEdge(A, b);
//         expect(graph.checkIfEdgeExists(A, b)).toBe(false);
//         expect(graph.contains('A') || graph.contains('b')).toBe(false);
//     });
// });