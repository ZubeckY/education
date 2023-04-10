<template>
  <v-card elevation="0">
    <v-card-title>Главная</v-card-title>
    <scroller>
      <v-card-text class="pt-0">
        <div>
          <h4>Блокировка</h4>
          Причины блокировки
          <admin-main-reason-block-table/>
        </div>
        <div style="height: 1000px"></div>
      </v-card-text>
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
