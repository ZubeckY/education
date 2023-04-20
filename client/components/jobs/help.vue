<template>
  <v-card :width="width"
          :elevation="shadows">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0" cols="auto">
        <v-card-actions>
          <v-btn
            @click="switchText"
            icon large
          >
            <v-icon>
              mdi-school
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col class="ma-0 pa-0" v-show="showText">
        <v-card-title class="ma-0 px-3 py-1">
          Помощь
        </v-card-title>
        <v-card-text class="ma-0 pb-3 py-1">
          Информация о помощи
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Jobs extends Vue {
  width: number = 60
  height: number|string = 60

  shadows:number = 0
  showText:boolean = false
  isActive:boolean = false

  switchText () {
    this.showText = !this.showText
    this.shadows = this.shadows === 0 ? 4: 0
  }

}
</script>
