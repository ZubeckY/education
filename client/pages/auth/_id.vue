<template>
  <v-form v-model="valid" class="pa-2">
    <v-card-title class="pa-2">Название формы</v-card-title>
    <v-card-text class="pa-2">

    </v-card-text>
    <v-card-actions class="my-0 py-0">
      <v-btn class="ma-0 pa-0" color="primary"
             text plain>Кнопка</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-0 pa-0" color="primary"
             text plain>Кнопка</v-btn>
    </v-card-actions>
  </v-form>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class Auth extends Vue {
  valid: boolean = false

}
</script>
