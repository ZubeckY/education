<template>
  <div>
    <v-card v-for="item in messages"
            :key="item.id"
            elevation="0">
      <v-card-text class="mb-2 pb-0 font-weight-medium">{{item.text}}</v-card-text>
      <v-card-text class="mt-0 pt-0">{{item.date}}</v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'messages'
})
export default class Messages extends Vue {

  messages: any = [
    {
      id: 1,
      fromId: 1,
      toId: 2,
      text: 'Бла бла бла',
      date: '11-12-2023',
    },
    {
      id: 2,
      fromId: 2,
      toId: 1,
      text: 'Бла бла бла',
      date: '11-12-2023',
    },
    {
      id: 3,
      fromId: 1,
      toId: 2,
      text: 'Бла бла бла',
      date: '11-12-2023',
    },
    {
      id: 4,
      fromId: 2,
      toId: 1,
      text: 'Бла бла бла',
      date: '11-12-2023',
    }
  ]

}
</script>
