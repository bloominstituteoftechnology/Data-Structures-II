
class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(value) {
    this.storage.unshift(value);
  }
  dequeue() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data > this.value && this.right === null) this.right = new BinarySearchTree(data);
    else if (data < this.value && this.left === null) this.left = new BinarySearchTree(data); else if (data > this.value) {
      this.right.insert(data);
    } else {
      this.left.insert(data);
    }
  }
  contains(x) {
    // console.log(this);
    let flag = false;
    if (x === this.value) flag = true;
    else if (x > this.value && this.right !== null) flag = this.right.contains(x);
    else if (x < this.value && this.left !== null) flag = this.left.contains(x);
    // console.log(flag);
    return flag;
  }
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
  breadthFirstForEach(cb) {
    const q = new Queue();
    q.enqueue(this);
    let current;
    while (q.size !== 0) {
      current = q.dequeue();
      if (current.left) q.enqueue(current.left);
      if (current.right) q.enqueue(current.right);
      cb(current.value);
    }
  }
}

module.exports = BinarySearchTree;

// const tree = new BinarySearchTree(5);
// const arr = [];
// const foo = x => { arr.push(x) }
// tree.insert(3)
// tree.insert(4)
// tree.insert(10)
// tree.insert(9)
// tree.insert(11)
// tree.breadthFirstForEach(foo);
// console.log(arr)
