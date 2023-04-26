<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-list elevation="0">
            <v-list-item-group v-model="model">
              <v-list-item v-for="(branch) in users"
                           :key="branch.id"
                           @click="routing(String(branch.id))"
                           @contextmenu="show">

                <v-list-item-action>
                  <v-avatar :color="branch.color" size="28">
                    <v-img :src="branch.img"></v-img>
                  </v-avatar>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ branch.name }} {{ branch.secondName }}</v-list-item-title>
                </v-list-item-content>

                <v-menu class="ma-0 pa-0"
                        v-model="showMenu"
                        :position-x="x"
                        :position-y="y"
                        absolute offset-y>

                  <v-list color="transparent"
                          @click.stop
                          elevation="0"
                          class="ma-0 pa-0">
                    <v-list-item @click.stop
                                 class="ma-0 pa-0"
                                 v-for="(item, i) in menuItems" :key="i">
                      <v-card elevation="0"
                              width="100%"
                              color="transparent">
                        <v-btn @click.stop :color="item.color" text block
                               class="ma-0 py-6 text-none justify-start fill-height">
                          <v-icon class="mr-3"> {{item.icon}} </v-icon>
                          <span> {{ item.title }} </span>
                        </v-btn>
                      </v-card>
                    </v-list-item>
                  </v-list>
                </v-menu>

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
import {Component, Vue, Watch} from "vue-property-decorator"

@Component
export default class Messages extends Vue {
  user: any = {}
  users: any = []

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


  showMenu: boolean = false

  x: number = 0
  y: number = 0

  menuItems: any = [
    {
      icon: 'mdi-bell',
      color: 'indigo',
      title: 'Включить звук'
    },
    {
      icon: 'mdi-delete',
      color: 'error',
      title: 'Удалить'
    },
  ]

  show (e: any) {
    e.preventDefault()
    this.showMenu = false
    this.x = e.clientX
    this.y = e.clientY
    this.$nextTick (() => {
      this.showMenu = true
    })
  }

  routing (link: string) {
    this.$router.push(link)
  }



  created () {
    this.user = this.$store.state.user
    this.users = this.$store.state.users
  }

  @Watch('model')
  changeModel () {
    if (this.model == undefined) {
      this.$router.push('/messages/')
    }
  }
}
</script>

