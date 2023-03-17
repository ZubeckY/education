<template>
  <div>
    <v-card-title>Ошибка, не удалось найти запись!</v-card-title>
    <v-card-text class="pb-0">Попробуйте перезагрузить страницу, если ошибка повториться, <br> возможно Ваша ссылка не является не корректной</v-card-text>
    <v-card-actions>
      <v-btn text block
             color="primary"
             @click="routing()">
        Ок
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class ErrorLink extends Vue {
  routing () {
    return this.$router.go(0)
  }
}
</script>
