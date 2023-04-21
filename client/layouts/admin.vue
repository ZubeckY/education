<template>
  <v-app>
    <is-loading v-if="loading"/>
    <div v-else>
      <!-- Навигация -->
      <v-navigation-drawer fixed app
                           :mini-variant="miniVariant">
        <v-list>
          <v-card class="text-left py-2 pl-4" elevation="0"
                  @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-menu</v-icon>
          </v-card>
          <v-list-item v-for="(item, i) in items"
                       :key="i" :to="item.link"
                       router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Страницы -->
      <v-main>
        <v-container>
          <nuxt/>
        </v-container>
      </v-main>
    </div>

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
  miniVariant: boolean = false

  items: any = [
    {
      icon: 'mdi-apps',
      text: 'Главная',
      link: '/admin/'
    },
    {
      icon: 'mdi-account-group',
      text: 'Пользователи',
      link: '/admin/users'
    },
    {
      icon: 'mdi-account-check',
      text: 'Роли',
      link: '/admin/roles'
    },
    {
      icon: 'mdi-account-credit-card-outline',
      text: 'Тарифы',
      link: '/admin/tariffs'
    },
    {
      icon: 'mdi-school',
      text: 'Учебный процесс',
      link: '/admin/educational-process'
    },
    {
      icon: 'mdi-newspaper-variant-outline',
      text: 'Новости и рассылки',
      link: '/admin/news-and-mailings'
    },
    {
      icon: 'mdi-archive-check',
      text: 'Подтверждения',
      link: '/admin/confirmations'
    },
    {
      icon: 'mdi-exit-to-app',
      text: 'Выйти',
      link: '/'
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

  checkRouter () {
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

