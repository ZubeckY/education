<template>
  <v-card elevation="0">
    <v-card-title>Тарифы</v-card-title>
    <v-data-table :items="tariffs"
                  :headers="headers"
                  :items-per-page="-1"
                  class="custom-table"
                  height="calc(100vh - 90px)"
                  fixed-header
                  hide-default-footer>
      <template v-slot:item.price="{ item }">
        {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
      </template>
      <template v-slot:item.discount="{ item }">
        {{ item.discount === true ? "Да" : "Нет" }}
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
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component({
  layout: "admin"
})
export default class Tariffs extends Vue {
  discounts: any = [ 0, 5, 10 ]

  headers: any = [
    { text: 'id',           value: 'id' },
    { text: 'Название',     value: 'title' },
    { text: 'Цена',         value: 'price' },
    { text: 'Скидка',       value: 'discount' },
    { text: '',             value: 'actions', sortable: false },
  ]

  tariffs: any = [
    {
      id: 1,
      title: 'Старт',
      price: 14500,
      discount: false,
    },
    {
      id: 2,
      title: 'Продвинутый',
      price: 18000,
      discount: false,
    },
    {
      id: 3,
      title: 'Максимум',
      price: 27000,
      discount: false,
    },
  ]
}
</script>
