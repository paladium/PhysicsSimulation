<template>
    <div class="home">
        <div v-if="activePage == 'basic-shapes'">
            <basic-shapes></basic-shapes>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasicShapes from '@/components/BasicShapes.vue'

@Component({
    components: {BasicShapes}
})
export default class Docs extends Vue {
    
    get activePage()
    {
        return this.$route.params['page'];
    }
}
</script>
<style lang="css">
</style>