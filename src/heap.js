/* eslint-disable */

/*
Level 0: 1-1                                             1
Level 1: 2-3                                         2        3
Level 2: 4-7                                      4    5    6     7
Level 3: 8-15                                    8 9  0 1  2 3   4  5
Level 4: 16-31
Level n: 2**n - (2**(n+1)-1)
Lets consider the i:th node in a Heap that has the value A[i]
PARENT(i) = i/2	Return the index of the father node
LEFT(i) = 2i	Return the index of the left child
RIGHT(i) = 2i+1	Return the index of the right child
   heap.insert(6);
     heap.insert(8);
     heap.insert(10);
     heap.insert(9);
     heap.insert(1);
     heap.insert(9);
     heap.insert(9);
     heap.insert(5);
     6
     8
   6
     10
   6   8
     10
   9    8
  6 1

     10
   9   9
  6 1 8 9

     10
   9   9
  6 1 8 9
 5

*/
class Heap {
  constructor(isMax = true) {
    this.storage = [null];
    this.size = 0;
    this.isMax = isMax;
  }
  swappable(parent, child) {
    if (this.isMax) return parent < child;
    return parant > child;
  }
  isParent(parent,child) {
      return (this.isMax) ? Math.max(parent, child) : Math.min(parent,child)
  }

  // Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    this.storage.push(val);
    let parentIndex = Math.floor(this.getSize() / 2);
    if (parentIndex === 0) return;
    let valIndex = this.getSize();
    while (this.swappable(this.storage[parentIndex], val)) {
      this.bubbleUp(valIndex);
      valIndex = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
      if (parentIndex === 0) return;
    }
  }

  // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
  // Calls siftDown in order to reorganize the heap with a new max/min
  // In some specifications, this method is also called `poll`
  delete() {
    if (!this.getSize()) return undefined
    let s1 = this.getStorage[1]
    let deleteValue = this.storage.pop()
    if (this.getSize() > 0) {
        this.getStorage[1] = deleteValue
        this.siftDown(1);        
    } 
    return s1
  }

  // Returns the maximum value in the heap in constant time
  getMax() {
    return this.storage[1];
  }

  // Returns the size of the heap
  getSize() {
    return this.storage.length - 1;
  }

  // Returns the storage array
  get getStorage() {
    return this.storage;
  }

  // Moves the element at the specified index "up" by swapping it with its parent
  // if its parent value is less than the value located at the input index
  // This method is only used by the heap itself in order to maintain the heap property
  bubbleUp(index) {
    const temp = this.storage[Math.floor(index / 2)];
    this.storage[Math.floor(index / 2)] = this.storage[index];
    this.storage[index] = temp;
  }

  // First grabs the indices of this element's children and determines which of the children are larger
  // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
  // This method is only used by the heap itself in order to maintain the heap property
  siftDown(index) {
    let left =
      index * 2 <= this.getSize() ? this.getStorage[index * 2] : undefined;
    let right =
      index * 2 + 1 <= this.getSize()
        ? this.getStorage[index * 2 + 1]
        : undefined;
    let max;
    if (right == undefined) {
      max = left;
      if (left == undefined) {
        return;
      }
    } else {
      max = this.isParent(left, right);
    }
    if (this.swappable(this.getStorage[index], max)) {
      let siftIndex;
      if (right === undefined || !this.swappable(left, right)) {
        this.bubbleUp(index * 2);
        siftIndex = index * 2;
      } else {
        this.bubbleUp(index * 2 + 1);
        siftIndex = index * 2 + 1;
      }
      this.siftDown(siftIndex);
    }
    return;
  }
}

module.exports = Heap;
