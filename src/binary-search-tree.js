// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree { // BST is invoked with a given argument, e.g. `const x - new BinarySearcTree(y);`
  constructor(parameter) { // <-- parameter is the function PARAMETER
    this.value = parameter;
    this.left = null;
    this.right = null;
    // this.anArray = [parameter];
  }
  // `insert(value)` inserts the new value at the correct location in the tree.
  insert(something) {
    // this.anArray.push(something);
    const node = new BinarySearchTree(something);
    // FIRST SEARCH FOR VALUES LESS THAN (OR EQUAL TO INITIAL VALUE)
    if (something <= this.value) {
      if (!this.left) this.left = node; // check if there's already a less than in left
      else this.left.insert(something); // recursive placement
    // THEN SEARCH FOR VALUES GREATER THAN SEARCH TERM
    } else if (something > this.value) {
      if (!this.right) this.right = node; // check if there's already a greater than in right
      else this.right.insert(something); // recursive placement
    }
  }
  // `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  contains(searchTerm) {
    // IF EQUAL TO INITIAL VALUE - true!
    if (searchTerm === this.value) { // <--- BASE CASE
      return true;
    // FIRST SEARCH FOR VALUES LESS THAN SEARCH TERM
    } else if (searchTerm < this.value && this.left !== null) { // if searchTerm LESS THAN currnet/this.value AND this.left isn't null
      return this.left.contains(searchTerm); // <--- recursive search
    } else if (searchTerm < this.value && this.left === null) { // <--- BASE CASE
      return false;
    // THEN SEARCH FOR VALUES GREATER THAN SEARCH TERM
    } else if (searchTerm > this.value && this.right !== null) { // if searchTerm GREATER THAN currnet/this.value AND this.right isn't null
      return this.right.contains(searchTerm); // <--- recursive search
    } else if (searchTerm > this.value && this.right === null) { // <--- BASE CASE
      return false;
    }
  }
  // `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
  depthFirstForEach() {
    return this;
  }
}

// // TEST SUITE
// // class BinarySearchTree
// const binTest = new BinarySearchTree(555); // 'abc' is the ARGUMENT we pass in to the function.
// console.log('const binTest = new BinarySearchTree(555).');
// console.log(`1. binTest is a instance of class BinarySearchTree: ${binTest}.`);
// console.log('2. binTest is:', binTest);
// console.log(`3. binTest is: ${binTest}.`); // <--- WHY THE PRINT DIFF????????????????????????
// console.log(`4. const binTest = new BinarySearchTree(555) gave us a binTest.value of: ${binTest.value}.\n`);
//
// // insert()
// console.log('insert()');
// console.log(`1. Is binTest.insert a function? ${binTest.insert instanceof Function}.`);
// console.log(`2. The method binTest.insert() returns: ${binTest.insert()} - it just changes the STATE of itself.`);
// console.log(`3. The method binTest.insert(1234) returns: ${binTest.insert(111)} - it just changes the STATE of itself.\n`);
// binTest.insert(222);
// binTest.insert(1000);
//
// // contains()
// console.log('contains()');
// console.log(`1. The method binTest.contains() results in a ${binTest.contains()}`);
// console.log('2. Q: Is 111  in binTest? A:', binTest.contains(111));  // <--- true
// console.log('2. Q: Is 222  in binTest? A:', binTest.contains(222));  // <--- true
// console.log('2. Q: Is 555  in binTest? A:', binTest.contains(555));  // <--- true
// console.log('2. Q: Is 1000 in binTest? A:', binTest.contains(1000)); // <--- true
// console.log('3. Q: Is 2000 in binTest? A:', binTest.contains(2000)); // <--- false
//
// // // depthFirstForEach()
// console.log('depthFirstForEach()');
// console.log('1. The method binTest.depthFirstForEach() results in:', binTest.depthFirstForEach());

module.exports = BinarySearchTree;
