<template>
    <div class="text">
        <h1>1. We will explore basic shapes</h1>
        <p class="md-body-2">You can use simple commands to draw the shapes. First let`s explore the drawing of circles and triangles.</p>
        <p class="md-body-2">Try changing the example below to a different color</p>
        <inline-editor :model="demos.drawText"></inline-editor>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import InlineEditor from './InlineEditor.vue'
import {drawText} from '@/store/examples'

@Component({
    components: {InlineEditor}
})
export default class BasicShapes extends Vue
{
    demos = {
        drawText,
    }
}
</script>