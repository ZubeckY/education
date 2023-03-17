<template>
  <div style="max-width: 500px">
    <div v-if="!isSend">
      <v-form @submit.prevent
              v-model="valid"
              class="pa-2">
        <v-card-title class="pa-2">Забыли пароль</v-card-title>
        <v-card-text class="pa-2">
          <v-text-field label="Введите e-mail"/>
        </v-card-text>

        <v-card-actions class="my-0 py-0">
          <v-btn class="ma-0 pa-0" color="primary"
                 @click="back"
                 text plain>
            Отмена
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="ma-0 pa-0" color="primary"
                 :disabled="!valid"
                 @click="trySend"
                 text plain>
            Далее
          </v-btn>
        </v-card-actions>
      </v-form>
    </div>

    <div v-else>
      <v-card-title class="pa-2 justify-center">Вам отправлено письмо!</v-card-title>
      <v-card-text class="pa-2">На указанную Вами почту, было отправлено письмо. Которое содержит в себе ссылку и инструкцию по восстановлению доступа</v-card-text>
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
export default class ForgotPassword extends Vue {
  valid: boolean = false
  isSend: boolean = false
  back () {
    return this.$router.back()
  }
  routing (link: string) {
    this.$router.push(link)
  }
  trySend () {
    this.isSend = true
  }
}
</script>
