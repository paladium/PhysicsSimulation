import {fabric} from 'fabric'
import p2 from 'p2'
export interface InlineEditorModel
{
    title: string;
    description: string;
    code: string;
}

export class PhysicalObject
{
    constructor(public renderer: fabric.Object, public physicalObject: p2.Body)
    {
        renderer.flipY = true;
    }
    step()
    {
        this.renderer.set({
            left: this.physicalObject.position[0],
            top: -this.physicalObject.position[1],
            angle: this.physicalObject.angle
        });
    }
}