<template>
  <v-app>
    <div class="d-flex justify-center align-center"
         style="width: 100%; height: 100vh;">
      <v-card elevation="10" min-width="360">
        <nuxt/>
      </v-card>
    </div>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Auth extends Vue {}
</script>

