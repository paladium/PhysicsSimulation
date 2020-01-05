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
import { InlineEditorModel } from "@/models/editor";
import MonacoEditor from "monaco-editor-vue";
import { fabric } from "fabric";
import p2 from 'p2'

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
            const code = new Function("canvas", "p2", value);
            code(this.canvas, p2);
        } catch (e) {
            console.log("Some error", e);
        }
    }
    mounted() {
        const canvasObject = this.$refs.canvas as HTMLCanvasElement;
        this.canvas = new fabric.Canvas(canvasObject);
        this.canvas.setHeight(400);
        this.canvas.setWidth(400);
        this.runCode(this.model.code);
    }
}
</script>
<style lang="css" scoped>
#canvas {
    width: 100%;
    height: 400px;
}
</style>