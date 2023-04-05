<template>
  <v-card-text :style="`color: ${localColor} !important;`">
    <slot></slot>
  </v-card-text>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class SettingsText extends Vue {
  @Prop() color!: string
  localColor: string = ""

  created () {
    this.localColor = this.color
  }
}
</script>
