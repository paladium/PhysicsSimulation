<template>
    <div class="text">
        <h1>Final project</h1>
        <p class="md-body-2">Using the knowledge acquired implement one of the projects in physics, choose a starter project and finish implementing it</p>
        <md-list>
            <md-list-item>
                <md-icon>3d_rotation</md-icon>
                <span class="md-list-item-text">Solar system</span>
            </md-list-item>
            <md-list-item>
                <md-icon>flight_takeoff</md-icon>
                <span class="md-list-item-text">Plane simulation</span>
            </md-list-item>
            <md-list-item>
                <md-icon>contactless</md-icon>
                <span class="md-list-item-text">Light simulation through a lens</span>
            </md-list-item>
            <md-list-item>
                <md-icon>outdoor_grill</md-icon>
                <span class="md-list-item-text">Heat simulation</span>
            </md-list-item>
            <md-list-item>
                <md-icon>sports_tennis</md-icon>
                <span class="md-list-item-text">Newton`s laws</span>
            </md-list-item>
        </md-list>
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import InlineEditor from './InlineEditor.vue'

@Component({
    components: {InlineEditor}
})
export default class SimpleAnimation extends Vue
{
    demos = {
    }
}
</script>