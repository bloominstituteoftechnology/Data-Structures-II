// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(x) {
    const node = new BinarySearchTree(x);
    const place = (n, level) => {
      if (n.value < level.value) {
        if (!level.left) level.left = n;
        else place(n, level.left);
      } else {
        if (!level.right) level.right = n;
        else place(n, level.right);
      }
    };
    place(node, this);
  }
  contains() {}
  depthFirstForEach() {}
}

module.exports = BinarySearchTree;
