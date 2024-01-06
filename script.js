$(function() {
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var WIDTH = 320;
    var HEIGHT = 320;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    clearCanvas();

    var particles = [];
    for (var i = 0; i < WIDTH; i++) {
        particles.push({
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            r: Math.random() * 2 + 1
        })
    }
    