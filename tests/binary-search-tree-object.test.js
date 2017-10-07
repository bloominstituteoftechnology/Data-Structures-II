/* eslint-disable no-undef, indent */
const BinarySearchTree = require('../src/binary-search-tree-object');

describe('BinarySearchTree', () => {
    let binarySearchTree;

    beforeEach(() => {
        binarySearchTree = new BinarySearchTree();
    });

    it('should have methods named "insert", "contains", "depthFirstForEach", and "breadthFirstForEach"', () => {
        expect(typeof binarySearchTree.insert).toBe('function');
        expect(typeof binarySearchTree.contains).toBe('function');
        expect(typeof binarySearchTree.depthFirstForEach).toBe('function');
        expect(typeof binarySearchTree.breadthFirstForEach).toBe('function');
    });

    it('should insert values at the correct location in the tree', () => {
        binarySearchTree.insert({ value: 2 });
        binarySearchTree.insert({ value: 3 });
        binarySearchTree.insert({ value: 7 });
        binarySearchTree.insert({ value: 6 });
        expect(binarySearchTree.left.right.value).toBe(3);
        expect(binarySearchTree.right.left.value).toBe(6);
    });
    /*
              5-1
        2-2          7-4
          3-3      6-5

    */

    it('should have a working "contains" method', () => {
        binarySearchTree.insert({ value: 2 });
        binarySearchTree.insert({ value: 3 });
        binarySearchTree.insert({ value: 7 });
        expect(binarySearchTree.contains(7)).toBe(true);
        expect(binarySearchTree.contains(8)).toBe(false);
    });

    it('should execute a callback on every value in the tree using "depthFirstForEach" in the correct order', () => {
        const array = [];
        const foo = obj => ((array.push(obj.value)));
        binarySearchTree.insert({ value: 2 });
        binarySearchTree.insert({ value: 3 });
        binarySearchTree.insert({ value: 7 });
        binarySearchTree.insert({ value: 9 });
        binarySearchTree.depthFirstForEach(foo);
        expect(array).toEqual([5, 2, 3, 7, 9]);
    });
    /*          5
            2      7
                3     9

    */
    it('should execute a callback on every value in the tree using "breadthFirstForEach" in the correct order', () => {
        const array = [];
        const foo = obj => ((array.push(obj.value)));
        binarySearchTree.insert({ value: 3 });
        binarySearchTree.insert({ value: 4 });
        binarySearchTree.insert({ value: 10 });
        binarySearchTree.insert({ value: 9 });
        binarySearchTree.insert({ value: 11 });
        binarySearchTree.breadthFirstForEach(foo);
        expect(array).toEqual([5, 3, 10, 4, 9, 11]);

        /*
                       5
                    3     10
                      4  9  11
        */
    });
});
