<template>
  <v-dialog v-model="dialog"
            width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="error"
             v-bind="attrs"
             v-on="on">
        <v-icon>
          {{ item.banStatus ? 'mdi-lock-outline' : 'mdi-lock-open-variant-outline' }}
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        {{ item.banStatus ? 'Разблокировать пользователя?' : 'Заблокировать пользователя?' }}
      </v-card-title>
      <v-card-text>
        Вы дейстительно хотите
        {{ item.banStatus ? 'Разблокировать пользователя' : 'Заблокировать пользователя' }}
        <strong> {{item.name}}  {{item.secondName}}</strong>
      </v-card-text>
      <v-card-text>
        <v-data-table class="custom-table"
                      :headers="headers"
                      :items="users"
                      hide-default-footer>
          <template v-slot:item.user="{ item }">
            {{item.name}}  {{item.secondName}}
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text
               @click="dialog = false">
          {{ item.banStatus ? 'Разблокировать' : 'Заблокировать' }}
        </v-btn>
        <v-spacer/>
        <v-btn color="primary" text
               @click="dialog = false">
          Отмена
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Ban extends Vue {
  @Prop({required: true}) item!: any

  dialog: boolean = false
  headers: any = [
    { text: 'id',                 value: 'id' },
    { text: 'Имя фамилия.',       value: 'user' },
    { text: 'Дата рождения.',     value: 'bd' },
    { text: 'Роль.',              value: 'role' },
    { text: '',                   value: 'actions', sortable: false, },
  ]
  users: any = []

  created () {
    return this.users.push (this.item)
  }


}
</script>
