<template>
  <div class="fill-height">
    <iframe width="100%" height="600px" frameborder="0" :src="'/messages/'"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'system'
})
export default class Messages extends Vue {

}
</script>
