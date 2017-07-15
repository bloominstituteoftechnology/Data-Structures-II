// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(parameter) { // <-- parameter is the function PARAMETER
    this.value = parameter;
    this.left = null;
    this.right = null;
    // this.anArray = [parameter];
  }
  insert(something) {
    // this.anArray.push(something);
    const node = new BinarySearchTree(something);
    if (something <= this.value) {
      if (!this.left) this.left = node;
      else this.left.insert(something);
    } else if (something > this.value) {
      if (!this.left) this.right = node;
      else this.right.insert(something);
    }
  }
  contains() {
    return this;
  }
  depthFirstForEach() {
    return this;
  }
}

// class BinarySearchTree
const binTest = new BinarySearchTree(555); // 'abc' is the ARGUMENT we pass in to the function.
console.log(`1. binTest is a instance of class BinarySearchTree: ${binTest}`);
console.log('2.', binTest);

// insert()
console.log(`3. ${binTest.insert instanceof Function}`);
console.log(`4. The method binTest.insert() results in: ${binTest.insert()}`);
console.log(`5. The method binTest.insert(1234) results in: ${binTest.insert(1234)}`);
// what's in our Binary Tree Seach object?
console.log('6. Invoking binTest.this results in:', binTest.contains());


// console.log('The method binTest.contains() results in:', binTest.contains());
// console.log('The method binTest.depthFirstForEach() results in:', binTest.depthFirstForEach());


module.exports = BinarySearchTree;
