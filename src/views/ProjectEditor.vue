<template>
    <div class="home">
        <div class="submit-area" style="text-align: right; padding-right: 5px;">
            <md-button class="md-raised md-primary">Submit</md-button>
        </div>
        <inline-editor :model="activeDemo"></inline-editor>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InlineEditor from "@/components/InlineEditor.vue";
import { solarSystem } from "@/store/examples";
@Component({
    components: {
        InlineEditor
    }
})
export default class ProjectEditorView extends Vue {
    activeDemo = solarSystem;
    mounted() {
        const page = this.$route.params["starter"];
        if (page == "solar-system") {
            this.activeDemo = solarSystem;
        }
    }
}
</script>
<style lang="css">
</style>