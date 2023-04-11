<template></template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'clear'
})
export default class Logout extends Vue {
  created () {
    this.$store.state.user = {}
    this.$router.push('/')
  }
}
</script>
