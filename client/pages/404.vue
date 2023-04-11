<template>
  <v-card>
    <v-card-title>Страница не найдена!</v-card-title>
    <v-card-actions>
      <v-btn text color="indigo"
             @click="$router.push('/')">
        Вернуться на главную
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class NotFound extends Vue {
}
</script>
