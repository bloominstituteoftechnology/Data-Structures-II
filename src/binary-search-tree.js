// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
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
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === searchValue) return true;
    } return false;
  }
  depthFirstForEach(cb) {
    return this.storage.forEach(i => cb(i));
  }
}

module.exports = BinarySearchTree;
