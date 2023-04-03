<template>
  <v-app>
    <main-header/>
    <nuxt/>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Default extends Vue {}
</script>

