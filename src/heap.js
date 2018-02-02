/* eslint-disable */
class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }

  getLeftIdx(pIndex) { return 2 * pIndex; }
  getRightIdx(pIndex) { return 2 * pIndex + 1; }
  getParentIdx(cIndex) { return Math.floor(cIndex / 2); }
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
    const pIndex = this.getParentIdx(index);
    const parent = this.storage[pIndex];
    const child = this.storage[index];

    if (parent && child > parent) {
      [this.storage[index], this.storage[pIndex]] = [this.storage[pIndex], this.storage[index]];
      this.bubbleUp(pIndex);
    }
  }

  /* Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
   * Calls siftDown in order to reorganize the heap with a new max/min
   * In some specifications, this method is also called `poll` */
  delete() {
    this.storage.shift(); // remove null from head
    const removed = this.storage.shift();
    // put tail at head to be sifted down
    this.storage.unshift(this.storage.pop())

    this.storage.unshift(null);
    this.siftDown(1);

    return removed;
  }

  /* First grabs the indices of this element's children and determines which of the children are larger
   * If the larger of the child elements is larger than the parent, the child element is swapped with the parent
   * This method is only used by the heap itself in order to maintain the heap property */
  siftDown(index) {
    this.size--;

    if(!this.getSize()) return;

    //console.log(this.storage);

    const left = this.storage[this.getLeftIdx(index)];
    const right = this.storage[this.getRightIdx(index)];
    const parent = this.storage[index];

    const child = left > right ? left : right;
    const cIndex = this.storage.indexOf(child);

    //console.log('child index:', cIndex)
    //console.log('head', this.storage[index])
    //console.log('left', left)
    //console.log('right', right)
    //console.log('child', child)
    //console.log('size',this.getSize())
    
    if (parent < child) {
      [this.storage[cIndex], this.storage[index]] = [this.storage[index], this.storage[cIndex]];
      return this.siftDown(cIndex);
    }

    if (parent < child) {
      [this.storage[cIndex], this.storage[index]] = [this.storage[index], this.storage[cIndex]];
      return this.siftDown(cIndex);
    }

  }
}

const heap = new Heap();
heap.insert(6)
heap.insert(7)
heap.insert(5)
heap.insert(8)
heap.insert(10)
heap.insert(1)
heap.insert(2)
heap.insert(5)
// => [null, 10, 8, 5, 6, 7, 1, 2, 5]

/*         10
 *     8         5
 *   6   7     1   2
 * 5
 */

heap.delete()
/*         10
 *     8         5
 *   6   7     1   2
 * 5
 */

/*            11
 *         10       9
 *      9     1   8   9
 *    5   6
*/

//console.log(heap)

module.exports = Heap;
