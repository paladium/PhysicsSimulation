<template>
    <div class="text">
        <h1>1. Physical animation</h1>
        <p class="md-body-2">Let`s see how we can make a physical animation</p>
        <p class="md-body-2">Try changing the values below to see how the physics will change</p>
        <inline-editor :model="demos.physicalAnimation"></inline-editor>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import InlineEditor from './InlineEditor.vue'
import {physicalAnimation} from '@/store/examples'

@Component({
    components: {InlineEditor}
})
export default class PhysicalAnimation extends Vue
{
    demos = {
        physicalAnimation,
    }
}
</script>