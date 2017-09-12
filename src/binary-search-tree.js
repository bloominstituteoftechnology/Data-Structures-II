// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value === null || value === undefined) {
      return false;
    }
    if (value > this.value) {
      if (this.right !== null) {
        return this.right.insert(value);
      }
      this.right = new BinarySearchTree(value);
      return true;
    }
    if (value < this.value) {
      if (this.left !== null) {
        return this.left.insert(value);
      }
      this.left = new BinarySearchTree(value);
      return true;
    }
    return false;
  }
  contains(value) {
    if (value === null || value === undefined) {
      return false;
    }
    let current;
    if (value === this.value) {
      return true;
    }
    if (value > this.value) {
      current = this.right;
    } else if (value < this.value) {
      current = this.left;
    } else {
      return false;
    }
    if (current === null || current === undefined) {
      return false;
    }
    return current.contains(value);
  }
  depthFirstForEach(cb) {
    cb(this.value);
    const searchBranch = (branch) => {
      if (branch !== null && branch !== undefined) {
        branch.depthFirstForEach(cb);
      }
    };
    searchBranch(this.left);
    searchBranch(this.right);
  }
  breadthFirstForEach(cb) {
    const queue = [];
    const addToQueue = (branch) => {
      if (branch !== null && branch !== undefined) {
        queue.push(branch);
      }
    };
    let current;
    do {
      current = queue.shift() || this;
      cb(current.value);
      addToQueue(current.left);
      addToQueue(current.right);
    } while (queue.length > 0);
  }
  get size() {
    if (this.left === this.right === null || this.left === this.right === undefined) {
      return 0;
    }
    // count becomes 0 with first value from search
    let count = -1;
    this.depthFirstForEach(() => count++);
    return count;
  }
}

module.exports = BinarySearchTree;
