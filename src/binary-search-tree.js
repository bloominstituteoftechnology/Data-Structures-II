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
  depthFirstForEach(cb) {
    this.value = cb(this.value);        // PASSES INITIAL VALUE TO CALLBACK FUNCTION
    // whatever the value, if it is true that there's a right value
    if (this.right) {
      this.right.depthFirstForEach(cb); // PASSES RIGHT VALUES TO CALLBACK FUNCTION
    }
    // whatever the value, if it is true that there's a left value
    if (this.left) {
      this.left.depthFirstForEach(cb);  // PASSES LEFT VALUES TO CALLBACK FUNCTION
    }
  }
}

// // TEST SUITE
// // class BinarySearchTree
// const binTest = new BinarySearchTree(555); // 'abc' is the ARGUMENT we pass in to the function.
// console.log('TESTING: const binTest = new BinarySearchTree(555).');
// console.log(`1. binTest is a instance of class BinarySearchTree: ${binTest}.`);
// console.log('2. binTest is:', binTest);
// console.log(`3. binTest is: ${binTest}.`); // <--- WHY THE PRINT DIFF????????????????????????
// console.log(`4. const binTest = new BinarySearchTree(555) gave us a binTest.value of: ${binTest.value}.\n`);
//
// // insert()
// console.log('TESTING: insert()');
// console.log(`1. Is binTest.insert a function? ${binTest.insert instanceof Function}.`);
// console.log(`2. The method binTest.insert() returns: ${binTest.insert()} - it just changes the STATE of itself, no return.`);
// console.log(`3. The method binTest.insert(1234) returns: ${binTest.insert(111)} - it just changes the STATE of itself, no return.\n`);
// binTest.insert(222);
// binTest.insert(1000);
//
// // contains()
// console.log('TESTING: contains()');
// console.log(`1. The method binTest.contains() results in a ${binTest.contains()}`);
// console.log('2. Q: Is 111  in binTest? A:', binTest.contains(111));  // <--- true
// console.log('3. Q: Is 222  in binTest? A:', binTest.contains(222));  // <--- true
// console.log('4. Q: Is 555  in binTest? A:', binTest.contains(555));  // <--- true
// console.log('5. Q: Is 1000 in binTest? A:', binTest.contains(1000)); // <--- true
// console.log('6. Q: Is 2000 in binTest? A:', binTest.contains(2000)); // <--- false
// console.log('7. binTest now contains:\n', binTest);
//
// // // depthFirstForEach()
// const foo = x => x * 2;
// let array = [];
// const bar = (value) => {
//   array.push(value); // <--- OT: push returns array.length
//   return value;      // <--- OT: this keeps the function from returning length from a one line implicit return w/push
// };
// console.log('\nTESTING: depthFirstForEach()');
// binTest.depthFirstForEach(bar);
// console.log(`1. binTest BEFORE Callback() invoked & it contains: ${array}\n`, binTest);
// console.log(`2. the callback function: ${foo}`);
// binTest.depthFirstForEach(foo);
// array = [];
// binTest.depthFirstForEach(bar);
// console.log(`3. binTest AFTER Callback() invoked & it contains: ${array}\n`, binTest);


module.exports = BinarySearchTree;
