<template>
    <md-card>
        <md-card-header>
            <div class="md-title">{{model.title}}</div>
        </md-card-header>
        <md-card-content>
            <p>{{model.description}}</p>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                    <MonacoEditor
                        height="400"
                        theme="vs-dark"
                        language="javascript"
                        :value="model.code"
                        @change="runCode"
                    />
                </div>
                <div class="md-layout-item">
                    <canvas id="canvas" ref="canvas"></canvas>
                </div>
            </div>
        </md-card-content>
    </md-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { InlineEditorModel, PhysicalObject } from "@/models/editor";
import MonacoEditor from "monaco-editor-vue";
import { fabric } from "fabric";
import p2 from "p2";

@Component({
    components: { MonacoEditor }
})
export default class InlineEditor extends Vue {
    @Prop()
    model!: InlineEditorModel;

    canvas!: fabric.Canvas;

    runCode(value: string) {
        this.canvas.clear();
        try {
            const code = new Function("canvas", "p2", "PhysicalObject", "simulate", value);
            code(this.canvas, p2, PhysicalObject, this.simulate);
        } catch (e) {
            console.log("Some error", e);
        }
    }
    mounted() {
        const canvasObject = this.$refs.canvas as HTMLCanvasElement;
        this.canvas = new fabric.Canvas(canvasObject);
        this.canvas.setHeight(400);
        this.canvas.setWidth(400);
        this.canvas.setViewportTransform([
            1,
            0,
            0,
            1,
            this.canvas.getWidth() / 2,
            this.canvas.getHeight() / 2
        ]);
        this.runCode(this.model.code);
    }

    private simulate(world: p2.World, canvas: fabric.Canvas, ...objs: PhysicalObject[]) {
        var fixedTimeStep = 1 / 30; // seconds
        var maxSubSteps = 10; // Max sub steps to catch up with the wall clock
        var lastTime = 0;
        var currentTime = 0;
        var maxSteps = 5000;
        var currentSteps = 0;
        // Animation loop
        const animate = (time: number) =>{
            currentSteps++;
            if (currentSteps > maxSteps) return;
            requestAnimationFrame(animate);

            // Compute elapsed time since last render frame
            var deltaTime = lastTime ? (time - lastTime) / 1000 : 0;

            // Move bodies forward in time
            world.step(fixedTimeStep, deltaTime, maxSubSteps);

            // Render the circle at the current interpolated position

            objs.forEach((obj) => {
                obj.step();
            });
            canvas.requestRenderAll();
            lastTime = time;
        }
        // Start the animation loop
        requestAnimationFrame(animate);
    }
}
</script>
<style lang="css" scoped>
#canvas {
    width: 100%;
    height: 400px;
}
</style>