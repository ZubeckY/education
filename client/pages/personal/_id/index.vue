<template>
  <v-container>
    <is-loading v-if="loading"/>
    <div v-else>
      <v-card elevation="0"
              class="ma-0 pa-0"
              :color="isRequiredUser.color">
        <main-header :color="isRequiredUser.colorText"/>
      </v-card>
      <div style="height: 300px; overflow: hidden">
        <v-img height="300"
               :style="isRequiredUser.background === isRequiredUser.img ? 'filter: blur(40px); transform: scale(1.1)' : ''"
               :src="isRequiredUser.background"></v-img>
      </div>
      <v-card :color="isRequiredUser.color">
        <card-container :color="isRequiredUser.color">
          <v-row class="ma-0 pa-0">
            <v-col class="ma-0 my-3 pa-0 d-flex"
                   cols="auto">

              <v-badge overlap bottom
                       offset-x="16"
                       offset-y="16"
                       :color="isRequiredUser.online ? 'success' : '#8f8f8f'">
                <v-avatar class="profile"
                          color="grey"
                          size="135">
                  <v-img :src="isRequiredUser.img"></v-img>
                </v-avatar>
              </v-badge>

              <div class="d-flex flex-column justify-end">
                <personal-title :color="isRequiredUser.colorText">
                  {{isRequiredUser.name}} {{isRequiredUser.secondName}}
                </personal-title>
                <personal-text :color="isRequiredUser.colorText">
                  {{$rest.getDate(isRequiredUser.bd)}}
                </personal-text>
              </div>
            </v-col>
            <v-spacer/>
            <v-col class="d-flex align-end ma-0 my-3 pa-0 ">
              <div class="d-flex flex-column">
                <v-card-actions>
                  <v-spacer/>

                  <v-menu v-if="!isCurrentUser" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon :color="isRequiredUser.colorText"
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
                  <v-btn v-if="isCurrentUser"
                         text :color="isRequiredUser.colorText"
                         @click="routing('/personal/' + isRequiredUser.id + '/settings')"
                         style="text-transform: none;">
                    Редактировать
                  </v-btn>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn text
                             v-on="on"
                             v-bind="attrs"
                             :color="isRequiredUser.colorText"
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
    </div>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component ({
  layout: 'clear'
})
export default class Personal_Id extends Vue {
  itemsList: any = []
  loading: boolean = true


  userParams: any = [
    { title: "Пожаловаться" },
  ]

  created () {
    this.initUser()
    this.initItemsList()
  }

  initUser () {
    return this.currentUser
  }

  initItemsList () {
    return this.itemsList = [
      {
        title: "Админка",
        link: "/admin/",
        role: "admin",
      },
      { title: "Файлы",
        link: `/personal/${this.isRequiredUser.id}/files/`,
        private: {
          files: this.isRequiredUser?.privateParams?.files
        }
      },
      { title: "Система",
        link: "/system/"
      },
      {
        title: "Сообщения",
        link: "/messages/"
      },
      { title: "Статистика",
        link: `/personal/${this.isRequiredUser.id}/statistic/`,
        private: {
          statistic: this.isRequiredUser?.privateParams?.statistic
        }
      },
    ]
  }

  routing (link: string) {
    this.$router.push(link)
  }

  get currentUser () {
    return this.$store.state.user
  }

  get isCurrentUser () {
    return this.currentUser?.id === this.linkId
  }

  get isRequiredUser () {
    let user = this.$store.state.users.find((user:any) => user.id === this.linkId)
    if (!user) {
      this.routing('/404')
      return 0
    }
    this.loading = false
    return user
  }

  get linkId () {
    let currentPath = this.$router.currentRoute.path
    let path = this.cleanerPath(currentPath)
    let id = path[path.length - 1]
    return Number(id)
  }

  cleanerPath (path: string) {
    if (path[path.length - 1] === '/') {
      return path.substring(0, path.length - 1).split('/')
    } else {
      return path.split('/')
    }
  }

  get items() {
    return this.itemsList.filter((menuItem: any) =>
      !(menuItem.role && !this.currentUser?.role?.includes(menuItem.role)) &&
      !(menuItem.role && !this.isCurrentUser) &&
      !(menuItem.private?.files && !this.isCurrentUser) &&
      !(menuItem.private?.statistic && !this.isCurrentUser)
    )
  }
}
</script>
