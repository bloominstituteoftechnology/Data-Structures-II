// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (this.left === null && this.value < value) {
      return false;
    } else if (value < this.value && this.right !== null) {
      return this.right.contains(value);
    } else if (value < this.value && this.right === null) {
      return false;
    }
    return value;
  }
  insert() {
      const node = new BinarySearchTree(value);
      if (value <= this.value) {
        if (!this.left) {
          this.left = node;
        } else  {
          this.left.insert(value);
        } else if (value > this.value) {
           if (!this.right) {
          this.right = node;
        }
        } else {
          this.right.insert(value);
        }
      }
      }
      depthFirstForEach(cb) {
        this.value = cb(this.value);
        if(this.right) {
            this.right.depthFirstForEach(cb);
        }
        if(this.left) {
        this.left.depthFirstForEach(cb);
}
} 
BFS (cb) {
  this.value = cb(this.value); 
  while (this.value.length) { 
    if (this.node.left) {
      this.value.enque(this.node.left);
    } else if (this.node.right) {
      this.value.enque(this.node.right);
    }
  }
  return cb(this.value);
}

module.exports = BinarySearchTree;
