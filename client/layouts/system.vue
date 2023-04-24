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
            <v-icon>{{ miniVariant ? 'mdi-menu' : 'mdi-close' }}</v-icon>
          </v-card>

          <v-list-item router exact>
            <v-list-item-action>
              <v-avatar :color="user.color" size="24">
                <v-img :src="user.img"></v-img>
              </v-avatar>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ user.name }} {{user.secondName}} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

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
  user: any = this.$store.state.user
  miniVariant: boolean = false

  items: any = [
    {
      icon: 'mdi-apps',
      text: 'Главная',
      link: '/system/'
    },
    {
      icon: 'mdi-school',
      text: 'Учебный процесс',
      // link: '/system/educational-process'
    },
    {
      icon: 'mdi-message',
      text: 'Сообщения',
      link: '/messages'
    },
    {
      icon: 'mdi-exit-to-app',
      text: 'Выйти',
      link: '/personal/'
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
      case '/system/educational-process':
        return 1
      default:
        return 0
    }
  }

}
</script>

