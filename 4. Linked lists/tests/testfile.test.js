describe ('LinkedPop', function() {

    let linkedList;

    before(function() {
        linkedList = new LinkedList();
    });

    afterEach(function() {
        linkedList.empty();
    });


    describe('Remove last element of a linked list', function() {
        const testData = [
            {array: [1,2,3], expected: 2},
            {array: [1,3], expected: 1},
            {array: [1,2,'qwe',4], expected: 'qwe'},
            {array: [1,null,3], expected: null},
            {array: [1,undefined,3], expected: undefined},
        ];

        testData.forEach(function(data) {
            const {array, expected} = data;
            array.forEach(item => linkedList.push(item));

            it(`Should return ${expected}`, function() {
                const actual = linkedPop(array);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [
            {array: null, value: 1},
            {array: undefined, value: 1},
            {array: 1, value: 1},
            {array: 'string', value: 1}
        ];

        testData.forEach(function(linkedPop) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    linkedPop(array, value);
                });
            });
        });
    });
});

describe ('LinkedPush', function() {
    describe('Add last element of a linked list', function() {
        const testData = [
            {array: [1,2,3], value: 4, expected: 4},
            {array: [1,2,3], value: '4', expected: '4'},
            {array: [1,2,3], value: null, expected: null},
            {array: [1,2,3], value: undefined, expected: undefined},
        ];

        testData.forEach(function(data) {
            const {array, value, expected} = data;

            it(`Should return ${expected}`, function() {
                const actual = linkedPush(array, value);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [
            {array: null, value: 1},
            {array: undefined, value: 1},
            {array: 1, value: 1},
            {array: 'string', value: 1}
        ];

        testData.forEach(function(Push) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    linkedPush(array, value);
                });
            });
        });
    });
});

describe ('LinkedShift', function() {
    describe('Remove first element of a linked list', function() {
        const testData = [
            {array: [1,2,3], expected: 2},
            {array: [1,3], expected: 3},
            {array: [1,2,'qwe',4], expected: 2},
            {array: [1,null,3], expected: null},
            {array: [1,undefined,3], expected: undefined},
            {array: [undefined,'123qwe',3], expected: '123qwe'},

        ];

        testData.forEach(function(data) {
            const {array, expected} = data;

            it(`Should return ${expected}`, function() {
                const actual = linkedShift(array);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [
            {array: null, value: 1},
            {array: undefined, value: 1},
            {array: 1, value: 1},
            {array: 'string', value: 1}
        ];

        testData.forEach(function(linkedShift) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    linkedShift(array, value);
                });
            });
        });
    });
});

describe ('LinkedUnshift', function() {
    describe('Add first element to the linked list', function() {
        const testData = [
            {array: [1,2,3], value: 4, expected: 4},
            {array: [1,2,3], value: '4', expected: '4'},
            {array: [1,2,3], value: null, expected: null},
            {array: [1,2,3], value: undefined, expected: undefined},
        ];

        testData.forEach(function(data) {
            const {array, value, expected} = data;

            it(`Should return ${expected}`, function() {
                const actual = linkedUnshift(array, value);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [
            {array: null, value: 1},
            {array: undefined, value: 1},
            {array: 1, value: 1},
            {array: 'string', value: 1}
        ];

        testData.forEach(function(linkedUnshift) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    linkedUnshift(array, value);
                });
            });
        });
    });
});