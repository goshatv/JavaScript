describe('Canvas balls', function () {
    describe('Unique color of ball', function () {
        const testData = [
            { expected: false }
        ];

        testData.forEach(function (data) {
            const { expected } = data;
            it(`Should return ${expected} if colors are diference`, function () {
                var circles = [];
                circles.push({ x: 1, y: 1, r: 10, vx: 5, vy: 6, color: getRandomColor() })
                circles.push({ x: 2, y: 2, r: 15, vx: 4, vy: 3, color: getRandomColor() })
                circles.push({ x: 2, y: 2, r: 12, vx: 2, vy: 4, color: getRandomColor() })
                circles.push({ x: 2, y: 2, r: 15, vx: 4, vy: 3, color: getRandomColor() })

                const actual = circles[0].color === circles[1].color === circles[2].color === circles[3].color;
                assert.strictEqual(expected, actual);
            });
        });
    });

    describe('Possibility to add more than 1 ball', function () {
        const testData = [
            { expected: 4 }
        ];

        testData.forEach(function (data) {
            const { expected } = data;
            it(`Should return count ${expected} of balls in array`, function () {
                var circles = [];
                circles.push({ x: 1, y: 1, r: 10, vx: 5, vy: 6, color: getRandomColor() })
                circles.push({ x: 2, y: 2, r: 15, vx: 4, vy: 3, color: getRandomColor() })
                circles.push({ x: 2, y: 2, r: 12, vx: 2, vy: 4, color: getRandomColor() })
                circles.push({ x: 2, y: 2, r: 15, vx: 4, vy: 3, color: getRandomColor() })

                const actual = circles.length;
                assert.strictEqual(expected, actual);
            });
        });
    });

    describe('Possibility of balls move', function () {
        const testData = [
            { expected: false, x: 0, y: 0 }
        ];

        testData.forEach(function (data) {
            const { expected } = data;
            it(`Should return count ${expected} of balls in array`, function () {
                var circles = [];
                circles.push({ x: 0, y: 0, r: 10, vx: 5, vy: 6, color: getRandomColor() })
                animate();

                const actual = circles[0].x === x || circles[0].y === y;
                assert.strictEqual(expected, actual);
            });
        });
    });
});
