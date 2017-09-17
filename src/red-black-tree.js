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
  get children() {
    return [this.leftChild, this.rightChild];
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
    if (this.isRoot) {
      return undefined;
    }
    if (this.isLeftChild) {
      return this.parent.rightChild;
    }
    return this.parent.leftChild;
  }
  get predecessor() {
    let current = this.leftChild;
    while (!current.isNullNode) {
      current = current.rightChild;
    }
    return current.parent;
  }
  get successor() {
    let current = this.rightChild;
    while (!current.isNullNode) {
      current = current.leftChild;
    }
    return current.parent; // ends as null node
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
    if (this.isRoot) {
      return false;
    }
    return this.parent.leftChild === this;
  }
  get isRightChild() {
    if (this.isRoot) {
      return false;
    }
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
  hasUncle() {
    if (this.isRoot) {
      return false;
    }
    return this.uncle !== undefined;
  }
  move(toNode) {
    if (this.isNullNode) {
      return false;
    }
    console.log(`Move ${this.value} to ${toNode.value}`);
    const oldp = this.parent;
    let child;
    if (this.isLeftChild) { // successor
      this.rightChild.parent = this.parent;
      this.parent.leftChild = this.rightChild;
      child = this.rightChild;
    } else { // predecessor
      this.leftChild.parent = this.parent;
      this.parent.rightChild = this.leftChild;
      child = this.leftChild;
    }
    this.parent = toNode.parent;
    this.leftChild = toNode.leftChild;
    this.rightChild = toNode.rightChild;
    if (!toNode.isRoot) {
      if (toNode.isLeftChild) {
        toNode.parent.leftChild = this;
      } else {
        toNode.parent.rightChild = this;
      }
    }
    this.children.forEach((child) => child.parent = this);
    this.isBlack = toNode.isBlack
    // if (child instanceof Node) {
    //   child.solveConflicts();
    // }
    console.log("Moved");
    console.log("New Parent: " + this.parent.value)
    console.log("New Left Child: " + this.leftChild.value);
    console.log("New Right Child: " + this.rightChild.value);
    console.log("New Parent: ");
    console.log("New Parent: " + this.parent.isRoot ? 'undefined' : this.parent.parent.value)
    console.log("New Left Child: " + this.parent.leftChild.value);
    console.log("New Right Child: " + this.parent.rightChild.value);
    console.log("Old Parent: ");
    console.log("New Parent: " + oldp.parent.value)
    console.log("New Left Child: " + oldp.leftChild.value);
    console.log("New Right Child: " + oldp.rightChild.value);
    console.log("Old Child: ");
    console.log("New Parent: " + child.parent.value)
    console.log("New Left Child: " + child.leftChild !== null ? null : child.leftChild.value);
    console.log("New Right Child: " + child.rightChild !== null ? null : child.rightChild.value);
    return true;
  }
  solveConflicts() {
    if (this.isRoot) {
      this.isBlack = true;
    }
    if (this.isBlack) { // black shouldn't have errors if everything else worked how it's meant to
      return;
    }
    let rotated = false;
    const flipColors = (node = this) => {
      node.isBlack = !node.isBlack;
      node.leftChild.isBlack = !node.isBlack;
      node.rightChild.isBlack = !node.isBlack;
      if (node.isRoot) {
        node.isBlack = true;
      }
      if (node.hasParent()) {
        node.parent.solveConflicts();
      }
    };
    const rotateRight = (node = this) => {
      if (!rotated && this.isLeaf && this.hasParent && this.parent.isLeftChild) {
        node = node.parent;
      }
      const pivot = node.parent;
      pivot.leftChild = node.rightChild;
      node.parent = pivot.parent;
      if (pivot.isLeftChild) {
        pivot.parent.leftChild = node;
      } else if (pivot.isRightChild) {
        pivot.parent.rightChild = node;
      }
      pivot.parent = node;
      node.rightChild = pivot;
      pivot.children.forEach(child => {
        if(child !== null) {
          child.parent = pivot;
        }
      });
      node.children.forEach(child => {
        if(child !== null) {
          child.parent = node;
        }
      });
      if (node.isRed && (node.leftChild.isRed || node.rightChild.isRed)) {
        if (node.rightChild.isRed) {
          if(!rotated && node.isRightChild){
            rotated = true;
            rotateLeft(node);
          }
        }
        if (node.isRed) {
          flipColors(node);
        }
      }
    };
    const rotateLeft = (node = this) => {
      if (!rotated && this.isLeaf && this.hasParent && this.parent.isRightChild) {
        node = node.parent;
      }
      const pivot = node.parent;
      pivot.rightChild = node.leftChild;
      node.parent = pivot.parent;
      if (pivot.isLeftChild) {
        pivot.parent.leftChild = node;
      } else if (pivot.isRightChild) {
        pivot.parent.rightChild = node;
      }
      pivot.parent = node;
      node.leftChild = pivot;
      pivot.children.forEach(child => {
        if(child !== null) {
          child.parent = pivot;
        }
      });
      node.children.forEach(child => {
        if(child !== null) {
          child.parent = node;
        }
      });
      if (node.isRed && (node.leftChild.isRed || node.rightChild.isRed)) {
        if (node.leftChild.isRed) {
          if(!rotated && node.isLeftChild){
            rotated = true;
            rotateRight(node);
          }
        }
        if (node.isRed) {
          flipColors(node);
        }
      }
    };
    // find conflicts
    if (this.parent.isRed) {
      if (this.parent.isRoot) {
        flipColors(this.parent);
      } else if (this.hasUncle() && this.uncle.isRed) {
        flipColors(this.grandParent);
      } else if (this.isRightChild) {
        rotateLeft();
      } else if (this.isLeftChild) {
        rotateRight();
      }
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
  getRoot() {
    if (this.root.parent === undefined) {
      return this.root;
    }
    let current = this.root;
    while (current.hasParent()) {
      current = current.hasGrandParent() ? current.grandParent : current.parent;
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
    this.root = this.getRoot();
    return ++this.size;
  }
  remove(value) {
    const node = this.getNode(value);
    if (node.isNullNode) {
      return;
    }
    if (!node.isLeaf) {
      if (!node.predecessor.move(node)) {
        if (!node.successor.move(node)) {
          return;
        }
      }
    } else {
      node.value = null;
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
    if (this.root.isNullNode) {
      return;
    }
    let cache = [this.root];
    let currentLevelQueue = [];
    let nextLevelQueue = [];
    let layer = 1;
    const addToQueue = (branch) => {
      if (cache.indexOf(branch.parent) < 0) {
        currentLevelQueue.push(branch);
        cache.push(branch);
      } else {
        nextLevelQueue.push(branch);
      }
    };
    let current;
    do {
      current = currentLevelQueue.shift() || this.root;
      cb(current.value, current, layer);
      if (!current.isNullNode) {
        addToQueue(current.leftChild);
        addToQueue(current.rightChild);
      }
      if (currentLevelQueue.length === 0 && nextLevelQueue.length > 0) {
        currentLevelQueue = nextLevelQueue;
        nextLevelQueue = [];
        cache = [];
        layer++;
      }
    } while (currentLevelQueue.length > 0);
  }
  set size(length) {
    this.s = length;
    return this.s;
  }
  get size() {
    return this.s;
  }
}

// const rbt = new RedBlackTree(5);
// const array = [1,2,3,4,5,6];
// array.forEach(num => rbt.add(num));
// console.log(rbt.size);
// console.log(rbt.contains(9));
// console.log(rbt.contains(10));
// rbt.eachBFS((value, node, layer) => {
//   if (node.isBlack) {
//     console.log(`Black: ${value}  Layer: ${layer}`);
//   } else {
//     console.log(`Red: ${value}  Layer: ${layer}`);
//   }
// });
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
