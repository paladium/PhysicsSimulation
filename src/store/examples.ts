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