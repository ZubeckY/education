<template>
  <v-app>
    <main-header/>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-list>
            <v-list-item-group v-model="model">
              <v-list-item
                v-for="(item, i) in messages"
                :key="i"
                @click="routing(item.link)">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col>
          <nuxt/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Messages extends Vue {
  model: any =  null
  messages: any = [
    {
      text: 'Один',
      link: '/messages/one'
    },
    {
      text: 'Два',
      link: '/messages/two'
    },
  ]

  routing (link: string) {
    this.$router.push(link)
  }

  @Watch('model')
  changeModel () {
    if (this.model == undefined) {
      this.$router.push('/messages/')
    }
  }
}
</script>

