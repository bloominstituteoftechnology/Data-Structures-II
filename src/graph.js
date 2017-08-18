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
class Graph {
  constructor() {
    this.graph = {
      nodes: {},
      edges: []
    }
  }

  nodesToEdge(node1, node2) {
    const nodes = [node1, node2].sort();
    return `${nodes[0]}<>${nodes[1]}`;
  }

  nodesFromEdge(edge) {
    const node1 = edge.slice(0, edge.indexOf('<'));
    const node2 = edge.slice(edge.indexOf('>') + 1, edge.length);
    return [node1, node2];
  }

  addNode(newNode, toNode) {
    if (Object.keys(this.graph.nodes).length === 1 && !toNode) toNode = Object.keys(this.graph.nodes)[0];
    if (toNode && this.graph.nodes[toNode]) {
      this.graph.nodes[toNode].push(newNode);
      this.graph.nodes[newNode] = [toNode];
      this.graph.edges.push(this.nodesToEdge(newNode, toNode));
    }
    if (toNode && !this.graph.nodes[toNode]) {
      this.graph.nodes[toNode] = [newNode];
      this.graph.nodes[newNode] = [toNode];
      this.graph.edges.push(this.nodesToEdge(newNode, toNode));
    }
    if (!toNode) {
      this.graph.nodes[newNode] = [];
    }
  }

  contains(node) {
    if (this.graph.nodes[node] !== undefined) return true;
    else return false;
  }

  removeNode(node) {
    const nodeEdges = this.graph.nodes[node]
    nodeEdges.forEach((edge) => {
      const edges = this.graph.nodes[edge];
      const gEdges = this.graph.edges;
      gEdges.splice(gEdges.indexOf(this.nodesToEdge(node, edge)), 1);
      edges.splice(edges.indexOf(node), 1);
      if (edges.length === 0) delete this.graph.nodes[edge];
    });
    delete this.graph.nodes[node];
  }

  addEdge(fromNode, toNode) {
    this.graph.nodes[fromNode].push(toNode);
    this.graph.nodes[toNode].push(fromNode);
    this.graph.edges.push(this.nodesToEdge(fromNode, toNode));
  }

  getEdge(fromNode, toNode) {
    const edge = this.nodesToEdge(fromNode, toNode);
    return this.graph.edges.find(anEdge => anEdge === edge) ? true : false;
  }

  removeEdge(fromNode, toNode) {
    const fromEdges = this.graph.nodes[fromNode];
    const toEdges = this.graph.nodes[toNode];
    fromEdges.splice(fromEdges.indexOf(toNode), 1);
    toEdges.splice(toEdges.indexOf(fromNode), 1);
    const edges = this.graph.edges;
    edges.splice(this.nodesToEdge(fromNode, toNode), 1);
    if (fromEdges.length === 0) delete this.graph.nodes[fromNode];
    if (toEdges.length === 0) delete this.graph.nodes[toNode];
  }
}

module.exports = Graph;