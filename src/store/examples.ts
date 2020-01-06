import { InlineEditorModel } from '@/models/editor';

export const drawCircle = <InlineEditorModel>{
    title: "Drawing circle",
    description: "Let`s use the fabric.Circle command to draw a circle",
    code: `var circle = new fabric.Circle({
    radius: 20,
    fill: "green",
    left: 100,
    top: 100
});
canvas.add(circle);`
};
export const drawTriangle = <InlineEditorModel>{
    title: "Drawing triangle",
    description: "Let`s use the fabric.Triangle command to draw a triangle",
    code: `var triangle = new fabric.Triangle({
    width: 50,
    height: 50,
    fill: "red",
    left: 100,
    top: 100
});
canvas.add(triangle);`
};

export const drawText = <InlineEditorModel>{
    title: "Drawing text",
    description: "Let`s use the fabric.Text command to draw a text",
    code: `var text = new fabric.Text('Hello everyone', {
    left: 100,
    top: 100,
    fill: "black"
});
canvas.add(text);`
};

export const simpleAnimation = <InlineEditorModel>{
    title: "Simple animation",
    description: "Let`s use the fabric.animate command to animate any object",
    code: `var triangle = new fabric.Triangle({
        width: 50,
        height: 50,
        fill: "red",
        left: 100,
        top: 100
    });
triangle.animate('left', '+=100', {
    onChange: canvas.renderAll.bind(canvas)
});
canvas.add(triangle);`
};

export const simpleAnimationCombined = <InlineEditorModel>{
    title: "Simple animation",
    description: "Let`s use the fabric.animate command to animate any object",
    code: `var triangle = new fabric.Triangle({
        width: 50,
        height: 50,
        fill: "red",
        left: 100,
        top: 100
    });
triangle.animate('left', '+=100', {
    onChange: canvas.renderAll.bind(canvas)
});
triangle.animate('angle', '+=360', {
    onChange: canvas.renderAll.bind(canvas)
});
canvas.add(triangle);`
};

export const physicalAnimation = <InlineEditorModel>{
    title: "Physical animation",
    description: "Let`s use the awesome library to make a physical animation",
    code: `var circle = new fabric.Circle({
        radius: 10,
        fill: "red",
        left: 0,
        top: 100
    });
    circle.flipY = true;

canvas.add(circle);

var line = new fabric.Line([-200, 0, 200, 0],{
    fill: 'red',
    stroke: 'red',
    strokeWidth: 5,
});
line.flipY = true;
canvas.add(line);
var world = new p2.World({
    gravity:[0, -9.82]
});

// Create an empty dynamic body
var circleBody = new p2.Body({
    mass: 5,
    position: [0, 100]
});

// Add a circle shape to the body
var circleShape = new p2.Circle({ radius: 10 });
circleBody.addShape(circleShape);

// ...and add the body to the world.
// If we don't add it to the world, it won't be simulated.
world.addBody(circleBody);

// Add a plane
let planeShape = new p2.Plane();
let planeBody = new p2.Body({
    position: [0, 0]
});
planeBody.addShape(planeShape);
world.addBody(planeBody);

var fixedTimeStep = 1 / 30; // seconds
var maxSubSteps = 10; // Max sub steps to catch up with the wall clock
var lastTime;
var currentTime = 0;
var maxSteps = 5000;
var currentSteps = 0;
// Animation loop
function animate(time){
    currentSteps++;
    if(currentSteps > maxSteps)
        return;
	requestAnimationFrame(animate);

    // Compute elapsed time since last render frame
    var deltaTime = lastTime ? (time - lastTime) / 1000 : 0;

    // Move bodies forward in time
    world.step(fixedTimeStep, deltaTime, maxSubSteps);

    // Render the circle at the current interpolated position
    circle.set('left', circleBody.position[0]);
    circle.set('top', -circleBody.position[1]);
    circle.set('angle', circleBody.angle);

    line.set('top', -planeBody.position[1]);
    line.set('left', planeBody.position[0]);

    canvas.requestRenderAll();
    lastTime = time;
}
// Start the animation loop
requestAnimationFrame(animate);
`
};