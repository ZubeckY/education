<template>
  <v-container>
    <v-card elevation="0" class="pa-2">
      <card-container>
        <scroller>

          <v-card class="mx-2 my-4 pa-3">
            <v-card-title class="py-1 px-2">Личная информация</v-card-title>
            <v-card-text>
              <v-text-field label="Имя"
                            v-model="user.name"
                            :rules="[rules.required]"/>

              <v-text-field label="Фамилия"
                            v-model="user.secondName"
                            :rules="[rules.required]"/>

              <v-text-field label="Отчество"
                            v-model="user.patronymic"/>

              <date-picker :value="user.bd"
                           :label="'Дата рождения'"
                           :rules="[rules.required]"
                           @save="changeDate">
              </date-picker>
            </v-card-text>
          </v-card>

          <v-card class="mx-2 my-4 pa-3">
            <v-card-title class="py-1 px-2">Средство связи</v-card-title>
            <v-card-text>
              <v-text-field label="Телефон"
                            v-model="user.phone"
                            placeholder="+7-000-000-00-00"
                            v-mask="'+7-###-###-##-##'"/>

              <v-text-field label="Email"
                            placeholder="email@mail.ru"
                            v-model="user.email"/>

            </v-card-text>
          </v-card>

          <v-card class="mx-2 my-4 pa-3">
            <v-card-title class="py-1 px-2">Безопасность</v-card-title>
            <v-card-text>
              <v-dialog width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field label="Сменить пароль" readonly
                                v-bind="attrs" v-on="on"/>
                </template>

                <v-card>
                  <v-card-title>Смена пароля</v-card-title>

                  <v-card-text>
                    <v-text-field label="Пароль"></v-text-field>
                    <v-text-field label="Повторите пароль"></v-text-field>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="primary" text>Сохранить</v-btn>
                    <v-spacer/>
                    <v-btn color="primary" text>Отмена</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field label="Контрольный вопрос" readonly
                                v-bind="attrs" v-on="on"/>
                </template>

                <v-card>
                  <v-card-title>Контрольный вопрос</v-card-title>

                  <v-card-text>
                    <v-text-field label="Введите вопрос"></v-text-field>
                    <v-text-field label="Введите ответ"></v-text-field>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="primary" text>Сохранить</v-btn>
                    <v-spacer/>
                    <v-btn color="primary" text>Отмена</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-text>
          </v-card>

          <v-card class="mx-2 my-4 pa-3">
            <v-card-title class="py-1 px-2">Персонализация</v-card-title>
            <v-card-text>
              <!-- todo Сделать загрузчик фотографий -->
              <v-text-field label="Фото профиля"
                            v-model="user.img"/>

              <v-checkbox v-model="generalPhoto" label="Фото профиля совпадает с фоном"/>

              <!-- todo Сделать настройку, позволяющую сделать размытие фона -->

              <v-text-field :disabled="generalPhoto"
                            v-model="user.background"
                            label="Задний фон"/>

              <personal-settings-color-background :color="user.color"
                                                  class="d-block ma-2"
                                                  @emitBackground="emitBackground"/>

              <personal-settings-color-text :color="user.colorText"
                                            class="d-block ma-2"
                                            @emitText="emitText"/>
            </v-card-text>
          </v-card>

        </scroller>

        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="save">
            Сохранить
          </v-btn>
          <v-btn color="primary" text @click="routing('/personal')">
            Отмена
          </v-btn>
        </v-card-actions>

      </card-container>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'clear'
})
export default class Settings extends Vue {
  user: any = {}

  generalPhoto: boolean = true


  rules: any = {
    required: (value: any) => !!value || 'Обязательное поле!',
  }

  created () {
    this.user = JSON.parse(JSON.stringify(this.$store.state.user))
  }

  changeDate (value: string) {
    return this.user.bd = value
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
