/* eslint-disable no-undef */
const BinarySearchTree = require('../src/binary-search-tree');

describe('BinarySearchTree', () => {
  let binarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstForEach', () => {
    expect(typeof binarySearchTree.insert).toBe('function');
    expect(typeof binarySearchTree.contains).toBe('function');
    expect(typeof binarySearchTree.depthFirstForEach).toBe('function');
  });

  it('should insert values at the correct location in the tree', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).toBe(3);
    expect(binarySearchTree.right.left.value).toBe(6);
  });

  it('should have a working "contains" method', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).toBe(true);
    expect(binarySearchTree.contains(8)).toBe(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstForEach"', () => {
    const array = [];
    const foo = value => ((array.push(value)));
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstForEach(foo);
    expect(array).toEqual([5, 2, 3]);
  });
});
