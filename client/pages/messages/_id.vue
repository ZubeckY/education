<template>
  <v-card class="d-flex flex-column" height="90vh" elevation="0">

    <v-dialog v-model="dialog"
              width="500">
      <template v-slot:activator="{ on, attrs }">

        <v-btn class="text-none"
               :color="getUser.color"
               v-on="on" dark
               v-bind="attrs">

          <v-avatar :color="getUser.color" size="24">
            <v-img :src="getUser.img"></v-img>
          </v-avatar>
          <v-card-title>{{ getUser.name }} {{getUser.secondName}} </v-card-title>

        </v-btn>

      </template>

      <v-card>
        <v-img contain
               height="300"
               :src="getUser.img"></v-img>

        <v-card-title>
          {{ getUser.name }} {{getUser.secondName}}
        </v-card-title>


        <v-divider/>
        <v-card-text>
          Контент
        </v-card-text>
      </v-card>
    </v-dialog>



    <div class="my-5 scroller-messages">
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

    <v-card elevation="0">
      <v-card-actions>

        <v-btn icon>
          <v-icon>mdi-paperclip</v-icon>
        </v-btn>

        <v-text-field/>

        <v-btn icon>
          <v-icon>mdi-microphone</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-send</v-icon>
        </v-btn>

      </v-card-actions>
    </v-card>

  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

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
