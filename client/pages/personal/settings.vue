<template>
  <v-container>

    <!--
      todo:
        1) Вынести color-picker в отдельный файл
        2) Сделать color picker для текста
        =
        =
        Так же, нужно сдеать админ панель:
        1) главную админки в виде панели, в следующем виде:
          Пунккт  |   Страница со всяким
          Пункт   |
          Пункт   |
                  |
                  |
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
        2.6)
        2.7) Подтверждения:
          Далее в системе, пользователи не смогут делать всё самостоятельнр,
          и нужно будет подготовить следующую таблицу:
            2.7.1) id обращения
            2.7.2) id пользователя
            2.7.4) Имя Фамилия пользователя
            2.7.5)
            2.7.6) Кнопки:
          2.7.6.1) Подробнее:
          2.7.6.2) Вердикт:
            При нажатии на кнопку "вердмкт", будет открываться диалоговое окно,
            в котором нужно будет либо подтвердить, либо сбросить обращение
        3) При создании страницы, должны быть задействованы layout и store
        4) Важно сделать, чтобы не все могли попадать на админ странинцу,
          а только определённые роли!
        5) Так же, важно. чтобы при перезагрузке старицы, либо при её,
          пункт не сбрасывался, а оставался тем же.
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

        <v-dialog v-model="dialog" width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on"
                   v-bind="attrs" dark
                   :color="params.color"
                   v-text="'Изменить цвет фона'"/>
          </template>
          <v-card>
            <v-color-picker dot-size="22"
                            :mode.sync="mode"
                            v-model="params.color"
                            swatches-max-height="180"/>
            <v-select v-model="mode"
                      :items="modes"
                      class="mx-auto"
                      style="max-width: 280px; width: 100%;"/>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text
                     @click="dialog = false">
                Изменить
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
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

  mode: string = 'rgba'
  modes: string[] = ['rgba', 'hsla', 'hexa']

  valid: boolean = false

  generalPhoto: boolean = true
  dialog: boolean = false

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

}
</script>
