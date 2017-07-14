// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Should have the methods: `insert`, `contains`, and `depthFirstForEach`
  insert() {
    return this;
  }
  contains() {
    return this;
  }
  depthFirstForEach() {
    return this;
  }
}

const binTest = new BinarySearchTree;
console.log(binTest);
console.log(binTest.insert());
console.log(binTest.contains());
console.log(binTest.depthFirstForEach());


module.exports = BinarySearchTree;
