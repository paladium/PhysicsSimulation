<template>
    <div class="text">
        <h1>1. We will explore drawing text</h1>
        <p class="md-body-2">Now let`s see how we can use the text command to draw different texts..</p>
        <p class="md-body-2">Try changing the example below to a different color and text</p>
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