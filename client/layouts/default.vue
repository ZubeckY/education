<template>
  <v-app>
    <main-header/>
    <nuxt/>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Default extends Vue {
  socket: any

  mounted () {
    // @ts-ignore
    this.socket = this.$nuxtSocket({
      channel: '/index'
    })

    /* Listen for events: */
    this.socket
      .on('someEvent', (msg: any, cb: any) => {

      })
  }
}
</script>

