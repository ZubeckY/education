<template>
  <v-card elevation="0">
    <v-card-title>Работа</v-card-title>
    <scroller>

      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Слайдер</v-card-title>
        <v-card-text class="pt-0">
          Показать слайдер
        </v-card-text>
      </v-card>

      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Работа</v-card-title>
        <v-card-text class="pt-0">
          Кто может добавлять виды работ
        </v-card-text>
      </v-card>

      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Доступ</v-card-title>
        <v-card-text class="pt-2">Кто может давать доступ на работу ученикам</v-card-text>
        <v-card-text class="pt-0">Условия для получения работы</v-card-text>
      </v-card>

    </scroller>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({
  layout:"admin"
})
export default class Admin extends Vue {

}
</script>
