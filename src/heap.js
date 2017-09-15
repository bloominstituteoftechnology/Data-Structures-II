/* eslint-disable */
class Heap {
  constructor() {
      this.storage = [null];
      this.size = 0;
  }
  // Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    const heap = this.getStorage();
    heap.push(val);
    this.size += 1;
		if (heap.length > 2) {
      this.bubbleUp(heap.length - 1);
		};
  }
  // Deletes the element located at the last index of the heap
  // Calls siftDown in order to put the newly-inserted element in the right place in the heap
  delete() {
    const heap = this.getStorage();    
		const largest = this.getMax();
		heap[1] = heap[this.getSize()];
		heap.splice(this.getSize());
		if (this.getSize() == 3) {
			if (heap[1] < heap[2]) {
        const temp = heap[1];
        heap[1] = heap[2];
        heap[2] = temp;
			};
		};
    this.siftDown(1);
    this.size -= 1;    
		return largest;
  }
  // Returns the maximum value in the heap in constant time
  getMax() {
    return this.storage[1];
  }
  // Returns the size of the heap
  getSize() {
    return this.size;
  }
  // Returns the storage array
  getStorage() {
    return this.storage;
  }
  // Moves the element at the specified index "up"
  // the heap such that the heap property is maintained
  bubbleUp(index) {
    const heap = this.getStorage(); 
    while (heap[index] > heap[Math.floor(index / 2)]) {
      const temp = heap[index];
      heap[index] = heap[Math.floor(index / 2)]
      heap[Math.floor(index / 2)] = temp;
      if (Math.floor(index / 2) > 1) {
        index = Math.floor(index / 2);
      } else {
        break;
      };
    };
  }
  // Moves the element at the specified index "down"
  // the heap such that the heap property is maintained
  siftDown(index) {
    const heap = this.getStorage();        
    let leftChild = 2 * index;
    let rightChild = 2 * index + 1;
    while (heap[index] <= heap[rightChild] || heap[index] <= heap[leftChild]) {
      if (heap[leftChild] > heap[rightChild]) {
        const temp = heap[index];
        heap[index] = heap[leftChild];
        heap[leftChild] = temp;
        index = 2 * index;
      } else {
        const temp = heap[index];
        heap[index] = heap[rightChild];
        heap[rightChild] = temp;
        index = 2 * index + 1;
      };
      leftChild = 2 * index;
      rightChild = 2 * index + 1;
    };
  }
}

module.exports = Heap;
