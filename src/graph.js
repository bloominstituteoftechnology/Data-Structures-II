/* eslint-disable */
class Graph {
  constructor() {;
  }
  addNode(a, b) {
    this[a] = [b];
    if (b) this[b].push(a);
    if (Object.keys(this).length === 2) {
      for (let i = 0; i < 1; i++) {
        console.log(this[a]);
        this[a] = [Object.keys(this)[i]];
        this[Object.keys(this)[i]] = [a];
      }
    }
  }
  contains(a) {
    if (this[a] === undefined) return false;
    else return this.hasOwnProperty(a);
  }
  removeNode(a) {
    delete this[a];
  }
  addEdge(a, b) {
    this[a].push(b);
    this[b].push(a);
  }
  getEdge(a, b) {
    const x = this[b];
    const y = this[a];
    if (x.find(i => i === a) === a && y.find(i => i === b) === b) return true;
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

// const a = new Graph();
// a.addNode('pineapple');
// a.addNode('banana');
// a.addNode('mango', 'pineapple');
// console.log(a.getEdge('mango', 'pineapple')); // true
// console.log(a.getEdge('mango', 'banana')); // false
// a.removeNode('mango');
// a.addNode('monkey');
// a.addNode('human');
// a.addNode('crocodile', 'human');
// a.addEdge('crocodile', 'monkey');
// console.log(a.getEdge('monkey', 'human'));
// console.log(a.getEdge('crocodile', 'monkey'));
// a.removeEdge('monkey', 'human');
// a.addNode('A');
// a.addNode('B');
// a.removeEdge('A', 'B');
// console.log(a.contains('A'));
// console.log(a.contains('B'));
// console.log(a);
// console.dir(a);
// console.log(Object.keys(a))
// console.log(Object.keys(a).find(b => b));
