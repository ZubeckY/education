<template>
  <v-container>
    <v-card elevation="0"
            class="ma-0 pa-0"
            :color="user.color">
      <main-header :color="user.colorText"/>
    </v-card>
    <div style="height: 300px; overflow: hidden">
      <v-img height="300"
             :style="user.background === user.img ? 'filter: blur(40px); transform: scale(1.1)' : ''"
             :src="user.background"></v-img>
    </div>
    <v-card :color="user.color">
      <card-container :color="user.color">
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 my-3 pa-0 d-flex"
                 cols="auto">

            <v-badge overlap bottom
                     offset-x="16"
                     offset-y="16"
                     :color="user.online ? 'success' : '#8f8f8f'">
              <v-avatar class="profile"
                        color="grey"
                        size="135">
                <v-img :src="user.img"></v-img>
              </v-avatar>
            </v-badge>

            <div class="d-flex flex-column justify-end">
              <personal-title :color="user.colorText">
                {{user.name}} {{user.secondName}}
              </personal-title>
              <personal-text :color="user.colorText">
                {{$rest.getDate(user.bd)}}
              </personal-text>
            </div>
          </v-col>
          <v-spacer/>
          <v-col class="d-flex align-end ma-0 my-3 pa-0 ">
            <div class="d-flex flex-column">
              <v-card-actions>
                <v-spacer/>

                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon :color="user.colorText"
                           v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in userParams"
                                 :key="index">
                      <v-btn block text
                             color="primary"
                             style="text-transform: none;">
                        {{ item.title }}
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>

              </v-card-actions>
              <v-card-actions class="d-flex align-end">
                <v-btn text :color="user.colorText"
                       @click="routing('/personal/' + currentUser.id + '/settings')"
                       style="text-transform: none;">
                  Редактировать
                </v-btn>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text
                           v-on="on"
                           v-bind="attrs"
                           :color="user.colorText"
                           style="text-transform: none;">
                      Ещё
                      <v-icon>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items"
                                 :key="index">
                      <v-btn block text
                             color="primary"
                             @click="routing(item.link)"
                             style="text-transform: none;">
                        {{ item.title }}
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-actions>
            </div>
          </v-col>
        </v-row>
      </card-container>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component ({
  layout: 'clear'
})
export default class Personal_Id extends Vue {
  user: any = {}
  itemsList: any = []

  userParams: any = [
    { title: "Пожаловаться" },
  ]

  created () {
    this.initUser()
    this.initItemsList()
  }

  initUser () {
    return this.user = this.$store.state.user
  }

  initItemsList () {
    return this.itemsList = [
      { title: "Админка",     link: "/admin/", role: "admin", },
      { title: "Файлы",       link: `/personal/${this.currentUser.id}/files/` },
      { title: "Система",     link: "/system/" },
      { title: "Сообщения",   link: "/messages/" },
      { title: "Статистика",  link: `/personal/${this.currentUser.id}/statistic/` },
    ]
  }

  routing (link: string) {
    this.$router.push(link)
  }

  get currentUser () {
    return this.user
  }

  get items() {
    return this.itemsList.filter((menuItem: any) =>
      !(menuItem.role && !this.user.role.includes(menuItem.role))
    )
  }
}
</script>
