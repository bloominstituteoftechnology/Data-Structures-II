// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
// Completed this with help from classmate.

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.storage = [value];
  }

  insert(newValue) {
    this.storage.push(newValue);
    const node = new BinarySearchTree(newValue);
    if (newValue <= this.value) {
      if (!this.left) this.left = node;
      else this.left.insert(newValue);
    } else if (newValue > this.value) {
      if (!this.right) this.right = node;
      else this.right.insert(newValue);
    }
  }

  contains(searchValue) {
    if (searchValue === this.value) return true;
    if (searchValue < this.value) {
      if (this.left) return this.left.contains(searchValue);
    } else if (searchValue > this.value) {
      if (this.right) return this.right.contains(searchValue);
      return false;
    }
  }

  depthFirstForEach(cb) {
    return this.storage.forEach((i) => {
      cb(i);
    });
  }
  }

const greenTree = new BinarySearchTree(3);
greenTree.insert(5);
greenTree.insert(1);
greenTree.insert(6);
greenTree.insert(8);
greenTree.insert(1);
greenTree.insert(1);


module.exports = BinarySearchTree;
