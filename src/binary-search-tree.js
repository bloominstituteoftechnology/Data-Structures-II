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
console.log(`binTest is a instance of class BinarySearchTree: ${binTest}`);
console.log("The method binTest.insert() results in: ", binTest.insert());
console.log("The method binTest.contains() results in:", binTest.contains());
console.log("The method binTest.depthFirstForEach() results in:", binTest.depthFirstForEach());


module.exports = BinarySearchTree;
