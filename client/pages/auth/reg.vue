<template>
  <v-form @submit.prevent
          v-model="valid"
          class="pa-2">
    <v-card-title class="pa-2">Регистрация</v-card-title>
    <v-card-text class="pa-2">


      <checkbox-policy :iAcceptPolicy="model.iAcceptPolicy"
                       @emitAccept="emitAccept"/>
    </v-card-text>
    <v-card-actions class="mt-0 pt-0">
      <div>Есть аккаунт?</div>
      <v-btn class="ma-0 pa-0 ml-3" color="primary"
             @click="routing('/auth/login')"
             text plain small>
        Войдите
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-0 pa-0" color="primary"
             @click="tryReg"
             :disabled="!valid"
             text plain small>
        Регистрация
      </v-btn>
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
  model:any = {
    iAcceptPolicy: false
  }

  routing (link: string) {
    this.$router.push(link)
  }

  emitAccept (value:boolean) {
    return this.model.iAcceptPolicy = value
  }

  tryReg () {

  }
}
</script>
