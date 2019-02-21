describe('multiplyOrSum', function () {
   it('Should return a + b', function () {
      const a = 1;
      const b = 2;
      const expected = 3;

      const actual = multiplyOrSum(a, b);

       assert.equal(actual, expected);
   });

   it('Should return a * b', function () {
       const a = 2;
       const b = 3;
       const expected = 6;

       const actual = multiplyOrSum(a, b);

       assert.equal(actual, expected);
   })
});

describe('getQuarterByCoordinates', function() {
    describe('Returns quarter by coordinates', function() {
        const testData = [
            {x: 1, y: 2, expected: 1},
            {x: -1, y: 1, expected: 2},
            {x: -1, y: -2, expected: 3},
            {x: 1, y: -1, expected: 4}
        ];

        testData.forEach(function(data) {
            const {x, y, expected} = data;
            it(`Should return ${expected} when x = ${x} and y = ${y}`, function() {
                const actual = getQuarterByCoordinates(x, y);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

describe('getPositiveNumbersSum', function() {
    const testData = [
        {a: 1, b: -1, c: 0, expected: 1},
        {a: 1, b: 2, c: 0, expected: 3}
    ];

    testData.forEach(function(data) {
        const {a, b, c, expected} = data;

        it(`Should return ${expected}, when a = ${a} and b = ${b} and c= ${c}`, function() {});
        const actual = getPositiveNumbersSum(a, b, c);

        assert.strictEqual(actual, expected);
    });
});

describe('calculateMaxSumOrMultiply', function() {
    describe(`Returns max of a + b + c or a * b * c plus 3`, function() {
        const testData = [
            {a: 0, b: 1, c: 2, expected: 6},
        ];

        testData.forEach(function(data) {
            const {a, b, c, expected} = data;
            it(`Should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, function(){});

            const actual = calculateMaxSumOrMultiply(a, b, c);

            assert.strictEqual(actual, expected);
        });
    });
});

describe('getRate', function() {
    describe(`Returns student mark by his rating`, function() {
        const testData = [
            {rating: 0, expected: 'F'},
            {rating: 1, expected: 'F'},
            {rating: 10, expected: 'F'},
            {rating: 18, expected: 'F'},
            {rating: 19, expected: 'F'},
            {rating: 20, expected: 'E'},
            {rating: 21, expected: 'E'},
            {rating: 30, expected: 'E'},
            {rating: 38, expected: 'E'},
            {rating: 39, expected: 'E'},
            {rating: 40, expected: 'D'},
            {rating: 41, expected: 'D'},
            {rating: 50, expected: 'D'},
            {rating: 59, expected: 'D'},
            {rating: 60, expected: 'C'},
            {rating: 61, expected: 'C'},
            {rating: 60, expected: 'C'},
            {rating: 74, expected: 'C'},
            {rating: 75, expected: 'B'},
            {rating: 76, expected: 'B'},
            {rating: 80, expected: 'B'},
            {rating: 89, expected: 'B'},
            {rating: 90, expected: 'A'},
            {rating: 95, expected: 'A'},
            {rating: 98, expected: 'A'},
            {rating: 100, expected: 'A'},
        ];

        testData.forEach(function(data) {
            const {rating, expected} = data;

            it(`Should return ${expected} when rate = ${rating}`, function() {
                const actual = getRate(rating);
            })
        })
    });

    describe(`Throws Error when rating out of a range `, function() {
        const testData = [-1, -100, 101];

        testData.forEach(function(rating) {
            it(`Should throw Error when rating is ${rating}`, function() {
                assert.throw(function(){
                    getRate(rating);
                });
            });
        }) ;
    });
});

// describe('getMinArrayValue', function() {
//     describe('returns min element of array', function() {
//         const testData = [
//             {array: [], expected: null},
//             {array: [1], expected: 1},
//             {array: [3,2], expected: 3},
//             {array: [-3,2,5,19], expected: 19},
//         ];

//         testData.forEach(function(data) {
//             const {array, expected} = data;

//             it(`should return ${expected} if array is ${[array]}`, function() {
//                 const actual = getMinArrayValue(array);

//                 assert.strictEqual(actual, expected);

//             });
//         });
//     });
// });

describe('evenNumbersSumAndCountInRange', function() {
    describe('Returns sum & count of a even numbers in range', function() {
        const testData = [
            {rangeStart: 0, rangeEnd: 0, expected: '0, 1'},
            {rangeStart: 1, rangeEnd: 2, expected: '2, 1'},
            {rangeStart: -5, rangeEnd: 1, expected: '-6, 3'},
            {rangeStart: 1, rangeEnd: 2, expected: '2, 1'},
            {rangeStart: 1, rangeEnd: 1, expected: '0, 0'},
            {rangeStart: 5, rangeEnd: 5.5, expected: '0, 0'}
        ];

        testData.forEach(function(data) {
            const {rangeStart, rangeEnd, expected} = data;

            it(`Should return ${expected} if range is from ${rangeStart} to ${rangeEnd}`, function() {
                const actual = evenNumbersSumAndCountInRange(rangeStart, rangeEnd);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

describe('isNumberPrime', function() {
    describe('Returns is number is prime or not in boolean', function() {
        const testData = [
            {number: 0, expected: false},
            {number: 1, expected: true},
            {number: 2, expected: true},
            {number: 3, expected: true},
            {number: 4, expected: false},
            {number: 5, expected: true},
            {number: 7, expected: true},
            {number: 13, expected: true},
            {number: 14, expected: false},
            {number: 20, expected: false},
            {number: 100, expected: false}
        ];

        testData.forEach(function(data) {
            const {number, expected} = data;

            it(`Should return ${expected} if ${number} is prime`, function() {
                const actual = isNumberPrime(number);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

describe('sqrtNumber', function() {
    describe('Returns square root of number', function() {
        const testData = [
            {number: 0, expected: 0},
            {number: 1, expected: 1},
            {number: 4, expected: 2},
            {number: 16, expected: 4},
            {number: 225, expected: 15},


        ];

        testData.forEach(function(data) {
            const {number, expected} = data;

            it(`Should return ${expected} of number ${number}`, function() {
                const actual = sqrtNumber(number);

                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Throws error when number is negative', function() {
        const testData = [-1, -2, -100, -123];

        testData.forEach(function(rating) {
            it(`Should throw Error when rating is ${rating}`, function() {
                assert.throw(function(){
                    sqrtNumber(number);
                });
            });
        }) ;
    });
});

describe('factorial', function() {
    describe('Returns factorial of a number', function() {
        const testData = [
            {number: 0, expected: 1},
            {number: 1, expected: 1},
            {number: 2, expected: 2},
            {number: 3, expected: 6},
            {number: 5, expected: 120}
        ];

        testData.forEach(function(data) {
            const {number, expected} = data;

            it(`Should return ${expected} of a number ${number}`, function() {
                const actual = factorial(number);

                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Throws error when number is negative', function() {
        const testData = [-1, -2, -3, -100, -123];

        testData.forEach(function(factorial) {
            it(`Should throw error if number is ${factorial}`, function() {
                assert.throw(function(){
                    factorial(number);
                });
            });
        });
    });
});

describe('sumOfNumberDigits', function() {
    describe('Returns sum of a digits in number', function() {
        const testData = [
            {number: 0, expected: 0},
            {number: 1, expected: 1},
            {number: 2, expected: 2},
            {number: 5, expected: 5},
            {number: 123, expected: 6},
            {number: 555, expected: 15},
            {number: 600, expected: 6},
            {number: 1234, expected: 10},
            {number: 12345, expected: 15}
        ];

        testData.forEach(function(data) {
            const {number, expected} = data;

            it(`Should return ${expected} of number ${number}`, function() {
                const actual = sumOfNumberDigits(number);

                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Throw error if number is negative', function() {
        const testData = [-1, -2, -12, -123];

        testData.forEach(function(sumOfNumberDigits) {
            it(`Should throw error if number is ${sumOfNumberDigits}`, function() {
                assert.throw(function() {
                    sumOfNumberDigits(number);
                });
            })
        });
    });
});

describe('mirrorNumber', function() {
    const testData = [
        {number: 0, expected: ''},
        {number: 113, expected: '311'},
        {number: 550, expected: '055'},
        {number: 1000, expected: '0001'},
        {number: -12, expected: '-21'},
        {number: -123, expected: '-321'},
        {number: -12345, expected: '-54321'},
    ];

    testData.forEach(function(data) {
        const {number, expected} = data;

        it(`Should return mirror number ${expected} of number ${number}`, function() {
            const actual = mirrorNumber(number);

            assert.strictEqual(actual, expected);
        });
    });
});

describe('arrayExtremes', function() {
    const testData = [
        {array: [], expected: `max=${undefined},min=${undefined},maxIndex=-1,minIndex=-1`},
        {array: [1,2], expected: 'max=2,min=1,maxIndex=1,minIndex=0'},
        {array: [-1, -100, 12, 3], expected: 'max=12,min=-100,maxIndex=2,minIndex=1'},
        {array: [1, 1, 1], expected: 'max=1,min=1,maxIndex=0,minIndex=0'},
        {array: [0, 0, 0, 1, 1], expected: 'max=1,min=0,maxIndex=3,minIndex=0'}
              
    ];

    testData.forEach(function(data) {
        const {array, expected} = data;

        it(`Should return ${expected} of array ${array}`, function() {
            const actual = arrayExtremes(array);

            assert.strictEqual(actual, expected);
        });
    });
});

describe('arrayOddIdxElementsSum', function() {
    const testData = [
        {array: [], expected: 0},
        {array: [0,0], expected: 0},
        {array: [0,1,2], expected: 1},
        {array: [1,2,3,4], expected: 6}
    
    ];

    testData.forEach(function(data) {
        const {array, expected} = data;

        it(`Should return ${expected} of array ${array}`, function() {
            const actual = arrayOddIdxElementsSum(array);

            assert.strictEqual(actual, expected);
        });
    });
});

describe('arrayReverse', function() {
    const testData = [
        {array: [], expected: []},
        {array: [1,2], expected: [2,1]},
        {array: [1,2,3], expected: [3,2,1]}

    ];

    testData.forEach(function(data) {
        const {array, expected} = data;

        it(`Should return reverse ${expected} of array ${array}`, function() {
            const actual = arrayReverse(array);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('oddIdxCountInArray', function() {
    const testData = [
        {array: [], expected: 0},
        {array: [0,0,0], expected: 0},
        {array: [1,2,3,4], expected: 2},
        {array: [1,1,1,1], expected: 4},
        {array: [2,2,2,2], expected: 0},
        {array: [1,3,5,0], expected: 3}
    ];

    testData.forEach(function(data) {
        const {array, expected} = data;

        it(`Should return count ${expected} of odd indexes in array ${array}`, function() {
            const actual = oddIdxCountInArray(array);

            assert.strictEqual(actual, expected);
        });
    });
});

describe('swapArray', function() {
    const testData = [
        {array: [], expected: []},
        {array: [1,2,3,4], expected: [3,4,1,2]},
        {array: [3,4,1,2], expected: [1,2,3,4]},
        {array: [1,2,3,4,5,6], expected: [4,5,6,1,2,3]},
    ];

    testData.forEach(function(data) {
        const {array, expected} = data;

        it(`Should return swapped array ${expected} of array ${array}`, function() {
            const actual = swapArray(array);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('dayName', function() {
    const testData = [
        {dayNumber: 1, expected: 'Monday'},
    ];

    testData.forEach(function(data) {
        const {dayNumber, expected} = data;

        it(`Should return ${expected} of day number ${dayNumber}`, function() {
            const actual = dayName(dayNumber);

            assert.strictEqual(actual, expected);
        });
    });
    describe('Throws error when number is not in range 1-7', function() {
        const testData = [-1, -2, 0, 8, 100];
    
        testData.forEach(function(dayName) {
            it(`Should throw error if number is ${dayName}`, function() {
                assert.throw(function(){
                    dayName(dayNumber);
                });
            });
        });
    });
});

describe('twoPointsDistance', function() {
    const testData = [
        {x1: 0, y1: 0, x2: 0, y2: 0, expected: 0},
        {x1: 1, y1:2, x2:3, y2:4, expected: 2.8284271247461903},
        {x1: 1, y1:0, x2:3, y2:0, expected: 2},
        {x1: 0, y1:0, x2:3, y2:0, expected: 3},
        {x1: 0, y1:1, x2:0, y2:1, expected: 0},
        {x1: 0, y1:1, x2:0, y2:5, expected: 4}
    ];

    testData.forEach(function(data) {
        const {x1, y1, x2, y2, expected} = data;

        it(`Should return distance ${expected} between points ${x1},${y1} and ${x2}, ${y2}`, function() {
            const actual = twoPointsDistance(x1, y1, x2, y2);

            assert.strictEqual(actual, expected);
        });
    });
});

describe('getNumberAsString', function() {
    const testData = [
        {number: 0, expected: 'zero'},
        {number: 1, expected: 'one'},
        {number: 2, expected: 'two'},
        {number: 5, expected: 'five'},
        {number: 9, expected: 'nine'},
        {number: 10, expected: 'ten'},
        {number: 19, expected: 'nineteen'},
        {number: 21, expected: 'twenty one'},
        {number: 38, expected: 'thirty eight'},
        {number: 100, expected: 'one hundred'},
        {number: 101, expected: 'one hundred one'},
        {number: 112, expected: 'one hundred twelve'},
        {number: 137, expected: 'one hundred thirty seven'},
        {number: 510, expected: 'five hundred ten'},
        {number: 999, expected: 'nine hundred ninety nine'}
    ];

    testData.forEach(function(data) {
        const {number, expected} = data;

        it(`Should return string ${expected} number ${number}`, function() {
            const actual = getNumberAsString(number);

            assert.strictEqual(actual, expected);
        });
    });
    describe('Throws error when number is not in range 0-999', function() {
        const testData = [-10000, -1000, -1, -2, , 1000, 1001, 10000];
    
        testData.forEach(function(getNumberAsString) {
            it(`Should throw error if number is ${getNumberAsString}`, function() {
                assert.throw(function(){
                    getNumberAsString(number);
                });
            });
        });
    });
});

describe('getIntNumber', function() {
    const testData = [
        {stringNumber: '', expected: undefined},
        {stringNumber: 'zero', expected: 0},
        {stringNumber: 'one', expected: 1},
        {stringNumber: 'five', expected: 5},
        {stringNumber: 'nine', expected: 9},
        {stringNumber: 'ten', expected: 10},
        {stringNumber: 'twenty', expected: 20},
        {stringNumber: 'forty', expected: 40},
        {stringNumber: 'twenty one', expected: 21},
        {stringNumber: 'thirty six', expected: 36},
        {stringNumber: 'seventy two', expected: 72},
        {stringNumber: 'ninety nine', expected: 99},
        {stringNumber: 'one hundred', expected: 100},
        {stringNumber: 'two hundred', expected: 200},
        {stringNumber: 'nine hundred', expected: 900},
        {stringNumber: 'one hundred one', expected: 101},
        {stringNumber: 'one hundred eleven', expected: 111},
        {stringNumber: 'two hundred ninety', expected: 290},
        {stringNumber: 'three hundred six', expected: 306},
        {stringNumber: 'nine hundred ninety', expected: 990},
        {stringNumber: 'one hundred twenty one', expected: 121},
        {stringNumber: 'two hundred thirty six', expected: 236},
        {stringNumber: 'nine hundred ninety nine', expected: 999},
        {stringNumber: 'eight hundred forty eight', expected: 848}
    ];

    testData.forEach(function(data) {
        const {stringNumber, expected} = data;

        it(`Should return ${expected} of string number ${stringNumber}`, function() {
            const actual = getIntNumber(stringNumber);

            assert.strictEqual(actual, expected);
        });
    });
    describe('Throws error when number is not in range 0-999', function() {
        const testData = [-10000, -1000, -1, -2, 1000, 1001, 100000];

        testData.forEach(function(getIntNumber) {
            it(`Should throw error if string number is ${getIntNumber}`, function() {
                assert.throw(function() {
                    getIntNumber(stringNumber);
                });
            });
        });
    });
})