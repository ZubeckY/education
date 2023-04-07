<template>
  <v-card elevation="0">
    <v-card-title>Подтверждения</v-card-title>
    <v-data-table :items="confirms"
                  :headers="headers"
                  :items-per-page="-1"
                  class="custom-table"
                  height="calc(100vh - 90px)"
                  fixed-header
                  hide-default-footer>
      <template v-slot:item.user="{ item }">
        {{ item.user.name }} {{ item.user.surname }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn text small
               class="text-none"
               color="indigo">
          Подробнее
        </v-btn>
        <v-btn text small
               class="text-none"
               color="indigo">
          Вердикт
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component({
  layout:"admin"
})
export default class Confirmations extends Vue {
  headers: any = [
    { text: 'id обр.',      value: 'id' },
    { text: 'id поль.',     value: 'user.id' },
    { text: 'ФИО поль.',    value: 'user' },
    { text: 'Тема обр.',    value: 'title' },
    { text: '',             value: 'actions', sortable: false },
  ]

  confirms: any = [
    {
      id: 1,
      title: 'Подтвердить действие пользователя',
      user: {
        id: 1,
        name: "User",
        surname: "User",
      },
    }
  ]
}
</script>
