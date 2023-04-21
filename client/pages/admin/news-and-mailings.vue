<template>
  <v-card elevation="0">
    <v-card-title>Новости и рассылки</v-card-title>
    <v-data-table :items="news"
                  :headers="headers"
                  :items-per-page="-1"
                  class="custom-table"
                  height="calc(100vh - 90px)"
                  fixed-header
                  hide-default-footer>
    </v-data-table>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component({
  layout:"admin"
})
export default class NewsAndMailings extends Vue {
  headers: any = [
    { text: 'id',           value: 'id' },
    { text: '',             value: 'actions', sortable: false },
  ]

  news: any = [

  ]


}
</script>
