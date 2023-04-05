<template>
  <v-card-title :style="`color: ${localColor} !important;`">
    <slot></slot>
  </v-card-title>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class SettingsTitle extends Vue {
  @Prop() color!: string
  localColor: string = ""

  created () {
    this.localColor = this.color
  }
}
</script>
