<template>
    <md-card>
        <md-card-header>
            {{model.title}}
        </md-card-header>
        <md-card-content>
            <p>{{model.description}}</p>
            <div class="md-layout-item md-size-30">
                Code editor
            </div>
            <div class="md-layout-item">
                Output canvas
            </div>
        </md-card-content>
    </md-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {InlineEditorModel} from '@/models/editor'

@Component
export default class InlineEditor extends Vue
{ 
    @Prop()
    model!: InlineEditorModel;
}
</script>