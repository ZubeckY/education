<template>
  <v-dialog v-model="dialog"
            max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="text-none ma-0 pa-0"
             color="indigo"
             v-bind="attrs"
             v-on="on"
             text>
        Показать
      </v-btn>
    </template>
    <v-card>
      <v-card-actions>
        <v-card-title>Причины блокировки</v-card-title>
        <v-spacer/>
        <v-btn icon>
          <v-icon @click="dialog=false" color="error">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <v-data-table class="custom-table"
                      :headers="headers"
                      :items="reasonList"
                      hide-default-footer>
          <template v-slot:item.isCanReport="{ item }">
            <div :class="trueFalseValue(item.isCanReport).color">
              {{ trueFalseValue(item.isCanReport).value }}
            </div>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon color="indigo">
              <v-icon>mdi-pen</v-icon>
            </v-btn>
            <v-btn icon color="error">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class ReasonBlockTable extends Vue {
  dialog: boolean = false
  headers: any = [
    { text: 'id',                                 value: 'id' },
    { text: 'Причина блокировки',                 value: 'title' },
    { text: 'Пользователь может пожаловаться',    value: 'isCanReport' },
    { text: '',                                   value: 'actions', sortable: false },
  ]

  reasonList: any = [
    {
      id: 1,
      title: 'Нарушение правил пользования',
      isCanReport: true,
    },
    {
      id: 2,
      title: 'Оскорбление',
      isCanReport: true,
    },
    {
      id: 3,
      title: 'Пропаганда или призывы',
      isCanReport: true,
    },
    {
      id: 4,
      title: 'Массовая жалоба',
      isCanReport: false,
    },
  ]

  trueFalseValue (value: boolean) {
    return value ? {
      value: 'Да',
      color: 'success--text'
    } : {
      value: 'Нет',
      color: 'error--text'
    }
  }
}
</script>
