<template>
  <v-app>
    <is-loading v-if="loading"/>
    <div v-else>
      <!-- Навигация -->
      <universal-navigation :user="user"
                            :items="items"/>

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
  user: any = this.$store.state.user

  items: any = [
    {
      icon: 'mdi-apps',
      text: 'Главная',
      link: '/admin/',
      active: false,
    },
    {
      icon: 'mdi-message',
      text: 'Сообщения',
      link: '/admin/messenger',
      active: true,
    },
    {
      icon: 'mdi-account-group',
      text: 'Пользователи',
      link: '/admin/users',
      active: false,
    },
    {
      icon: 'mdi-account-check',
      text: 'Роли',
      link: '/admin/roles',
      active: false,
    },
    {
      icon: 'mdi-account-credit-card-outline',
      text: 'Тарифы',
      link: '/admin/tariffs',
      active: false,
    },
    {
      icon: 'mdi-school',
      text: 'Учебный процесс',
      link: '/admin/educational-process',
      active: true,
    },
    {
      icon: 'mdi-newspaper-variant-outline',
      text: 'Новости и рассылки',
      link: '/admin/news-and-mailings',
      active: true,
    },
    {
      icon: 'mdi-archive-check',
      text: 'Подтверждения',
      link: '/admin/confirmations',
      active: true,
    },
    {
      icon: 'mdi-exit-to-app',
      text: 'Выйти',
      link: '/personal/',
      active: false,
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

  checkRole () {
    if (!this.user.role && !this.user.role?.includes('admin')) {
      return this.routing('/')
    }
    this.loading = false
  }

  checkRouter () {
    switch (this.$router.currentRoute.path) {
      case '/admin/':
        return 0
      case '/admin/messages/':
        return 1
      case '/admin/users':
        return 2
      case '/admin/roles':
        return 3
      case '/admin/tariffs':
        return 4
      case '/admin/educational-process':
        return 5
      case '/admin/news-and-mailings':
        return 6
      case '/admin/confirmations':
        return 7
      default:
        return 0
    }
  }

}
</script>

