<template>
  <div>
    <div v-for="item in messages"
         :key="item.id"
         style="display: flex"
         :class="isUserMessage(item.fromId) ? 'justify-end' : ''">
      <v-card class="py-2 px-4"
              elevation="0"
              max-width="400px"
              :color="isUserMessage(item.fromId) ? '#f9f9f9' : '#f3f3f3'">
        <v-card-text class="ma-0 pa-0 font-weight-regular">
          {{ item.text }}
        </v-card-text>
        <v-card-text style="font-size: 12px;"
                     class="text-right ma-0 pa-0">
          {{ item.date }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'messages'
})
export default class Messages_id extends Vue {
  messages: any = [
    {
      id: 1,
      fromId: 1,
      toId: 2,
      text: 'Бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла',
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
    },
    {
      id: 5,
      fromId: 2,
      toId: 1,
      text: 'Бла бла бла',
      date: '11-12-2023',
    },
    {
      id: 6,
      fromId: 1,
      toId: 2,
      text: 'Бла бла бла',
      date: '11-12-2023',
    }
  ]

  get getUser () {
    return JSON.parse(JSON.stringify(this.$store.state.user))
  }

  isUserMessage (id: number) {
    return this.getUser.id === id
  }
}
</script>
