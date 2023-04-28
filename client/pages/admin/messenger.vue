<template>
  <iframe class="ma-0 pa-0"
          width="100%" height="800"
          :src="'/messages/'"
          frameborder="0"
          allowfullscreen="true"
          allowtransparency="true"
          allowscriptaccess="always"/>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'admin'
})
export default class Messages extends Vue {

}
</script>
