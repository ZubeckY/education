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
export default class System extends Vue {
  user: any = this.$store.state.user

  items: any = [
    {
      icon: 'mdi-apps',
      text: 'Главная',
      link: '/system/',
      active: false,
    },
    {
      icon: 'mdi-message',
      text: 'Сообщения',
      link: '/system/messenger',
      active: true,
    },
    {
      icon: 'mdi-book-open-outline',
      text: 'Журнал',
      link: '/system/journal',
      active: false,
    },
    {
      icon: 'mdi-school',
      text: 'Учебный процесс',
      link: '/system/educational-process',
      active: false,
      role: ['admin', 'moderator', 'director', 'manager']
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
    // let user = this.$store.state.user
    if (!this.user.role && !this.user.role?.includes("admin", "moderator")) {
      return this.routing('/')
    }
    this.loading = false
  }

  checkRouter () {
    switch (this.$router.currentRoute.path) {
      case '/system/':
        return 0
      case '/system/messages/':
        return 1
      case '/system/educational-process':
        return 2
      default:
        return 0
    }
  }

}
</script>

