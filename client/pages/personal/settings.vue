<template>
  <v-container>
    <!--
      todo:
        Так же, нужно сдеать админ панель:
        2) В админ панели должны быть слеудющие пункты:
          2.1) Главная:
          - Т.з на гланкую странику (пока остаётся пустой)
        2.2) Пользователи:
          2.2.1) Пользователи выводятся в виде таблицы, у которой есть поля:
            2.2.1.1) Id,
            2.2.1.2) Имя Фамилия
            2.2.1.3) Дата рождения
            2.2.1.4) Роль
            2.2.1.5) Статус активации
            2.2.1.6) Статус блокировки
            2.2.1.7) Кнопка редактировать
          2.2.2) К пользователям должен быть фильтр:
        2.3) Роли:
          Здесть можно создавать и редактивовать роли
        2.4) Учебный процесс
        2.5) Новости и рассылка:
          тут будут создаваться всякие посты от админов
        2.6) Подтверждения:
          Далее в системе, пользователи не смогут делать всё самостоятельнр,
          и нужно будет подготовить следующую таблицу:
            2.6.1) id обращения
            2.6.2) id пользователя
            2.6.4) Имя Фамилия пользователя
            2.6.5) Тема обращения
            2.6.6) Кнопки:
              2.6.6.1) Подробнее:
              2.6.6.2) Вердикт:
            При нажатии на кнопку "вердмкт", будет открываться диалоговое окно,
            в котором нужно будет либо подтвердить, либо сбросить обращение
        5) Так же, важно. чтобы при перезагрузке старицы, либо при её вызове,
          пункт меню не сбрасывался, а оставался тем же, что и активная страница.
    -->

    <v-form @submit.prevent
            v-model="valid">
      <v-card class="pa-2">

        <v-text-field label="Имя"
                      v-model="params.name"
                      :rules="[rules.required]"/>

        <v-text-field label="Фамилия"
                      v-model="params.secondName"
                      :rules="[rules.required]"/>

        <v-text-field label="Фото профиля"
                      v-model="params.img"/>

        <v-checkbox v-model="generalPhoto" label="Общий фон"/>

        <v-text-field :disabled="generalPhoto"
                      v-model="params.background"
                      label="Цвет заднего фона"/>

        <personal-settings-color :color="params.color"
                                 :buttonTitle="'Изменить цвет'"
                                 @emitColor="emitColor"  />
      </v-card>

      <v-card-actions>
        <v-spacer/>
        <v-btn text
               color="primary"
               @click="save"
               :disabled="!valid">
          Сохранить
        </v-btn>
      </v-card-actions>

    </v-form>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Settings extends Vue {
  params: any = {
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
    this.params = JSON.parse(JSON.stringify(this.$store.state.user))
  }

  @Watch ("params.img")
  changeBackground () {
    if (this.generalPhoto){
      this.params.background = this.params.img
    }
  }

  save(){
    this.$store.commit("change", this.params)
    this.$router.push("/personal")
  }

  emitColor(color: string){
    return this.params.color=color
  }

}
</script>
