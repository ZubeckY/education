<template>
  <div>
    <div v-if="!isSend">
      <v-form @submit.prevent
              v-model="valid"
              class="pa-2">
        <v-card-title class="pa-2">Регистрация</v-card-title>
        <v-card-text class="pa-2">

          <v-text-field label="Имя"
                        :rules="[rules.required]"/>
          <v-text-field label="Отчество"
                        :rules="[rules.required]"/>
          <v-text-field label="Фамилия"
                        :rules="[rules.required]"/>
          <v-text-field label="Дата рождения"
                        :rules="[rules.required]"/>
          <v-text-field label="Email"
                        :rules="[rules.required]"/>

          <checkbox-policy :isReq="true"
                           :iAcceptPolicy="model.iAcceptPolicy"
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
    </div>
    <div v-else>
      <v-card-title class="pa-2 justify-center">Вам отправлено письмо!</v-card-title>
      <v-card-text class="pa-2">На указанную Вами почту, было отправлено письмо. Для дальнейшего продолжения регистрации</v-card-text>
      <v-card-actions>
        <v-btn text block
               color="primary"
               @click="routing('/')">
          Ок
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class Reg extends Vue {
  valid: boolean = false
  isSend: boolean = false
  model:any = {
    iAcceptPolicy: false
  }
  rules: any = {
    required: (value: any) => !!value || 'Обязательное поле!',
  }

  routing (link: string) {
    this.$router.push(link)
  }

  emitAccept (value:boolean) {
    return this.model.iAcceptPolicy = value
  }

  tryReg () {
    this.isSend = true
  }
}
</script>
