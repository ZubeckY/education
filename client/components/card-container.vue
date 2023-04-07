<template>
  <v-card class="mx-auto pa-0"
          :color="color"
          elevation="0"
          rounded="0"
          width="680">
    <slot></slot>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class CardContainer extends Vue {
  @Prop() color?:string
}
</script>
