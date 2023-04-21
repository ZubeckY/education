<template>
  <v-card elevation="0">
    <v-card-title>Главная</v-card-title>
    <scroller>
      <v-card class="mx-2 my-4 pa-3">
        <v-card-title class="py-1 px-2">Блокировка</v-card-title>
        <v-card-text class="pt-0">
          Причины блокировки
          <admin-main-reason-block-table/>
        </v-card-text>
      </v-card>

      <div style="height: 1500px"></div>

    </scroller>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({
  layout:"admin"
})
export default class Admin extends Vue {}
</script>
