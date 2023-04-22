<template>
  <v-container>
    <v-card elevation="0" class="pa-2">
      <card-container>
        <scroller>
          <!-- todo работа с бэком, будет будет сделана отдельная модель, которая будет привязана к модели User и в неё будет сведена вся статистика-->

          <v-card-title class="mt-6 mb-0 justify-center text-h4">Личная статистика пользователя</v-card-title>
          <v-card-title class="mt-0 mb-4 justify-center text-h4">Имя Фамилия</v-card-title>

          <v-card class="mx-2 my-4 pa-3">
            <v-card-title class="py-1 px-2">Значение??</v-card-title>
            <v-card-text>
              <v-sparkline :gradient="gradient[0]"
                           :labels="value.dayOfWeek"
                           :value="value.one"
                           :label-size="4"
                           :line-width="1"/>
            </v-card-text>
          </v-card>

          <v-card class="mx-2 my-4 pa-3">
            <v-card-title class="py-1 px-2">Значение??</v-card-title>
            <v-card-text>
              <v-sparkline :gradient="gradient[1]"
                           :labels="value.dayOfWeek"
                           :value="value.two"
                           :label-size="4"
                           :line-width="1"/>
            </v-card-text>
          </v-card>

          <v-card class="mx-2 my-4 pa-3">
            <v-card-title class="py-1 px-2">Значение??</v-card-title>
            <v-card-text>

              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                  <tr v-for="item in simpleStats"
                      :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.value }}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>


            </v-card-text>
          </v-card>


        </scroller>

        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="routing('/personal')">
            ОК
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

  simpleStats: any = [
    {
      name: 'Значение 1',
      value: '5'
    },
    {
      name: 'Значение 2',
      value: 'Да'
    },
    {
      name: 'Пропустил уроков',
      value: '3'
    },
  ]


  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>

