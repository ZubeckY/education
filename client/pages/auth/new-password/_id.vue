<template>
  <v-card elevation=0
          :loading="loading"
          :disabled="loading">

    <div v-if="loading">
      <v-skeleton-loader class="mx-auto mt-3 mb-6"
                         width="300" type="heading"/>

      <v-skeleton-loader class="mx-auto my-3"
                         width="300" type="text"/>

      <v-skeleton-loader class="mx-auto my-3"
                         width="300" type="text"/>

      <v-skeleton-loader class="mx-auto"
                         width="300" type="actions"/>
    </div>
    <div v-else>
      <div v-if="isFind">
        <v-form @submit.prevent
                v-model="valid"
                class="pa-2">
          <v-card-title>Смена пароля</v-card-title>
          <v-card-text>
            <v-text-field label="Пароль"
                          v-model="model.password"
                          @click:append="show.one = !show.one"
                          :type="show.one ? 'text' : 'password'"
                          :rules="[rules.required, rules.min]"
                          :append-icon="show.one ? 'mdi-eye' : 'mdi-eye-off'"/>
            <v-text-field label="Повторите пароль"
                          v-model="model.passwordRepeat"
                          @click:append="show.two = !show.two"
                          :type="show.two ? 'text' : 'password'"
                          :rules="[rules.required, rules.min]"
                          :append-icon="show.two ? 'mdi-eye' : 'mdi-eye-off'"/>
          </v-card-text>

          <v-card-actions class="pt-0">
            <v-spacer/>
            <v-btn :disabled="!valid"
                   color="primary"
                   text small plain>
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-form>
      </div>
      <div v-else>
        <auth-error-link/>
      </div>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class NewPassword extends Vue {
  valid: boolean = false
  loading: boolean = true
  isFind: boolean = false
  model: any = {
    password: '',
    passwordRepeat: ''
  }
  show: any = {
    one: false,
    two: false
  }
  rules: any = {
    required: (value: any) => !!value || 'Обязательное поле!',
    min: (v:any ) => v.length >= 8 || 'Минимум 8 символов!',
  }

  created () {
    let currentRoute = this.$router.currentRoute.params.id

    if (!currentRoute) {
      this.isFind = false
      this.loading = false
      return
    }

    this.loading = false
    this.isFind = true
  }
}
</script>
