
var canvas, c;
var W, H;
var color_text = get_random_color();
var gravity = 1;
var friction = 0.5;
let circle1;
let circle2;


function random(max = 1, min = 0) {
    return Math.random() * (max - min) + min;
}

// Sets up the canvas and begins the animation
function init() {
    canvas = document.getElementById("ctx");
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    c = canvas.getContext("2d");
    circle1 = new Circle(300, 300, 100, 'black');
    circle2 = new Circle(10, 10, 30, 'red');
    animate();
}

function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function () {
        this.draw();
    };

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    };
}

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

let mouse = {
    x: 10,
    y: 10
};

window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener('resize', function () {

    init();
});

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, W, H);
    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();
    if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
        circle1.color = "red";
    } else {
        circle1.color = "black";
    }
}

window.onload = init;


/*
class Circle {
    constructor() {
        this.radius = random(20, 5);
        this.x = random(W - this.radius, this.radius);
        this.y = random(H - this.radius, this.radius);
        this.dx = Math.random() - 0.5;
        this.dy = Math.random() - 0.5;
        this.color = get_random_color();
        this.d = 0;
        this.minRadius = minRadius;
    }
    draw() {
        this.d = Math.sqrt(Math.pow(W / 2 - this.x, 2) + Math.pow(H / 2 - this.y, 2));
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineWidth = 1;

        if (this.d < 250 + this.radius) {
            c.fillStyle = "lightgray";
            c.fill();
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50
                && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                    this.x += this.dx * 100;
                    this.y += this.dy * 100;
                    c.fillStyle = "red";
                    c.fill();
                }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }
        } else {
            c.fillStyle = "red";
            c.fill();
        }

    }


    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        if (this.d < 250 + this.radius) {
            this.x += this.dx * 100;
            this.y += this.dy * 100;
        }
        else {
            this.x += this.dx * 10;
            this.y += this.dy * 10;
        }
        this.draw();
    }
}*/