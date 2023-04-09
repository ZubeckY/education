<template>

</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Ban extends Vue {
  @Prop({required: true}) item!: any
}
</script>
