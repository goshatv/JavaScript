describe('Canvas balls', function () {
    describe('Update of a balls coordinates', function () {
        const testData = [
            { x: -9, y: 11, velX: -10, velY: 10 },
            { x: 1, y: 2, velX: -3, velY: 4 },
            { x: 11, y: -11, velX: 10, velY: -10 },
            { x: 0, y: 0, velX: 30, velY: -30 },
            { x: 1, y: 0, velX: 1, velY: -10 },
            { x: 0, y: 1, velX: 10, velY: 1 }
        ];

        testData.forEach(function (data) {
            const { x, y, velX, velY } = data;
            it(`Should update coordinates of a ball`, function () {
                var ball = new Ball();
                ball.x = x;
                ball.y = y;
                ball.velX = velX;
                ball.velY = velY;
                ball.color = "#00000";
                ball.size = 20;

                ball.update();

                assert.notEqual(x, ball.x);
                assert.notEqual(y, ball.y);
            });
        });
    });
    describe('Return random int value between two ranges', function () {
        const testData = [
            { min: 1, max: 10, expected: false },
            { min: 1, max: 100, expected: false },
            { min: 1, max: 1000, expected: false },
            { min: 1, max: 100000, expected: false }
        ];

        testData.forEach(function (data) {
            const { min, max, expected } = data;
            it(`Should return random number`, function () {
                var actRandom1 = random(min, max);
                var actRandom2 = random(min, max);
                var actual = (actRandom1 === actRandom2);

                assert.strictEqual(expected, actual);
            });
        });
    });
    describe('Possibility to create new balls', function () {
        const testData = [
            { x: 0, y: 0, velX: 10, velY: -10, color: '#00000', size: 20 },
            { x: 1, y: 1, velX: 30, velY: -40, color: '#100g0f', size: 10 },
            { x: 100, y: 100, velX: 100, velY: -100, color: '#fffff0', size: 100 }
        ];

        testData.forEach(function (data) {
            const { x, y, velX, velY, color, size } = data;
            it(`Should return boolean about all ball properties`, function () {
                var ball = new Ball();
                ball.x = x;
                ball.y = y;
                ball.velX = velX;
                ball.velY = velY;
                ball.color = color;
                ball.size = size;

                assert.strictEqual(x, ball.x);
                assert.strictEqual(y, ball.y);
                assert.strictEqual(velX, ball.velX);
                assert.strictEqual(velY, ball.velY);
                assert.strictEqual(color, ball.color);
                assert.strictEqual(size, ball.size);
            });
        });
    });
});
