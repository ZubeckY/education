<template>
  <v-container>
    <v-card elevation="0"
            class="ma-0 pa-0"
            :color="user.color">
      <main-header :color="user.colorText"/>
    </v-card>
    <!--
      todo:
        Так же, нужно сдеать админ панель:
        2) В админ панели должны быть слеудющие пункты:
          2.1) Главная:
          - Т.з на гланкую странику (пока остаётся пустой)
        2.4) Учебный процесс
        2.5) Новости и рассылка:
          тут будут создаваться всякие посты от админов
    -->

    <v-form @submit.prevent
            v-model="valid">
      <v-card class="pa-2">

        <v-text-field label="Имя"
                      v-model="user.name"
                      :rules="[rules.required]"/>

        <v-text-field label="Фамилия"
                      v-model="user.secondName"
                      :rules="[rules.required]"/>

        <v-text-field label="Фото профиля"
                      v-model="user.img"/>

        <v-checkbox v-model="generalPhoto" label="Общий фон"/>

        <v-text-field :disabled="generalPhoto"
                      v-model="user.background"
                      label="Цвет заднего фона"/>

        <personal-settings-color-background :color="user.color"
                                            @emitBackground="emitBackground"/>
        <personal-settings-color-text :color="user.colorText"
                                      @emitText="emitText"/>

      </v-card>

      <v-card-actions>
        <v-spacer/>
        <v-btn text color="primary"
               :disabled="!valid"
               @click="save">
          Сохранить
        </v-btn>
        <v-btn text color="primary"
               :disabled="!valid"
               @click="routing('/personal')">
          Отмена
        </v-btn>
      </v-card-actions>

    </v-form>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'clear'
})
export default class Settings extends Vue {
  user: any = {
    name: "",
    secondName: "",
    img: "",
    background: "",
    color: "",
  }

  valid: boolean = false

  generalPhoto: boolean = true


  rules: any = {
    required: (value: any) => !!value || 'Обязательное поле!',
  }

  created () {
    this.user = JSON.parse(JSON.stringify(this.$store.state.user))
  }

  @Watch ("user.img")
  changeBackground () {
    if (this.generalPhoto){
      this.user.background = this.user.img
    }
  }

  save(){
    this.$store.commit("change", this.user)
    this.$router.push("/personal")
  }

  emitBackground(value: string) {
    return this.user.color = value
  }
  emitText(value: string) {
    return this.user.colorText = value
  }

  routing (link: string) {
    return this.$router.push(link)
  }

}
</script>
