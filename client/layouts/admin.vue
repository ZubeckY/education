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
      icon: 'mdi-tools',
      text: 'Работа для учеников',
      link: '/admin/jobs',
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

  loading: boolean = true

  routing (link: string) {
    this.$router.push(link)
  }

  created () {
    this.checkRole()
  }

  checkRole () {
    if (!this.user.role && !this.user.role?.includes('admin')) {
      return this.routing('/')
    }
    this.loading = false
  }

}
</script>

