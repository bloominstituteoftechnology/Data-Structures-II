
// 'Parent', Math.floor(n/2) - Math.round(n/2) === -1 ? Math.floor(n/2) : Math.floor(n/2) - 1
// 'Children', Math.floor(n * 2) + 1 &&  Math.floor(n * 2) + 2
class MaxHeap {
  constructor() {
    this.storage = [];
  }

  insert(value) {
    if (this.getMax <= value) this.storage.unshift(value);
    else if (this.storage.length < 2) this.storage.splice(this.storage[1] < value ? 1 : 2, 0, value);
    else this.bubbleUp(this.storage.push(value) - 1);
  }

  delete() {
    if (this.getSize === 0) return;
    this.siftDown(0);
    const returnValue = this.storage.shift();
    this.siftDown(0);
    return returnValue;
  }

  getMax() {
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
  }

  bubbleUp(index) {
    const parentIndex = Math.round(index / 2) - 1;
    if (this.storage[index] >= this.storage[parentIndex]) {
      this.storage.splice(parentIndex, 0, this.storage.splice(index, 1)[0]);
      this.bubbleUp(parentIndex);
    }
  }

  siftDown(index) {
    // console.log(this.storage[index])
    const c1Index = Math.floor(index * 2) + 1;
    const c2Index = c1Index + 1;
    const rotate = (c) => {
      const child = this.storage[c];
      const parent = this.storage[index];
      this.storage[index] = child;
      this.storage[c] = parent;
      this.siftDown(c);
    };
    if (this.storage[index] < this.storage[c1Index]) rotate(c1Index);
    if (this.storage[index] < this.storage[c2Index]) rotate(c2Index);
  }
}

module.exports = MaxHeap;

