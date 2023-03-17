<template>
  <div></div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class Auth extends Vue {
  created () {
    this.$router.push('/auth/login')
  }
}
</script>
