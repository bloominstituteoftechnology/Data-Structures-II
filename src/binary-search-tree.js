// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(parameter) { // <-- parameter is the function PARAMETER
    this.value = parameter;
    this.left = null;
    this.right = null;
  }
  insert(val) {
    const node = new BinarySearchTree(val);
    if (val <= this.value) {
      if (!this.left) this.left = node;
      else this.left.insert(val);
    } else if (val > this.value) {
      if (!this.right) this.right = node;
      else this.right.insert(val);
    }
  }
  contains() {
    return this;
  }
  depthFirstForEach() {
    return this;
  }
}

// const binTest = new BinarySearchTree(5); // '5' is the ARGUMENT we pass in to the function.
// console.log(binTest);
// binTest.insert(2);
// console.log(binTest);
// binTest.insert(3);
// console.log(binTest);
// binTest.insert(7);
// console.log(binTest);
// binTest.insert(6);
// console.log(binTest);

module.exports = BinarySearchTree;
