<template xmlns:is-required="http://www.w3.org/1999/html">
  <v-window v-model="step">
    <v-window-item>

      <v-form @submit.prevent
              v-model="valid"
              class="pa-2">
        <v-card-title class="pa-2">Кем вы являетесь</v-card-title>
        <v-card-text class="pa-2">
          <v-select v-model="select" :items="items"/>

          <v-text-field v-show="select==='director'">
            <template v-slot:label>
              <is-required label="Введите код продукта"/>
            </template>
          </v-text-field>

          <v-text-field v-show="select==='manager'" label="Введите код приглашения"/>
          <v-text-field v-show="select==='teacher'" label="Введите код приглашения"/>
          <v-text-field v-show="select==='student'" label="Введите код приглашения"/>

        </v-card-text>
      </v-form>

    </v-window-item>
    <v-window-item>

    </v-window-item>
    <v-window-item>

    </v-window-item>
  </v-window>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class Reg extends Vue {
  step: number = 0
  select: any = ''
  valid: boolean = false

  items: any = [
    {
      text: 'Директор',
      value: 'director',
    },
    {
      text: 'Заведующий',
      value: 'manager',
    },
    {
      text: 'Преподаватель',
      value: 'teacher',
    },
    {
      text: 'Учащийся',
      value: 'student',
    },
  ]



}
</script>
