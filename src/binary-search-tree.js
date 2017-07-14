// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(parameter) { // <-- parameter is the function PARAMETER
    this.value = parameter;
    this.left  = null;
    this.right = null;
    // this.arr   = parameter;
  }
  insert(val) {
    // should insert values at the correct location in the tree
    const node = new BinarySearchTree(val);
    // if ((this.value === undefined) && (this.left > val)) {
    if (val <= this.value) return this.left = val;
    return this.right = val;
  }
  contains() {
    return this;
  }
  depthFirstForEach() {
    return this;
  }
}

const binTest = new BinarySearchTree(5550); // 'abc' is the ARGUMENT we pass in to the function.
// const binTest = new BinarySearchTree;
// console.log(`binTest is a instance of class BinarySearchTree: ${binTest}`);
console.log(binTest);
// insert()
// console.log(typeof binTest.insert()); // <-- function
// console.log("The method binTest.insert() results in: ", binTest.insert());
// console.log("The method binTest.insert() results in: ", binTest.insert('Anshuman'));
console.log(binTest.insert(72000));
console.log(binTest);
console.log(binTest.insert(1));
console.log(binTest);

// console.log("The method binTest.contains() results in:", binTest.contains());
// console.log("The method binTest.depthFirstForEach() results in:", binTest.depthFirstForEach());


module.exports = BinarySearchTree;
