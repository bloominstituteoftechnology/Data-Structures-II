class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    const node = new BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) this.left = node;
      else {this.left.insert(value)}
    } else if (this.value < value) {
      if (this.right === null) this.right = node;
      else {this.right.insert(value)}
    }
  }

  contains(target) {
    if (target === this.value) { return true;
    } else if (target < this.value) {
      if (this.left === null) { return false;
      } return this.left.contains(target);
    } else if (target > this.value) {
      if (this.right === null) { return false;
      } return this.right.contains(target)}
  }

  depthFirstForEach(cb) {
    return this;
  }
  breadthFirstForEach(cb) {
  const newQueue = new Queue(0)
  Object.values(this).forEach((item) => {
    
    if (item.value !== undefined) newQueue.enqueue((['left or right: ' + item.value]));
    else if (item !== 'object') newQueue.enqueue((['this: ' + this.value]));

    });
  console.log(" function complete \n", newQueue); // helper log mirror the enque
  // console.log('this is', this.value, '\n', newQueue.closure, '\n');
  }

}

class Queue {
  constructor() { this.closure = []}
  get size(){ return ( this.closure.length ? this.closure.length : 0)}
  enqueue(tuple){ this.closure.push(tuple)}
  dequeue(){ return this.closure.shift()}
}

const call = (a) => console.log( a => { return a});
const nt = new BinarySearchTree(0);

nt.insert(-1);
nt.insert(1);
nt.insert(10);
nt.insert(11);
nt.breadthFirstForEach(call);
// nt.right.breadthFirstForEach(call);
// nt.right.right.breadthFirstForEach(call);

module.exports = BinarySearchTree;
