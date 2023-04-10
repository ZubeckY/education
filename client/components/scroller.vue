<template><div class="scroller"><slot></slot></div></template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component export default class Scroller extends Vue {}
</script>
