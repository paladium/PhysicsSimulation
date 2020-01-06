import { InlineEditorModel } from '@/models/editor';

export const drawCircle = <InlineEditorModel>{
    title: "Drawing circle",
    description: "Let`s use the fabric.Circle command to draw a circle",
    code: `var circle = new fabric.Circle({
    radius: 20,
    fill: "green",
    left: 0,
    top: 0
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
    left: 0,
    top: 0
});
canvas.add(triangle);`
};

export const drawText = <InlineEditorModel>{
    title: "Drawing text",
    description: "Let`s use the fabric.Text command to draw a text",
    code: `var text = new fabric.Text('Hello everyone', {
    left: -100,
    top: 0,
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
        left: 0,
        top: 0
    });
triangle.animate('left', '+=50', {
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
        left: 0,
        top: 0
    });
triangle.animate('left', '+=50', {
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
        fill: "blue",
        left: 0,
        top: 100
    });
canvas.add(circle);

var line = new fabric.Line([-200, 0, 200, 0],{
    fill: 'red',
    stroke: 'red',
    strokeWidth: 5,
});
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
var circleShape = new p2.Circle({ radius: 20 });
circleBody.addShape(circleShape);

// ...and add the body to the world.
// If we don't add it to the world, it won't be simulated.
world.addBody(circleBody);

// Add a plane
let planeShape = new p2.Plane();
let planeBody = new p2.Body({
    position: [-200, 0]
});
planeBody.addShape(planeShape);
world.addBody(planeBody);

simulate(world, canvas, new PhysicalObject(circle, circleBody), new PhysicalObject(line, planeBody));
`
};