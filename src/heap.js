// /* eslint-disable */
/* eslint-disable no-mixed-operators */
class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }

  insert(val) {
    // increasesize
    this.size++;
    // if there are no nodes, set the root node to the value
    if (this.getStorage() === [null]) this.storage[0] = val;
    // else add to the end of heap
    // bubble up through heap
    else {
      this.getStorage().push(val);
      this.bubbleUp(this.getSize() - 1);
    }
  }

  delete() {
    // to be returned later
    const oldMax = this.getMax();
    // if there is only the root node left
    if (this.getSize() === 1) {
      this.storage = [null];
      this.size = 0;
    } else {
      // else there is more than one node
      const newMax = this.getStorage()[this.getSize() - 1];
      this.getStorage()[0] = newMax;
      this.getStorage().splice([this.getSize() - 1], 1);
      this.siftDown(0);
      this.size--;
    }
    return oldMax;
  }

  getMax() {
    return this.getStorage()[0];
  }

  getSize() {
    return this.size;
  }

  getStorage() {
    return this.storage;
  }

  bubbleUp(index) {
    // find parent index
    const parentIndex = Math.floor((index - 1) / 2);
    // if parentIndex negative, we're at the 0-index (root node)
    if (parentIndex >= 0) {
      const parent = this.getStorage()[parentIndex];
      const child = this.getStorage()[index];
      // check if the child is larger than parent
      if (child >= parent) {
        // if so, swap parent and child
        this.getStorage()[parentIndex] = child;
        this.getStorage()[index] = parent;
        // check if child is larger than its parent's parent
        this.bubbleUp(parentIndex);
      }
    }
  }

  siftDown(index) {
    // hypothetical children
    let leftChild;
    let rightChild;
    const iLeftChild = (1 + 2 * index);
    const iRightChild = (2 + 2 * index);
    // we know parent exists (index passed in)
    const parent = this.getStorage()[index];
    // check if the children are in the heap
    // if so, create children
    if (iLeftChild <= this.getSize()) leftChild = this.getStorage()[2 * index + 1];
    if (iRightChild <= this.getSize()) rightChild = this.getStorage()[2 * index + 2];
    // create a method for swapping
    const swap = (child, childIndex) => {
      // swap (L or R) child and parent
      this.getStorage()[index] = child;
      this.getStorage()[childIndex] = parent;
      // check parent's children
      this.siftDown(childIndex);
    };
    // if there is a left child
    if (leftChild) {
      // check if the left child is larger than the parent
      if (leftChild > parent) {
        // check if there is a right child
        if (rightChild) {
          // check which child is larger
          // if the left child is larger
          if (leftChild > rightChild) {
            swap(leftChild, iLeftChild);
          } else {
            // else the right child is larger
            swap(rightChild, iRightChild);
          }
        } else {
          // else no right child to check
          swap(leftChild, iLeftChild);
        }
      }
    }
  }
}

module.exports = Heap;
