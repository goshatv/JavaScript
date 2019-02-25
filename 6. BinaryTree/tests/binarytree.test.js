describe('Binary Tree methods', function() {
    describe('Add', function() {
        const testData = [
            {value: 1, expected: "1"},
            {value: "qwe", expected: "qwe"},
            {value: [1,2,3], expected: "1,2,3"},
            {value: ["Q", 1, "QWE"], expected: "Q,1,QWE"}
        ];
    
        testData.forEach(function(data) {
            const tree = new BinaryTree();
            const {value, expected} = data;
            it(`Should add new element ${value} to a binary tree`, function() {
                tree.add(value);
                const actual = tree.toString();
    
                assert.strictEqual(expected, actual);
            });
        });
    });
    
    describe('Remove', function() {
        const testData = [
            {binaryTree: [1,2,3,4], value: 2, expected: [1,3,4]},
            {binaryTree: [1,2], value: 2, expected: [1]},
            {binaryTree: [1,2,"3",4], value: "3", expected: [1,2,4]},
            {binaryTree: [1,2,null,4], value: null, expected: [1,2,4]}
        ];
    
        testData.forEach(function(data) {
            const tree = new BinaryTree();
            const {binaryTree, value, expected} = data;
            it(`Should remove needed value ${value} from binary tree ${binaryTree}`, function() {
    
                for (var i = 0; i < binaryTree.length; i++)
                {
                    tree.add(binaryTree[i]);
                }
    
                tree.remove(value);
                const actual = tree.toArray();
                
                assert.deepEqual(expected, actual);
            });
        });
    });
    
    describe('Empty', function() {
        const testData = [
            {value: 1, expected: null},
            {value: [1,2,3], expected: null},
            {value: ["Q", 1, "QWE"], expected: null},
            {value: ["Q", 1, "QWE", null, 123], expected: null}
        ];
    
        testData.forEach(function(data) {
            const tree = new BinaryTree();
            const {value, expected} = data;
            it(`Should remove all binary tree ${value}`, function() {
                tree.add(value);
                tree.empty();
                const actual = tree.root;
    
                assert.strictEqual(expected, actual);
            });
        });
    });
    
    describe('Find', function() {
        const testData = [
            {binaryTree: [1,2,3,4], value: 2, expectedValue: 2, expectedRightValue: 3},
            {binaryTree: [1,2,3,7,5,6], value: 5, expectedValue: 5, expectedRightValue: 6},
            {binaryTree: ["1","2","3","4"], value: "2", expectedValue: "2", expectedRightValue: "3"},
            {binaryTree: [1,55,32,123], value: 55, expectedValue: 55, expectedRightValue: 123},
        ];
    
        testData.forEach(function(data) {
            const tree = new BinaryTree();
            const {binaryTree, value, expectedValue, expectedRightValue} = data;
            it(`Should find needed value ${value} from binary tree ${binaryTree}`, function() {
    
                for (var i = 0; i < binaryTree.length; i++)
                {
                    tree.add(binaryTree[i]);
                }
    
                const find = tree.find(value);
                const actualValue = find.value;
                const actualRightValue = find.right.value;
                
                assert.deepEqual(expectedValue, actualValue);
                assert.deepEqual(expectedRightValue, actualRightValue);
            });
        });
    });
    
    describe('ToArray', function() {
        const testData = [
            {binaryTreeValues: [1,2,3,4], expected: [1,2,3,4]},
            {binaryTreeValues: ["1", "2", "3", "4"], expected: ["1", "2", "3", "4"]},
            {binaryTreeValues: [1,"5",3,"4"], expected: [1,3,"4","5"]},
            {binaryTreeValues: [1,null,3], expected: [null,1,3]},
            {binaryTreeValues: [1,5,8,3], expected: [1,3,5,8]}        
        ];
    
        testData.forEach(function(data) {
            const tree = new BinaryTree();
            const {binaryTreeValues, expected} = data;
            it(`Should return binary tree ${expected} in array view`, function() {
    
                for (var i = 0; i < binaryTreeValues.length; i++)
                {
                    tree.add(binaryTreeValues[i]);
                }
    
                const actual = tree.toArray();
    
                assert.deepEqual(expected, actual);
            });
        });
    });
    
    describe('ToString', function() {
        const testData = [
            {binaryTreeValues: [1,2,3,4], expected: "1,2,3,4"},
            {binaryTreeValues: [1,6,7,2], expected: "1,2,6,7"},
            {binaryTreeValues: [1,"6",7,null], expected: ",1,6,7"},
            {binaryTreeValues: [1,2,3,4,undefined], expected: "1,2,3,4"},
        ];
    
        testData.forEach(function(data) {
            const tree = new BinaryTree();
            const {binaryTreeValues, expected} = data;
            it(`Should return binary tree ${expected} in string view`, function() {
    
                for (var i = 0; i < binaryTreeValues.length; i++)
                {
                    tree.add(binaryTreeValues[i]);
                }
    
                const actual = tree.toString();
    
                assert.strictEqual(expected, actual);
            });
        });
    });
    
    describe('ToLinkedList', function() {
        const testData = [
            {binaryTreeValues: [1,2,3,4], expectedHead: 1, expectedNext: 2},
            {binaryTreeValues: [2,5,3,9], expectedHead: 2, expectedNext: 3},
            {binaryTreeValues: ["2","5","3","9"], expectedHead: "2", expectedNext: "3"},
            {binaryTreeValues: ["2",1,null,"9"], expectedHead: null, expectedNext: 1},
        ];
    
        testData.forEach(function(data) {
            const tree = new BinaryTree();
            const {binaryTreeValues, expectedHead, expectedNext} = data;
            it(`Should return binary tree in Linked list view`, function() {
    
                for (var i = 0; i < binaryTreeValues.length; i++)
                {
                    tree.add(binaryTreeValues[i]);
                }
    
                const linkedList = tree.toLinkedList();
                const actualHead = linkedList.head.value;
                const actualNext = linkedList.head.next.value;
    
                assert.strictEqual(expectedHead, actualHead);
                assert.strictEqual(expectedNext, actualNext);
            });
        });
    });
});

