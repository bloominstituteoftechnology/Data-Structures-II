/* eslint-disable */
/**
 * #### Graphs

  * Should have methods named `addNode`, `contains`, `removeNode`, `addEdge`, `getEdge`, and
  * `removeEdge`
  * `addNode(newNode, toNode)` should add a new item to the graph.  If `toNode` is given then
  * the new node should share an edge with an existing node `toNode`.
  * `contains(value)` should return true if the graph contains the given value.
  * `removeNode(value)` should remove the specified value from the graph.
  * `addEdge(fromNode, toNode)` should add an edge between the two specified nodes.
  * `getEdge(fromNode, toNode)` should return `true` if an edge exists between the two specified
  * graph nodes.
  * `removeEdge(fromNode, toNode)` should remove the edge between the two specified nodes.
 */

class Node {
  constructor() {
    this.edges = [];
  }
  get hasEdges() {
    return this.edges.length !== 0;
  }
  hasEdge(node) {
    return this.edges.indexOf(node) !== -1;
  }
  newEdge(node) {
    this.edges.push(node);
  }
  removeEdge(node) {
    this.edges.splice(this.edges.indexOf(node), 1);
  }
}
class Graph {
  constructor(value) {
    this.graph = {};
  }
  get keys() {
    return Object.keys(this.graph);
  }
  get size() {
    return this.keys.length;
  }
  contains(node) {
    return this.graph[node] ? true : false;
  }
  addEdge(node1, node2) {
    this.graph[node1].newEdge(node2);
    this.graph[node2].newEdge(node1);
  }
  addNode(node1, node2) {
    this.graph[node1] = new Node();
    if (node2 && !this.graph[node2]) this.graph[node2] = new Node();
    if (this.size === 2 && !node2) this.addEdge(node1, this.keys[0]);
    if (node2) this.addEdge(node1, node2);
  }
  noEdgeDesctruct(node) {
    if (!this.graph[node].hasEdges) delete this.graph[node];
  }
  removeNode(node) {
    const edges = this.graph[node].edges;
    edges.forEach(edge => {
      this.graph[edge].removeEdge(node)
      this.noEdgeDesctruct[edge];
    });
    delete this.graph[node];
  }
  getEdge(node1, node2) {
    return this.graph[node1].hasEdge(node2) || this.graph[node2].hasEdge(node1);
  }
  removeEdge(node1, node2) {
    const nodes = [node1, node2];
    nodes.forEach((node, i) => {
      this.graph[node].removeEdge(i > 0 ? nodes[0] : nodes[1]);
      this.noEdgeDesctruct(node);
    });
  }
}

module.exports = Graph;
