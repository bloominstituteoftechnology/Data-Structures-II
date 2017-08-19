/* eslint-disable */
class Graph {
  constructor() {}
  addNode(a, b) {
    this[a] = [b];
    if (b) this[b].push(a);
    if (Object.keys(this).length === 2) {
      for (let i = 0; i < 1; i++) {
        this[a] = [Object.keys(this)[i]];
        this[Object.keys(this)[i]] = [a];
      }
    }
  }
  contains(a) {
    if (this.hasOwnProperty(a)) return true;
    return false;
  }
  removeNode(a) {
    delete this[a];
  }
  addEdge(a, b) {
    this[a].push(b);
    this[b].push(a);
  }
  getEdge(a, b) {
    const x = this[b],
      y = this[a];
    if (x.includes(a) && y.includes(b)) return true;
    return false;
  }
  removeEdge(a, b) {
    this[a] = this[a].filter(i => i != b);
    this[b] = this[b].filter(i => i != a);
    if (this[a][0] === undefined) this.removeNode(a);
    if (this[b][0] === undefined) this.removeNode(b);
  }
}

module.exports = Graph;

// const graph = new Graph();
// graph.addNode('monkey');
// graph.addNode('human');
// graph.addNode('crocodile', 'human');
// graph.addEdge('crocodile', 'monkey');
// console.log(graph.contains('crocodile'))
// console.log(graph.getEdge('crocodile', 'monkey'));
// console.dir(graph);
//
//     Graph {
//       monkey: [ 'human', 'crocodile' ],
//       human: [ 'monkey', 'crocodile' ],
//       crocodile: [ 'human', 'monkey' ] }
//
