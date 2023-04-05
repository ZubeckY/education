<template>
  <v-app>
    <v-progress-linear
      v-if="loading"
      color="teal"
      buffer-value="0"
      indeterminate
      stream
    ></v-progress-linear>
    <v-container
      v-else>
      <v-row>
        <v-col cols="3"><v-list>
          <v-list-item-group v-model="model">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="routing(item.link)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
          <v-btn text block class="justify-start" @click="routing('/')">
            Выход
          </v-btn></v-col>
        <v-col> <nuxt/></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Admin extends Vue {

  items= [
    {
      text: 'Главное', link: '/admin'
    },
    {
      text: 'Пользователи', link: '/admin/test'
    },
    {
      text: 'Роли', link: ''
    },
    {
      text: 'Учебный процесс', link: ''
    },
    {
      text: 'Новости и рассылки', link: ''
    },
    {
      text: 'Подтверждения', link: ''
    }
  ]
  model=1

  loading: boolean = true

  routing (link: string) {
    this.$router.push(link)
  }

  created(){
    let  user = this.$store.state.user
    if (!user.role.includes('admin')){
      return this.routing('/')
    }
    this.loading = false
  }

}
</script>

