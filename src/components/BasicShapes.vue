<template>
    <div class="basic-shapes">
        <h1>We will explore basic shapes</h1>
        <inline-editor :model="model"></inline-editor>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import InlineEditor from './InlineEditor.vue'
import {basicShapes} from '@/store/examples'

@Component({
    components: {InlineEditor}
})
export default class BasicShapes extends Vue
{
    model = basicShapes;
}
</script>