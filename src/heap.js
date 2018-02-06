class Heap {
  constructor() {
    Object.assign(this, { storage: [null], size: 0 });
  }

  static getLeftIdx(pIndex) { return 2 * pIndex; }
  static getRightIdx(pIndex) { return (2 * pIndex) + 1; }
  static getParentIdx(cIndex) { return Math.floor(cIndex / 2); }

  getMax() { return this.storage[1]; }
  getSize() { return this.size; }
  getStorage() { return this.storage; }

  /* Inserts the given value in the heap
   * Calls bubbleUp in order to put the newly-inserted element in the right place in the heap */
  insert(val) {
    this.storage.push(val);
    this.bubbleUp(++this.size);
  }

  /* Moves the element at the specified index "up" by swapping it with its parent
   * if its parent value is less than the value located at the input index
   * This method is only used by the heap itself in order to maintain the heap property */
  bubbleUp(index) {
    const pIndex = Heap.getParentIdx(index);
    const parent = this.storage[pIndex];
    const child = this.storage[index];

    if (parent && child > parent) {
      [this.storage[index], this.storage[pIndex]] = [parent, child];
      this.bubbleUp(pIndex);
    }
  }

  /* Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
   * Calls siftDown in order to reorganize the heap with a new max/min
   * In some specifications, this method is also called `poll` */
  delete() {
    // Why I'm unshifting null
    this.storage.shift();
    const removed = this.storage.shift();
    this.size--;

    // Put tail at head to be sifted down
    this.storage.unshift(this.storage.pop());

    // Put null back at head
    this.storage.unshift(null);
    this.siftDown(1);

    return removed;
  }

  /* First grabs the indices of this element's children and determines which of the children are larger
   * If the larger of the child elements is larger than the parent, the child element is swapped with the parent
   * This method is only used by the heap itself in order to maintain the heap property */
  siftDown(index) {
    if (!this.getSize()) return;

    let left = this.storage[Heap.getLeftIdx(index)];
    let right = this.storage[Heap.getRightIdx(index)];
    const parent = this.storage[index];

    /* Hacky! these two lines need to be here because setting
     * child to the greater of left or right creates a weird bug
     * because when one of the values is undefined, the statement
     * always evaluates to false. */
    if (!left) left = 0;
    if (!right) right = 0;

    const child = left > right ? left : right;
    const cIndex = this.storage.indexOf(child);

    if (parent < child) {
      [this.storage[cIndex], this.storage[index]] = [parent, child];
      return this.siftDown(cIndex);
    }

    if (parent < child) {
      [this.storage[cIndex], this.storage[index]] = [parent, child];
      return this.siftDown(cIndex);
    }
  }
}

module.exports = Heap;
