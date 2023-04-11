<template>
  <v-container>
    <!-- todo работа с бэком, будет будет сделана отдельная модель, которая будет привязана к модели User и в неё будет сведена вся статистика-->
    <v-card elevation="0">
      <v-card-title class="my-6 justify-center text-h4">Личная статистика пользователя Имя Фамилия</v-card-title>


      <v-card-title>Значение??</v-card-title>
      <v-sparkline :gradient="gradient[0]"
                   :value="value.one"
                   :labels="value.dayOfWeek"
                   :line-width="1"
                   auto-draw>
      </v-sparkline>

      <v-card-title>Значение??</v-card-title>
      <v-sparkline :gradient="gradient[1]"
                   :value="value.two"
                   :line-width="1"
                   auto-draw/>

    </v-card>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Statistic extends Vue {

  gradient:any = [
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  value: any = {
    one: [3, 3, 5, 5, 4, 4],
    two: [6, 2, 4, 1, 8, 1],
    dayOfWeek: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  }

}
</script>

