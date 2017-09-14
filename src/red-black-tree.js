class Node {
  constructor({parent, value = null, isBlack = true}) {
    this.value = value;
    this._black = true;
    this.left = null
    this.right = null;
    this.parent = parent
  }
  get grandParent() {
    return this.parent.parent;
  }
  get aunt() {
    return this.parent.left;
  }
  get uncle() {
    return this.parent.right;
  }
  isBlack(isBlack = undefined) {
    if (this.isRoot()) {
      return true;
    }
    if (typeof isBlack === 'boolean') {
      this._black = isBlack;
    }
    return this._black;
  }
  isRed(isRed = undefined) {
    if (this.isRoot()) {
      return false;
    }
    if (typeof isRed === 'boolean') {
      this._black = !isRed;
    }
    return !this._black;
  }
  isRoot() {
    return this.parent === undefined;
  }
}

class RedBlackTree {
  constructor(value) {
    this.root = new Node({value});
    this.root.left = new Node();
    this.root.right = new Node();
  }
  add(value) {
    let current = this.root;
    while (current.value !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
    current.isRed(true);
    current.value = value;
    if (current.parent.isRed()) {
      flipColors(current.parent);
    }
    return this.size();
  }
  flipColors(node) {
    node.isBlack(!node.isBlack());
    if (node.left.value !== null) {
      node.left.isBlack(!node.left.isBlack());
    }
    if (node.right.value !== null) {
      node.right.isBlack(!node.right.isBlack());
    }
  }
  rotateLeft(node) {

  }
  rotateRight(node) {

  }
  contains(value) {

  }
  eachDFS(cb) {

  }
  eachBFS(cb) {

  }
  get size() {

  }
}