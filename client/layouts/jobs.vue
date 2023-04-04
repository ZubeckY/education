<template>
  <v-app>
    <nuxt/>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Jobs extends Vue {
  user: any = {}

  created () {
    this.user = JSON.parse(JSON.stringify(this.$store.state.user))
    if (this.user.role.includes(['admin'])) {

    } else {

    }
  }
}
</script>
