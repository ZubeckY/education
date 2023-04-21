<template>
  <div>
    <div v-if="!isSend">
      <v-form @submit.prevent
              v-model="valid"
              class="pa-2">
        <v-card-title class="pa-2">
          <v-row>
            <v-col cols="auto">Регистрация</v-col>
            <v-spacer/>
            <v-col cols="auto">
              <v-btn icon color="error" @click="routing('/')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text class="pa-2">
          <v-text-field v-model="model.name"
                        :rules="[rules.required]">
            <template v-slot:label>
              <is-required label="Имя"/>
            </template>
          </v-text-field>

          <v-text-field v-model="model.surname"
                        :rules="[rules.required]">
            <template v-slot:label>
              <is-required label="Отчество"/>
            </template>
          </v-text-field>

          <v-text-field label=""
                        v-model="model.patronymic"
                        :rules="[rules.required]">
            <template v-slot:label>
              <is-required label="Фамилия"/>
            </template>
          </v-text-field>

          <date-picker :value="model.bd"
                       :isRequired="true"
                       :label="'Дата рождения'"
                       :rules="[rules.required]"
                       @save="changeDate">
          </date-picker>

          <v-text-field label="Email"
                        v-model="model.email"
                        :rules="[rules.required]">
            <template v-slot:label>
              <is-required label="Email"/>
            </template>
          </v-text-field>

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
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class Reg extends Vue {
  valid: boolean = false
  isSend: boolean = false
  model:any = {
    name: '',
    surname: '',
    patronymic: '',
    bd: '',
    email: '',
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
  changeDate (value: string) {
    return this.model.bd = value
  }
  tryReg () {
    this.isSend = true
  }
}
</script>
