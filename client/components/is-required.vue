<template>
  <span>{{ label }} <span class="error--text">*</span> </span>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class IsRequired extends Vue {
  @Prop({required: true}) label!: string
}
</script>

