/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    insert(val) {
        if (this.size === 0) {
            this.storage[0] = val;
        } else {
            this.storage.push(val);
            this.bubbleUp(this.storage.length - 1);
        }
        
        this.size++;
    }
    delete() {
       const deleteItem = this.storage.sort((a, b) => a - b).reverse().splice(0, 1);
        this.size = this.storage.length;
        this.siftDown(0);
        return deleteItem[0];
    }
    getMax() {
      return this.storage[0];
    }
    getSize() {
        return this.size;
    }
    getStorage() {
      return this.storage;
    }
    bubbleUp(index) {
        if (this.storage.length === 0 || this.storage[0] === null) return;
        
        const nowNode = this.storage[index];
        const mamaNodeI = Math.floor((index) / 2);
        const mamaNode = this.storage[mamaNodeI];
        
        if (mamaNode < nowNode) {
            this.storage[mamaNodeI] = nowNode;
            this.storage[index] = mamaNode;
            return this.bubbleUp(mamaNodeI);
        }
      }
      siftDown(index) {
              const nowNode = this.storage[index];
        const kidIndex = [
            Math.floor(2 * index),
        ];
        let biggestKid = this.storage[kidIndex[0]];
        let biggestKidI = kidIndex[0];
        if (this.storage[kidIndex[1]] > biggestKid) {
            biggestKid = this.storage[kidIndex[1]];
            biggestKidI = kidIndex[1];
        }
        if (biggestKid > nowNode) {
            this.storage[biggestKidI] = nowNode;
            this.storage[index] = biggestKid;
            return this.siftDown(biggestKidI);

        }
      }
  }
     

module.exports = Heap;
