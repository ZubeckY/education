<template>
  <!--  TODO
           1.Avatar   |+
           2. Name    |
           3. SName   |
           4. Background |
           5. Color   |
           -->
  <v-container>
    <v-text-field
      label="Имя"
      v-model="params.name"
      filled
    ></v-text-field>

    <v-text-field
      label="Фамилия"
      v-model="params.secondName"
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

    <v-btn>
      Сохранить
    </v-btn>



  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Settings extends Vue {

  params :any = {
    name:"",
    secondName:"",
    img:"",
    background:"",
    color:"",
  }

  generalPhoto: boolean = true
  dialog: boolean = false

  created(){
    this.params = this.$store.state.user
  }

  @Watch("params.color")
  changeBackground(){
    console.log("Back")
  }

}
</script>
