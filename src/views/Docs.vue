<template>
    <div class="home">
        <div v-if="activePage == 'basic-shapes'">
            <basic-shapes></basic-shapes>
        </div>
        <div v-if="activePage == 'texts'">
            <texts></texts>
        </div>
        <div v-if="activePage == 'simple-animation'">
            <simple-animation></simple-animation>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasicShapes from '@/components/BasicShapes.vue'
import Texts from '@/components/Texts.vue'
import SimpleAnimation from '@/components/SimpleAnimation.vue'
@Component({
    components: {BasicShapes, Texts, SimpleAnimation}
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