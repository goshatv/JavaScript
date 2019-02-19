    describe ('Push', function() {
    describe('Add element to the array end', function() {
        const testData = [
            {elementsToAdd: [1], expected: [1]},
            {elementsToAdd: [1, 2], expected: [1, 2]},
        ];

        testData.forEach(data => {
            const { elementsToAdd, expected } = data;
            const list = new Alist();

            it(`should add elements ${elementsToAdd}`, function() {
                elementsToAdd.forEach(item => list.push(item));

                const actual = list.toArray();

                assert.deepEqual(actual, expected);
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
                    Push(array, value);
                });
            });
        });
    });
});

describe ('Pop', function() {
    describe('Remove last element of array', function() {
        const testData = [
            {arrayItems: [1], expected: []},
            {arrayItems: [1,2], expected: [1]},
            {arrayItems: [1,2,3], expected: [1,2]},
            {arrayItems: [null,1], expected: [null]},
        ];

        testData.forEach(data => {
            const {arrayItems, expected} = data;
            const list = new Alist();

            it(`Should remove last element from array`, function() {
                arrayItems.forEach(item => list.push(item));

                list.pop();
                const actual = list.toArray();

                assert.deepEqual(actual, expected);
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [null, undefined, 1, 'string', []];

        testData.forEach(function(Pop) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    Pop(array);
                });
            });
        });
    });
});

describe ('Shift', function() {
    describe('Remove first element of array', function() {
        const testData = [
            {array: [1], expected: []},
            {array: [1,2,3], expected: [2,3]},
            {array: [1,2,'3'], expected: [2,'3']},
            {array: [2,2], expected: [2]},
            {array: [12,2,'www',null], expected: [2,'www',null]},
            {array: [null,null,null], expected: [null,null]},
            {array: [undefined,1,2,3], expected: [1,2,3]}
        ];

        testData.forEach(function(data) {
            const {array, expected} = data;

            it(`Should return ${expected} array`, function() {
                const actual = Shift(array);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [null, undefined, 1, 'string', []];

        testData.forEach(function(Shift) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    Shift(array);
                });
            });
        });
    });
});

describe ('Unshift', function() {
    describe('Add new element to start of array', function() {
        const testData = [
            {array: [], value: 1, expected: [1]},
            {array: [2], value: null, expected: [null,2]},
            {array: [1], value: undefined, expected: [undefined,1]},
            {array: ['1', '2'], value: '0', expected: ['0','1','2']},
            {array: [1,2,3], value: '1', expected: ['1',1,2,3]},
            {array: [1,2,3], value: null, expected: [null,1,2,3]},
        ];

        testData.forEach(function(data) {
            const {array, value, expected} = data;

            it(`Should return ${expected} with value ${value}`, function() {
                const actual = Unshift(array, value);

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

        testData.forEach(function(Unshift) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    Unshift(array, value);
                });
            });
        });
    });
});

describe ('Remove', function() {
    describe('Remove needed element by index', function() {
        const testData = [
            {array: [0], value: 0, expected: []},
            {array: [0,1], value: 0, expected: [1]},
            {array: [0,1,2], value: 2, expected: [0,1]},
            {array: [0,1,2], value: 0, expected: [1,2]},
            {array: [0,1,2,3,4], value: 3, expected: [0,1,2,4]},
            {array: [0,1,2,3,4], value: 4, expected: [0,1,2,3]}
        ];

        testData.forEach(function(data) {
            const {array, value, expected} = data;

            it(`Should return ${expected} with value ${value}`, function() {
                const actual = Remove(array, value);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws exception if index misses in the array range ', function() {
        const testData = [
            {array: null, value: 1},
            {array: undefined, value: 1},
            {array: 1, value: 1},
            {array: 'string', value: 1}
        ];

        testData.forEach(function(Delete) {
            it(`If input index is missed in the array range, throw exception`, function() {
                assert.throw(function() {
                    Delete(array, value);
                });
            });
        });
    });
});

describe ('IsArray', function() {
    describe('Returns boolean is the value an array', function() {
        const testData = [
            {array: [], expected: true},
            {array: [1], expected: true},
            {array: ['2'], expected: true},
            {array: [{a:1}], expected: true},
            {array: 'qwe123', expected: false},
            {array: 123, expected: false},
            {array: function() {}, expected: false},
            {array: [123, 'gjh', {a:6, b:9}], expected: true}
        ];

        testData.forEach(function(data) {
            const {array, expected} = data;

            it(`Should return ${expected}`, function() {
                const actual = IsArray(array);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [null, undefined, 1, 'string', []];

        testData.forEach(function(Shift) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    IsArray(array);
                });
            });
        });
    });
});

describe ('Length', function() {
    describe('Returns length of array', function() {
        const testData = [
            {array: [], expected: 0},
            {array: [1], expected: 1},
            {array: [1,2], expected: 2},
            {array: [1,2,3], expected: 3},
            {array: [1,2,3,4,5,6,7], expected: 7},
            {array: [1,2,3,4,5,6,7,'1',{a:1}], expected: 9},
            {array: [1,2,3,4,5,7], expected: 6},
        ];

        testData.forEach(function(data) {
            const {array, expected} = data;

            it(`Should return ${expected}`, function() {
                const actual = Length(array);

                assert.deepEqual(actual, expected)
            });
        });
    });
    describe('Throws error for non-array values', function() {
        const testData = [null, undefined, 1, 'string', []];

        testData.forEach(function(Length) {
            it(`If input data is not array, throw error`, function() {
                assert.throw(function() {
                    Length(array);
                });
            });
        });
    });
});