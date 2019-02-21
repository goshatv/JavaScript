    describe ('Push', function() {
    describe('Add element to the array end', function() {
        const testData = [
            {elementsToAdd: [1], expected: [1]},
            {elementsToAdd: [1, 2], expected: [1, 2]},
            {elementsToAdd: [1, '2'], expected: [1, '2']},
        ];

        testData.forEach(data => {
            const { elementsToAdd, expected } = data;
            const list = new ArrayList();

            it(`should add elements ${elementsToAdd}`, function() {
                elementsToAdd.forEach(item => list.push(item));

                const actual = list.array;

                assert.deepEqual(actual, expected);
            });

            list.array = [];
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
                    Push(array, value);
                });
            });
        });
    });
});

describe ('Pop', function() {
    describe('Remove last element of array', function() {
        const testData = [
            {elementsToAdd: [1], expected: []},
            {elementsToAdd: [1, 2], expected: [1]},
            {elementsToAdd: [1, 2, 3], expected: [1, 2]},
            {elementsToAdd: [1, null, '3', 4], expected: [1, null, '3']}
        ];

        testData.forEach(data => {
            const { elementsToAdd, expected } = data;
            const list = new ArrayList();

            it(`should add elements ${elementsToAdd}`, function() {
                elementsToAdd.forEach(item => list.push(item));

                list.pop();

                const actual = list.array;

                assert.deepEqual(actual, expected);
            });

            list.array = [];
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
                    Push(array, value);
                });
            });
        });
    });
});

describe ('Shift', function() {
    describe('Remove first element of array', function() {
        const testData = [
            {elementsToAdd: [1], expected: []},
            {elementsToAdd: [1, 2], expected: [2]},
            {elementsToAdd: [1, 2, 3], expected: [2, 3]},
            {elementsToAdd: [1, null, '3', 4], expected: [null, '3', 4]}
        ];

        testData.forEach(data => {
            const { elementsToAdd, expected } = data;
            const list = new ArrayList();

            it(`should add elements ${elementsToAdd}`, function() {
                elementsToAdd.forEach(item => list.push(item));

                list.shift();

                const actual = list.array;

                assert.deepEqual(actual, expected);
            });

            list.array = [];
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
                    Push(array, value);
                });
            });
        });
    });
});

describe ('Unshift', function() {
    describe('Add element to the array start', function() {
        const testData = [
            {elementsToAdd: [2], value: 1, expected: [1,2]},
            {elementsToAdd: [], value: 2, expected: [2]},
            {elementsToAdd: [1, '2'], value: null, expected: [null, 1, '2']},
        ];

        testData.forEach(data => {
            const { elementsToAdd, value, expected } = data;
            const list = new ArrayList();

            it(`should add elements ${elementsToAdd}`, function() {
                elementsToAdd.forEach(item => list.push(item));

                list.unshift(value);
                const actual = list.array;

                assert.deepEqual(actual, expected);
            });

            list.array = [];
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
                    Push(array, value);
                });
            });
        });
    });
});

describe ('Remove', function() {
    describe('Remove element of the array by index', function() {
        const testData = [
            {elementsToAdd: [2], value: 0, expected: []},
            {elementsToAdd: [1,2,3], value: 2, expected: [1,2]},
            {elementsToAdd: [1, '2',3,null], value: 1, expected: [1, 3, null]},
            {elementsToAdd: [1, '2',3,undefined], value: 3, expected: [1, '2', 3]},

        ];

        testData.forEach(data => {
            const { elementsToAdd, value, expected } = data;
            const list = new ArrayList();

            it(`should add elements ${elementsToAdd}`, function() {
                elementsToAdd.forEach(item => list.push(item));

                list.remove(value);
                const actual = list.array;

                assert.deepEqual(actual, expected);
            });

            list.array = [];
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
                    Push(array, value);
                });
            });
        });
    });
});

describe('isArray', function() {
    const testData = [
        {value: 1, expected: false},
        {value: [], expected: true},
        {value: [{a:1,b:2}], expected: true},
        {value: {asd: 123}, expected: false},
        {value: '[string]', expected: false}
    ];

    testData.forEach(function(data) {
        const list = new ArrayList();
        const {value, expected} = data;
        it(`Should return true/false if value array/notArray`, function() {
            list.array = value;
            const actual = list.isArray();

            assert.deepEqual(actual, expected);
        });
        list.array = [];
    });
});

describe('lengthArray', function() {
    const testData = [
        {array: [], expected: 0},
        {array: [1], expected: 1},
        {array: [1,2], expected: 2},
        {array: [1,2,3], expected: 3},
        {array: [1,2,3,4], expected: 4},
    ];

    testData.forEach(function(data) {
        const list = new ArrayList();
        const {array, expected} = data;
        it(`Should return length ${expected} of an array ${array}`, function() {
            list.array = array;
            const actual = list.lengthArray();

            assert.deepEqual(actual, expected);
        });
        list.array = [];
    });
});

describe('toString', function() {
    const testData = [
        {array: [], expected: "[]"},
        {array: [1,2,3], expected: "[1,2,3]"},
        {array: [{a:1}], expected: "[[object Object]]"}

    ];

    testData.forEach(function(data) {
        const list = new ArrayList2();
        const {array, expected} = data;
        it(`Should return array ${array} in string`, function() {
            list.array = array;
            const actual = list.toString();

            assert.deepEqual(actual, expected);
        });
        list.array = [];
    });
});

describe('sort', function() {
    const testData = [
        {array: [], expected: []},
        {array: [1,2], expected: [1,2]},
        {array: [2,1], expected: [1,2]},
        {array: [5,0,1,2], expected: [0,1,2,5]},
    ];

    testData.forEach(function(data) {
        const list = new ArrayList2();
        const {array, expected} = data;
        it(`Should return sorted array ${array}`, function() {
            list.array = array;
            const actual = list.sort();

            assert.deepEqual(expected, actual);
        });
        
        list.array = [];
    });
});

describe('push', function() {
    const testData = [
        {array: [], value: null, expected: [null]},
    ];

    testData.forEach(function(data) {
        const list = new ArrayList2();
        const {array, expected} = data;
        it(`Should return sorted array ${array}`, function() {
            list.array = array;
            const actual = list.push(value);

            assert.deepEqual(expected, actual);
        });
        
        list.array = [];
    });
});