// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
<<<<<<< HEAD
  insert(value) {
    const node = new BinarySearchTree(value);
    const plant = (tree, row) => {
      if (tree.value < row.value) {
        if (!row.left) row.left = tree;
        else plant(tree, row.left);
      } else if (!row.right) row.right = tree;
      else plant(tree, row.right);
    };
    plant(node, this);
  }
  contains(value) {
    let harvest = [this];
    for (let i = 0; i < harvest.length; i++) {
      const tree = harvest[i];
      if (tree.value === value) return true;
      if (tree.left) harvest = harvest.concat(tree.left);
      if (tree.right) harvest = harvest.concat(tree.right);
    }
    return false;
  }
  depthFirstForEach(cb) {
    const delve = (tree) => {
      cb.call(tree, tree.value);
      if (tree.left) delve(tree.left);
      if (tree.right) delve(tree.right);
    };
    delve(this);
=======

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
>>>>>>> c25622d73d1c0105cff8f94e1017fb6f837f82bb
  }
}

module.exports = BinarySearchTree;
