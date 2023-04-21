<template>
  <v-app>
    <is-loading v-if="loading"/>
    <v-container v-else>
      <v-row>
        <v-col cols="3">
          <v-list>
            <v-list-item-group v-model="model" mandatory>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="routing(item.link)">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-btn text block
                 class="text-none justify-start"
                 @click="routing('/personal')">
            Выход
          </v-btn>
        </v-col>
        <v-col>
          <nuxt/>
        </v-col>
      </v-row>
    </v-container>

    <!-- Уведомления -->
    <v-list class="pa-0" style="position:absolute;bottom:20px;right:20px;">
      <v-list-item class="elevation-18 pa-0 mb-3" style="min-width: 250px"
                   v-for="item in $store.state.alerts" :key="item.id">
        <alert-app :item="item" />
      </v-list-item>
    </v-list>

  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Admin extends Vue {
  items: any = [
    {
      text: 'Главная',
      link: '/admin/'
    },
    {
      text: 'Пользователи',
      link: '/admin/users'
    },
    {
      text: 'Роли',
      link: '/admin/roles'
    },
    {
      text: 'Тарифы',
      link: '/admin/tariffs'
    },
    {
      text: 'Учебный процесс',
      link: '/admin/educational-process'
    },
    {
      text: 'Новости и рассылки',
      link: '/admin/news-and-mailings'
    },
    {
      text: 'Подтверждения',
      link: '/admin/confirmations'
    }
  ]
  model: number = 0
  loading: boolean = true

  routing (link: string) {
    this.$router.push(link)
  }

  created () {
    this.checkRole()
    this.model = this.checkRouter()
  }

  checkRole(){
    let user = this.$store.state.user
    if (!user.role && !user.role?.includes('admin')) {
      return this.routing('/')
    }
    this.loading = false
  }

  checkRouter(){
    switch (this.$router.currentRoute.path) {
      case '/admin/':
        return 0
      case '/admin/users':
        return 1
      case '/admin/roles':
        return 2
      case '/admin/tariffs':
        return 3
      case '/admin/educational-process':
        return 4
      case '/admin/news-and-mailings':
        return 5
      case '/admin/confirmations':
        return 6
      default:
        return 0
    }
  }

}
</script>

