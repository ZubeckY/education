<template>
  <v-progress-linear
    color="teal"
    indeterminate
    stream
  ></v-progress-linear>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component export default class IsLoading extends Vue {}
</script>

