<template>
  <v-card elevation="0">
    <v-card-title>Роли</v-card-title>
    <v-data-table :items="roles"
                  :headers="headers"
                  :items-per-page="-1"
                  class="custom-table"
                  height="calc(100vh - 90px)"
                  fixed-header
                  hide-default-footer>
      <template v-slot:item.actions="{ item }">
        <v-btn icon color="indigo">
          <v-icon>mdi-pen</v-icon>
        </v-btn>
        <v-btn icon color="error">
          <v-icon>mdi-delete</v-icon>
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
export default class Roles extends Vue {
  headers: any = [
    { text: 'id',             value: 'id' },
    { text: 'Название',       value: 'text' },
    { text: 'Тех. обознач.',  value: 'role' },
    { text: '',               value: 'actions', sortable: false, },
  ]

  roles: any = [
    {
      id: 1,
      text: 'Админ',
      role: 'admin'
    },
    {
      id: 2,
      text: 'Модератор',
      role: 'moderator'
    },
    {
      id: 3,
      text: 'Пользователь',
      role: 'user'
    },
    {
      id: 4,
      text: 'Директор уч',
      role: 'director'
    },
    {
      id: 5,
      text: 'Заведующий уч',
      role: 'manager'
    },
    {
      id: 6,
      text: 'Учитель',
      role: 'teacher'
    },
    {
      id: 7,
      text: 'Учений',
      role: 'student'
    },
    {
      id: 8,
      text: 'Работа разрешена',
      role: 'jobs'
    },
    {
      id: 9,
      text: 'Доступ запрещён',
      role: 'never'
    },
  ]
  //
}
</script>
