// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    const search = (node) => {
      if (data < node.value && node.left) search(node.left);
      else if (data < node.value) node.left = new BinarySearchTree(data);
      else if (data > node.value && node.right) search(node.right);
      else if (data > node.value) node.right = new BinarySearchTree(data);
    };
    search(this);
  }
  contains(data) {
    let flag = false;
    const search = (node) => {
      if (data === node.value) flag = true;
      else if (data < node.value && node.left) search(node.left);
      else if (data > node.value && node.right) search(node.right);
    };
    search(this);
    return flag;
  }
  depthFirstForEach(cb) {
    const result = [];
    const search = (node) => {
      result.push(node.value);
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    };
    search(this);
    result.forEach(x => cb(x));
  }
  breadthFirstForEach(cb) {
    const result = [];
    const temp = [];
    if (this !== null) temp.push(this);
    while (temp.length > 0) {
      const node = temp.shift();
      result.push(node.value);
      if (node.left !== null) temp.push(node.left);
      if (node.right !== null) temp.push(node.right);
    }
    result.forEach(x => cb(x));
  }
}

module.exports = BinarySearchTree;

/*
const tree = new BinarySearchTree(0);
tree.insert(3);
tree.insert(4);
tree.insert(10);
tree.insert(9);
tree.insert(11);
console.log(tree.depthFirstForEach())
console.log(tree.breadthFirstForEach());
console.log(tree.contains(92))
console.log(tree.right.right.right)
console.dir(tree);

Tree
└── 3
    └── 4
        └── 10
            ├── 11
            └── 9
*/
