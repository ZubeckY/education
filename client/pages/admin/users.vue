<template>
  <v-card elevation="0">
    <v-card-title>Пользователи</v-card-title>
    <v-data-table :items="users"
                  :headers="headers"
                  :items-per-page="-1"
                  class="custom-table"
                  height="calc(100vh - 90px)"
                  fixed-header
                  hide-default-footer>
      <template v-slot:item.user="{ item }">
        {{item.name}} {{item.secondName}}
      </template>
      <template v-slot:item.bd="{ item }">
        {{ $rest.getDate(item.bd) }}
      </template>
      <template v-slot:item.activate="{ item }">
        <div :class="activate(item.activate).color">
          {{ activate(item.activate).status }}
        </div>
      </template>
      <template v-slot:item.banStatus="{ item }">
        <div :class="banStatus(item.banStatus).color">
          {{ banStatus(item.banStatus).status }}
        </div>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn icon color="indigo">
          <v-icon>mdi-pen</v-icon>
        </v-btn>
        <admin-users-ban :item="item"/>
      </template>
    </v-data-table>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component({
  layout:"admin"
})
export default class Users extends Vue {

  headers: any = [
    { text: 'id',                 value: 'id' },
    { text: 'Имя фамилия.',       value: 'user' },
    { text: 'Дата рождения.',     value: 'bd' },
    { text: 'Роль.',              value: 'role' },
    { text: 'Статус активации.',  value: 'activate' },
    { text: 'Блокировки.',        value: 'banStatus' },
    { text: '',                   value: 'actions', sortable: false, },
  ]

  users: any = [
    {
      id: 2,
      name: 'Петр',
      secondName: 'Петров',
      bd: '11-12-2022',
      role: 'user',
      activate: true,
      banStatus: false,
    },
    {
      id: 98,
      name: 'Андрей',
      secondName: 'Смирнов',
      bd: '11-12-2002',
      role: 'user',
      activate: true,
      banStatus: true,
    },
    {
      id: 79,
      name: 'Иван',
      secondName: 'Иванов',
      bd: '11-12-2009',
      role: 'user',
      activate: true,
      banStatus: false,
    }
  ]

  activate( value: boolean ){
    return value ? {
      status: 'Актривирован(а)',
      color: 'success--text'
    } : {
      status: 'Не активирован(а)',
      color: 'warning--text'
    }
  }

  banStatus( value: boolean ){
    return value ? {
      status: 'Заблокирован(а)',
      color: 'error--text'
    } : {
      status: 'Нет блоикровок',
      color: 'success--text'
    }
  }

  changeBanStatus( value: boolean ){
    return value = !value
  }

}
</script>
