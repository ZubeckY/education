<template>
  <v-card elevation="0">
    <v-card-title>Работа</v-card-title>
    <scroller>

      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Главная страница</v-card-title>
        <v-card-text class="pt-0">Настройки слайдера</v-card-text>
        <v-card-text class="pt-0">Топ вакансий</v-card-text>
      </v-card>

      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Работа</v-card-title>
        <v-card-text class="pt-0">Сфера деятельности</v-card-text>
        <v-card-text class="pt-0">Раздел вакансий</v-card-text>
      </v-card>

      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Доступ</v-card-title>
        <v-card-text class="pt-0">Кто может настраивать "Вакансии"</v-card-text>
        <v-card-text class="pt-0">Кто может разрешить доступ к отделу "Работа"</v-card-text>
        <v-card-text class="pt-0">Кто может выставить условия для получения работы</v-card-text>
      </v-card>

      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Конкурсы и задания</v-card-title>
        <v-card-text class="pt-0">Ежедневные задания</v-card-text>
        <v-card-text class="pt-0">Конкурсы и гранты</v-card-text>
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
