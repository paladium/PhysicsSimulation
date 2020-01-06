<template>
    <md-app>
        <md-app-toolbar class="md-primary">
            <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                    <router-link to="/" class="md-title">Physics learning</router-link>
                </div>
            </div>
        </md-app-toolbar>

        <md-app-drawer md-permanent="full">
            <md-toolbar class="md-transparent" md-elevation="0"></md-toolbar>

            <md-list>
                <md-subheader>Introduction</md-subheader>

                <md-list-item @click="openPage('basic-shapes')">
                    <md-icon>check_box_outline_blank</md-icon>
                    <span class="md-list-item-text">Basic shapes</span>
                </md-list-item>

                <md-list-item @click="openPage('texts')">
                    <md-icon>text_format</md-icon>
                    <span class="md-list-item-text">Text</span>
                </md-list-item>

                <md-subheader>Animation</md-subheader>

                <md-list-item @click="openPage('simple-animation')">
                    <md-icon>linear_scale</md-icon>
                    <span class="md-list-item-text">Simple animation</span>
                </md-list-item>

                <md-list-item @click="openPage('physical-animation')">
                    <md-icon>gesture</md-icon>
                    <span class="md-list-item-text">Physical animation</span>
                </md-list-item>

                <md-subheader>Final project</md-subheader>
                <md-list-item @click="openPage('project-summary')">
                    <md-icon>forum</md-icon>
                    <span class="md-list-item-text">Final project summary</span>
                </md-list-item>
                <md-list-item>
                    <md-icon>toys</md-icon>
                    <span class="md-list-item-text">Your project</span>
                </md-list-item>
            </md-list>
        </md-app-drawer>

        <md-app-content>
            <router-view></router-view>
        </md-app-content>
    </md-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
    openPage(page: string) {
        this.$router.push({ name: "docs", params: { page: page } });
    }
}
</script>
<style lang="scss">
.md-app {
    height: 100vh;
}
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
    "default",
    (
        primary: md-get-palette-color(blue, A200),
        accent: md-get-palette-color(white, A200),
        theme: "light"
    )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>