<template>
  <v-container class="my-0 py-0">
    <v-card elevation="0">
      <v-card-actions>

        <v-btn text
               color="indigo"
               class="my-0 mx-3 pa-0"
               @click="routing('/')">
          Главная
        </v-btn>

        <v-spacer/>

        <v-btn text
               color="indigo"
               class="my-0 mx-3 pa-0"
               @click="routing('/')">
          Сообщения
        </v-btn>
        <v-btn text
               color="indigo"
               class="my-0 mx-3 pa-0"
               @click="routing('/personal')">
          Кабинет
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Header extends Vue {
  routing (link: string) {
    this.$router.push(link)
  }
}
</script>
