// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target){
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right){
      if (this.right.contains(target)){
        return true;
      }
    }
    return false;
  }

  depthFirstLog(cb) {
    cb (this.value);
    if (this.right){
      this.right.depthFirstLog(cb);
    }
    if (this.left){
      this.left.depthFirstLog(cb);
    }
  }
}

module.exports = BinarySearchTree;
