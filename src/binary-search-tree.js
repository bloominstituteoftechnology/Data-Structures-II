// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(stuff) {
    let node = new BinarySearchTree(stuff);
	  
    function recurse(bst) {
      if (stuff < this.value && this.left === null) {
        console.log('1st conditional');
        this.left = node;
      }
      if (stuff < this.value) {
        recurse(this.left);
        console.log('2nd conditional');
      }
      if (stuff > this.value && this.right === null) {
        this.right = node;
        console.log('3rd conditional');
      }
      if (stuff > this.value) {
        recurse(this.right)
        console.log('4th conditional');
      }
    }
    recurse(this);
  }
  contains(value) {}
  depthFirstForEach() {}
  // pass each node to cb
}

module.exports = BinarySearchTree;
