declare module 'vue-material' {
    import Vue from "vue";

    type Component = "MdCore"
        | "MdAvatar"
        | "MdBackdrop"
        | "MdBottomBar"
        | "MdButton"
        | "MdButtonToggle"
        | "MdCard"
        | "MdCheckbox"
        | "MdChips"
        | "MdDialog"
        | "MdDivider"
        | "MdFile"
        | "MdIcon"
        | "MdImage"
        | "MdInputContainer"
        | "MdLayout"
        | "MdList"
        | "MdMenu"
        | "MdProgress"
        | "MdRadio"
        | "MdSelect"
        | "MdSidenav"
        | "MdSnackbar"
        | "MdSpeedDial"
        | "MdSpinner"
        | "MdSubheader"
        | "MdSwitch"
        | "MdTable"
        | "MdTabs"
        | "MdToolbar"
        | "MdTooltip"
        | "MdWhiteframe";

    type Options =
        { install: Vue.PluginFunction<never> } &
        { [key in Component]: Vue.PluginFunction<never> };

    const options: Options;
    export default options;
}