<template>
  <div>
    <v-parallax class="custom-parallax" height="900"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <main-header/>
    </v-parallax>

    <div style="height: 5000px"></div>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'clear'
})
export default class Pages extends Vue {

}
</script>
<style>
  .custom-parallax.v-parallax .v-parallax__content {
    display: block;
  }
</style>
