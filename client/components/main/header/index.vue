<template>
  <v-container class="my-0 py-0">
    <v-card color="transparent" elevation="0">
      <v-card-actions>
        <v-btn text class="my-0 mx-3 pa-0"
               :color="isTransparent ? 'white' : 'indigo' && color ? color : 'indigo'"
               @click="routing('/')">
          Главная
        </v-btn>

        <v-spacer/>

        <v-btn text class="my-0 mx-3 pa-0"
               :color="isTransparent ? 'white' : 'indigo' && color ? color : 'indigo'"
               @click="routing('/messages')">
          Сообщения
        </v-btn>
        <v-btn text class="my-0 mx-3 pa-0"
               :color="isTransparent ? 'white' : 'indigo' && color ? color : 'indigo'"
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
  @Prop() isTransparent?: boolean
  @Prop() color?: string

  routing (link: string) {
    this.$router.push(link)
  }
}
</script>
