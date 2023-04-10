<template></template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Personal extends Vue {
  created () {
    let userId = this.$store.state.user.id
    return userId ? this.$router.push('/personal/' + userId) : this.$router.push('/auth')
  }
}
</script>
