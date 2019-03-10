var canvas = document.getElementById("my_canvas");
var c = canvas.getContext("2d");

var radius = 15;

var container = {
    x: 0,
    y: 0,
    width: 600,
    height: 300
};

var circles = [];

canvas.onclick = (e) => {
    circles.push({
        x: e.layerX,
        y: e.layerY,
        r: radius,
        vx: getRandomNumber(10),
        vy: getRandomNumber(10),
        color: getRandomColor()
    });
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animate() {
    c.fillStyle = "#fff";
    c.fillRect(container.x, container.y, container.width, container.height);

    for (var i = 0; i < circles.length; i++) {
        c.fillStyle = circles[i].color;
        c.beginPath();
        c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
        c.fill();

        if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
            circles[i].vx = -circles[i].vx;
        }

        if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
            circles[i].vy = -circles[i].vy;
        }

        circles[i].x += circles[i].vx;
        circles[i].y += circles[i].vy;
    }

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);