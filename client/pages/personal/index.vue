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
            <v-avatar class="profile"
                      color="grey"
                      size="130">
              <v-img :src="user.img"></v-img>
            </v-avatar>
            <div class="d-flex flex-column justify-end">
              <personal-title :color="user.colorText">
                {{user.name}} {{user.secondName}}
              </personal-title>
              <v-card-actions>
                <v-btn class="text-none my-0py-0"
                       text :color="user.colorText">
                  Укажите информацию о себе
                </v-btn>
              </v-card-actions>
            </div>
          </v-col>
          <v-spacer/>
          <v-col class="ma-0 my-3 pa-0 d-flex align-end">
            <v-card-actions class="d-flex align-end">
              <v-btn text :color="user.colorText"
                     @click="routing('/personal/settings')"
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
export default class Personal extends Vue {
  user: any = {}

  itemsList: any = [
    { title: 'Файлы', link: "/personal/files/" },
    { title: 'Система', link: "" },
    { title: 'Статистика', link: "/personal/statistic/" },
    { title: 'Админка', role:"admin", link: '/admin/' },
  ]

  created () {
    this.user = this.$store.state.user
  }

  routing (link: string) {
    this.$router.push(link)
  }

  get items() {
    return this.itemsList.filter((menuItem: any) =>
      !(menuItem.role && menuItem.role != this.user.role)
    )
  }
}
</script>
