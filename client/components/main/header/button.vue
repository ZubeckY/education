<template>
  <v-btn @click="routing(buttonLink)"
         v-text="buttonTitle" text
         class="ma-0 pa-0"
         color="indigo"></v-btn>
</template>
<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
@Component
export default class Button extends Vue {
  @Prop() buttonLink!: string
  @Prop() buttonTitle!: string

  routing (link: string) {
    this.$router.push(link)
  }
}
</script>
