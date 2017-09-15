class Node {
  constructor({parent, value = null, isBlack = false} = {}) {
    this.value = value;
    this.black = isBlack;
    this.leftChild = null;
    this.rightChild = null;
    // the code in the if lets me interact with null nodes as if they were real but I don't create an infinate chain of null nodes
    if (!this.isNullNode) {
      this.leftChild = new Node({parent: this});
      this.rightChild = new Node({parent: this});
    } else {
      this.black = true;
    }
    this.parent = parent;
  }
  set value(value) {
    if (value !== null && this.value === null) {
      this.v = value;
      this.leftChild = new Node({parent: this});
      this.rightChild = new Node({parent: this});
    }
    if (this.v === undefined) {
      this.v = value;
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
    return this.v;
  }
  get grandParent() {
    if (this.hasGrandParent()) {
      return this.parent.parent;
    }
  }
  get uncle() {
    if (this.hasGrandParent()) {
      const gp = this.grandParent;
      if (gp.leftChild === this.parent) {
        return gp.rightChild;
      }
      return gp.leftChild;
    }
  }
  get brother() {
    if (this.parent.leftChild === this) {
      return this.parent.rightChild;
    }
    return this.parent.leftChild;
  }
  get predecessor() {
    let current = this.leftChild;
    while (!current.isNullNode) {
      current = current.rightChild;
    }
    return current;
  }
  get successor() {
    let current = this.rightChild;
    while (!current.isNullNode) {
      current = current.leftChild;
    }
    return current;
  }
  get isRoot() {
    return this.parent === undefined;
  }
  get isNullNode() {
    return this.value === null;
  }
  get isLeaf() {
    return this.leftChild.isNullNode && this.rightChild.isNullNode;
  }
  get isLeftChild() {
    return this.parent.leftChild === this;
  }
  get isRightChild() {
    return this.parent.rightChild === this;
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
  move(toNode) {
    if (this.isNullNode || this.value < toNode.value) {
      return false;
    }
    let child;
    if (!this.isLeaf) {
      if (this.isLeftChild) { // successor
        this.rightChild.parent = this.parent;
        this.parent.leftChild = this.rightChild;
        child = this.rightChild;
      } else { // predecessor
        this.leftChild.parent = this.parent;
        this.parent.rightChild = this.leftChild;
        child = this.leftChild;
      }
    }
    this.parent = toNode.parent;
    this.leftChild = toNode.leftChild;
    this.rightChild = toNode.rightChild;
    if (toNode.isLeftChild) {
      this.parent.leftChild = this;
    } else {
      this.parent.rightChild = this;
    }
    this.isBlack = toNode.isBlack
    if (child instanceof Node) {
      child.solveConflicts();
    }
    return true;
  }
  solveConflicts() {
    if (this.isRoot) {
      this.isBlack = true;
    }
    if (this.isBlack) { // black shouldn't have errors if everything else worked how it's meant to
      return;
    }
    const flipColor = (node) => {
      node.isRed = true;
      node.leftChild.isBlack = true;
      node.rightChild.isBlack = true;
    };
    const rotateRight = () => {
      this.parent.leftChild = this.rightChild;
      this.rightChild.parent = this.parent;
      this.parent = this.grandParent;
      if (!this.isRoot) {
        if (this.parent.leftChild === this.leftChild.parent) {
          this.parent.leftChild = this;
        } else {
          this.parent.rightChild = this;
        }
      }
      this.rightChild.parent.parent = this;
      this.rightChild = this.rightChild.parent;
      flipColor(this);
    };
    const rotateLeft = () => {
      this.parent.rightChild = this.leftChild;
      this.leftChild.parent = this.parent;
      this.parent = this.grandParent;
      if (!this.isRoot) {
        if (this.parent.leftChild === this.leftChild.parent) {
          this.parent.leftChild = this;
        } else {
          this.parent.rightChild = this;
        }
      }
      this.leftChild.parent.parent = this;
      this.leftChild = this.leftChild.parent;
      rotateRight();
    };
    // find conflicts
    if (this.parent.isRed) {
      if (this.uncle.isRed) {
        flipColor(this.grandParent);
      } else if (this.isLeftChild) {
          rotateRight();
      } else {
        rotateLeft();
      }
      console.log(`${this.isBlack ? 'Black' : 'Red'}: ${this.value}`);
      this.solveConflicts();
      return;
    }
    if (this.leftChild.isRed) { // make sure everything was caught.
      console.log(`${this.isBlack ? '~Black' : '~Red'}: ${this.leftChild.value}`);
      this.leftChild.solveConflicts();
    }
    if (this.rightChild.isRed) { // make sure everything was caught.
      console.log(`${this.isBlack ? 'Black~' : 'Red~'}: ${this.rightChild.value}`);
      this.rightChild.solveConflicts();
    }
  }
}

class RedBlackTree {
  constructor(value) {
    this.root = new Node({ value, isBlack: true });
    this.s = 0;
    if (!this.root.isNullNode) {
      this.size++;
    }
  }
  getNode(value) {
    let current = this.root;
    while (current.value !== null) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else if (value === current.value) {
        return current;
      }
    }
    return current;
  }
  add(value) {
    const node = this.getNode(value);
    if (!node.isNullNode) { // didn't add support for duplicates. same as my binary tree
      return false;
    }
    node.value = value;
    node.isRed = true;
    node.solveConflicts();
    if (node.isRoot) {
      this.root = node;
    }
    console.log('Root: ' + this.root.value);
    return ++this.size;
  }
  remove(value) {
    const node = this.getNode(value);
    if (node.isNullNode) {
      return;
    }
    if (!node.isLeaf) {
      if (!node.successor.move(node)) {
        if (!node.predecessor.move(node)) {
          return;
        }
      }
    }
    --this.size;
    return node.value;
  }
  contains(value) {
    return !this.getNode(value).isNullNode;
  }
  eachDFS(cb) {
    const node = arguments[1] || this.root;
    if (!(node instanceof Node)) {
      return;
    }
    cb(node.value, node);
    const searchBranch = (branch) => {
      if (!branch.isNullNode) {
        this.depthFirstForEach(cb, branch);
      }
    };
    searchBranch(node.leftChild);
    searchBranch(node.rightChild);
  }
  eachBFS(cb) {
    const queue = [];
    const addToQueue = (branch) => {
      if (!branch.isNullNode) {
        queue.push(branch);
      }
    };
    let current;
    do {
      current = queue.shift() || this.root;
      cb(current.value, current);
      addToQueue(current.leftChild);
      addToQueue(current.rightChild);
    } while (queue.length > 0);
  }
  set size(length) {
    this.s = length;
    return this.s;
  }
  get size() {
    return this.s;
  }
}

const rbt = new RedBlackTree(5);
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
array.forEach(num => rbt.add(num));
console.log(rbt.size);
console.log(rbt.contains(9));
console.log(rbt.contains(10));
rbt.eachBFS((value, node) => {
  if (node.isBlack) {
    console.log(`Black: ${value}`);
  } else {
    console.log(`Red: ${value}`);
  }
});
/* correct answer
  Black: 8
  Red: 4
  Red: 12
  Black: 2
  Black: 6
  Black: 10
  Black: 16
  Black: 1
  Black: 3
  Black: 5
  Black: 7
  Black: 9
  Black: 11
  Red: 14
  Red: 18
  Black: 13
  Black: 15
  Black: 17
  Black: 19
  Red: 20
*/
