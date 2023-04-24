<template>
  <messages-no-current-branch/>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'messages'
})
export default class Messages extends Vue {

}
</script>
