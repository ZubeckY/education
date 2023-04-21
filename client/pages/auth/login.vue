<template>
  <v-form @submit.prevent
          v-model="valid"
          class="pa-2">
    <v-card-title class="pa-2">
      <v-row>
        <v-col cols="auto">Вход</v-col>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn icon color="error" @click="routing('/')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text class="pa-2">
      <v-text-field v-model="model.login"
                    label="Логин"
                    :rules="[rules.required]"/>

      <v-text-field label="Пароль"
                    v-model="model.password"
                    @click:append="show = !show"
                    :type="show ? 'text' : 'password'"
                    :rules="[rules.required, rules.min]"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"/>
    </v-card-text>
    <v-card-actions class="my-0 py-0">
      <v-btn class="ma-0 pa-0" color="primary"
             @click="routing('/auth/forgot-password')"
             text plain
             style="text-transform: none">
        Забыли пароль?
      </v-btn>
    </v-card-actions>
    <v-card-actions class="mt-0 pt-0">
      <div>Нет аккаунта?</div>
      <v-btn class="ma-0 pa-0 ml-3" color="primary"
             @click="routing('/auth/reg')"
             text plain small>
        Создать аккаунт
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-0 pa-0" color="primary"
             @click="tryLogin"
             :disabled="!valid"
             text plain small>
        Вход
      </v-btn>
    </v-card-actions>
  </v-form>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class Login extends Vue{
  model: any = {
    login: '',
    password: ''
  }

  show: boolean = false
  valid: boolean = false
  rules: any = {
    required: (value: any) => !!value || 'Обязательное поле!',
    min: (v:any ) => v.length >= 8 || 'Минимум 8 символов!',
  }

  routing (link: string) {
    this.$router.push(link)
  }

  tryLogin () {

  }
}
</script>
