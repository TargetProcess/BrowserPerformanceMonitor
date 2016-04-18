import Stats from 'stats.js';

var stats = new Stats();

requestAnimationFrame(function loop() {
    stats.update();
    requestAnimationFrame(loop);
});

document.body.appendChild( stats.dom );
