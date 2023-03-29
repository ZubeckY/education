<template>

  <v-container>

    <v-form @submit.prevent
            v-model="valid">


      <v-card class="pa-2">
        <v-text-field
          label="Имя"
          v-model="params.name"
          :rules="[rules.required]"
          filled
        ></v-text-field>

        <v-text-field
          label="Фамилия"
          v-model="params.secondName"
          :rules="[rules.required]"
          filled
        ></v-text-field>

        <v-text-field
          label="Фото профиля"
          v-model="params.img"
          filled
        ></v-text-field>

        <v-checkbox v-model="generalPhoto"

                    label="Общий фон"

        ></v-checkbox>

        <v-text-field
          :disabled="generalPhoto"
          label="Бэкграунд"
          v-model="params.background"
          filled
        ></v-text-field>

        <v-dialog
          v-model="dialog"
          width="300"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :color="params.color"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Изменить цвет
            </v-btn>
          </template>

          <v-card>

            <v-color-picker
              dot-size="22"
              v-model="params.color"
              mode="rgba"
              swatches-max-height="180"
            ></v-color-picker>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                Изменить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>

      <v-card-actions>
        <v-spacer />
        <v-btn @click="save"
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
