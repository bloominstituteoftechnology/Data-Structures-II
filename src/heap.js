class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }
  // Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    if (this.storage[0] === null) {
      this.storage[0] = val;
      this.size++;
      return;
    }
    this.storage.push(val);
    this.size++;
    this.bubbleUp(this.size - 1);
  }
  // Deletes the element located at the last index of the heap
  // Calls siftDown in order to put the newly-inserted element in the right place in the heap
  delete() {
    const temp = this.storage.shift();
    this.size--;
    for (let i = 0; i < this.size; i++) {
      this.siftDown(i);
    } return temp;
  }
  // Returns the maximum value in the heap in constant time
  getMax() {
    return this.storage[0];
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
    if (index % 2 === 1 && (index - 1) / 2 >= 0) {
      if (this.storage[index] > this.storage[(index - 1) / 2]) {
        const temp = this.storage[index];
        this.storage[index] = this.storage[(index - 1) / 2];
        this.storage[(index - 1) / 2] = temp;
        this.bubbleUp((index - 1) / 2);
        this.siftDown(index);
      }
    } if (index % 2 === 0 && (index - 2) / 2 >= 0) {
      if (this.storage[index] > this.storage[(index - 2) / 2]) {
        const temp = this.storage[index];
        this.storage[index] = this.storage[(index - 2) / 2];
        this.storage[(index - 2) / 2] = temp;
        this.bubbleUp((index - 2) / 2);
      }
    }
  }
  // Moves the element at the specified index "down"
  // the heap such that the heap property is maintained
  siftDown(index) {
    if ((((index * 2) + 1) < this.size) && (this.storage[index] < this.storage[(index * 2) + 1])) {
      const temp = this.storage[index];
      this.storage[index] = this.storage[(index * 2) + 1];
      this.storage[(index * 2) + 1] = temp;
      this.siftDown((index * 2) + 1);
    } if ((((index * 2) + 1) < this.size) && (this.storage[index] < this.storage[(index * 2) + 2])) {
      const temp = this.storage[index];
      this.storage[index] = this.storage[(index * 2) + 2];
      this.storage[(index * 2) + 2] = temp;
      this.siftDown((index * 2) + 2);
    }
  }
}

module.exports = Heap;
