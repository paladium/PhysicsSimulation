<template>
    <div class="text">
        <h1>1. Simple animation</h1>
        <p class="md-body-2">Let`s make our scene a bit more fun by adding some animation</p>
        <p class="md-body-2">Try changing the color below to switch the animation</p>
        <inline-editor :model="demos.simpleAnimation"></inline-editor>
        <h1>2. Combining animation</h1>
        <p class="md-body-2">We can combine multiple animations to create cool effects</p>
        <inline-editor :model="demos.simpleAnimationCombined"></inline-editor>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import InlineEditor from './InlineEditor.vue'
import {simpleAnimation, simpleAnimationCombined} from '@/store/examples'

@Component({
    components: {InlineEditor}
})
export default class SimpleAnimation extends Vue
{
    demos = {
        simpleAnimation,
        simpleAnimationCombined
    }
}
</script>