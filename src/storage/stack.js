/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
/* eslint-disable no-console */
class Stack {
  constructor() {
    this.storage = []
    console.log('Stack Constuctor')
  }
  get isEmpty() {
    return this.storage.length > 0
  }
  get size() {
    return this.storage.length
  }
  push(item) {
    this.storage.push(item)
  }
  pop() {
    if (this.storage.length) {
      return this.storage.pop()
    }
    return undefined
  }

}

module.exports = Stack;
