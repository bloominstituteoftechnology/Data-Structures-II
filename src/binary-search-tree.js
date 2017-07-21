// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
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
    let collection = [this];
    for (let i = 0; i < collection.length; i++) {
      const node = collection[i];
      if (node.value === value) return true;
      if (node.left) collection = collection.concat(node.left);
      if (node.right) collection = collection.concat(node.right);
    }
    return false;
  }
  depthFirstForEach() {}
}

module.exports = BinarySearchTree;
