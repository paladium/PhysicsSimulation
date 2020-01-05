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