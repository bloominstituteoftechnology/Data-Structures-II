/* eslint-disable */
class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }

  getLeftIdx(pIndex) { return 2 * pIndex; }
  getRightIdx(pIndex) { return 2 * pIndex + 1; }
  getParentIdx(cIndex) { return Math.floor(cIndex / 2); }

  /* Inserts the given value in the heap
   * Calls bubbleUp in order to put the newly-inserted element in the right place in the heap */
  insert(val) {
    this.storage.push(val);

    let cIndex = ++this.size;
    let pIndex = this.getParentIdx(cIndex);
    let parent = this.storage[pIndex];

    while (this.storage[cIndex] > this.storage[pIndex] && this.storage[pIndex]) {
      this.bubbleUp(cIndex);
    }
  }

  /* Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
   * Calls siftDown in order to reorganize the heap with a new max/min
   * In some specifications, this method is also called `poll` */
  delete() {

  }

  // Returns the maximum value in the heap in constant time
  getMax() { return this.storage[0]; }

  // Returns the size of the heap
  getSize() {

  }

  // Returns the storage array
  getStorage() {

  }

  /* Moves the element at the specified index "up" by swapping it with its parent 
   * if its parent value is less than the value located at the input index
   * This method is only used by the heap itself in order to maintain the heap property */
  bubbleUp(index) {
    const pIndex = this.getParentIdx(index);
    [this.storage[index], this.storage[pIndex]] = [this.storage[pIndex], this.storage[index]];
  }

  /* First grabs the indices of this element's children and determines which of the children are larger
   * If the larger of the child elements is larger than the parent, the child element is swapped with the parent
   * This method is only used by the heap itself in order to maintain the heap property */
  siftDown(index) {
    const pIndex = this.getParentIdx(index);
    [this.storage[index], this.storage[pIndex]] = [this.storage[pIndex], this.storage[index]];

    }
}

const heap = new Heap();
heap.insert(6)
heap.insert(8)
heap.insert(10)
heap.insert(9)
heap.insert(1)
heap.insert(9)
heap.insert(9)
heap.insert(5)
heap.insert(11)


console.log(heap)

// ????
/*            10
 *        9       9
 *     11   1   8    9
 *   5   6
*/


module.exports = Heap;
