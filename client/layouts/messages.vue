<template>
  <v-app>
    <main-header/>
    Сообщения
    <nuxt/>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Messages extends Vue {

}
</script>

