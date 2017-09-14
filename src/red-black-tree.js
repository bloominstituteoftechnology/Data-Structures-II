class Node {
  constructor({ parent, value = null, isBlack = false }) {
    this.value = value;
    this.black = isBlack;
    this.left = null;
    this.right = null;
    if (!this.isNullNode) {
      this.left = new Node();
      this.right = new Node();
    } else {
      this.black = true;
    }
    this.parent = parent;
  }
  set value(value) {
    if (value !== null && this.value === null) {
      this.val = value;
      this.left = new Node();
      this.right = new Node();
    }
    return this.value;
  }
  set isBlack(isBlack) {
    if (this.isNullNode) {
      return true;
    }
    this.black = isBlack;
    return this.isBlack;
  }
  set isRed(isRed) {
    if (this.isNullNode) {
      return false;
    }
    this.black = !isRed;
    return this.isRed;
  }
  get value() {
    return this.val;
  }
  get grandParent() {
    if (this.hasGrandParent()) {
      return this.parent.parent;
    }
  }
  get uncle() {
    if (this.hasGrandParent()) {
      const gp = this.grandParent;
      if (gp.left === this) {
        return gp.right;
      }
      return gp.left;
    }
  }
  get brother() {
    if (this.parent.left === this) {
      return this.parent.right;
    }
    return this.parent.left;
  }
  get isRoot() {
    return this.parent === undefined;
  }
  get isNullNode() {
    return this.value === null;
  }
  get isBlack() {
    if (this.isNullNode) {
      return true;
    }
    return this.black;
  }
  get isRed() {
    if (this.isNullNode) {
      return false;
    }
    return !this.black;
  }
  hasParent() {
    return !this.isRoot;
  }
  hasGrandParent() {
    if (this.isRoot) {
      return false;
    }
    return this.parent.parent !== undefined;
  }
  solveConflicts() {

  }
  rotateLeft() {

  }
  rotateRight() {

  }
  flipColor() {
    this.grandParent.isRed = true;
    this.grandParent.left.isBlack = true;
    this.grandParent.right.isBlack = true;
    this.grandParent.solveConflicts();
  }
}

class RedBlackTree {
  constructor(value) {
    this.root = new Node({ value, isBlack: true });
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
    current.value = value;
    current.isRed = true;
    current.solveConflicts();
    return this.size();
  }
  contains(value) {
    let found = false;
    const exitPhrase = 'exitfromloop';
    this.eachBFS((nodeValue) => {
      if (value === nodeValue) {
        found = true;
        return exitPhrase;
      }
    }, exitPhrase);
    return found;
  }
  eachDFS(cb, exitPhrase) {

  }
  eachBFS(cb, exitPhrase) {

  }
  get size() {

  }
}
