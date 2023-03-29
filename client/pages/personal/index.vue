<template>
    <!--
          todo: На завтра
           1. Исправить баг dropdown'а         |  +
           2. Сделать страницу редактирования  |
           3. Кастомизация бкг                 |
           4. сделать card-container           |
    -->
    <v-container>
      <v-card class="mb-16" color="#385F73">
        <v-img height="300" :src="user.background"></v-img>
        <v-card class="mx-auto"
                color="#385F73"
                elevation="0"
                rounded="0"
                width="666">
          <v-row class="mt-0">
            <v-col cols="auto">
              <v-avatar class="profile"
                        color="grey"
                        size="164">
                <v-img :src="user.img"></v-img>
              </v-avatar>
              <v-card-title class="justify-center white--text">
                {{user.name}} {{user.secondName}}
              </v-card-title>
            </v-col>
            <v-spacer/>
            <v-col class="d-flex align-end">
              <v-card-actions>

                <v-btn text color="white"
                       style="text-transform: none;">
                  Редактировать
                </v-btn>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text
                           v-on="on"
                           v-bind="attrs"
                           color="white"
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
                             style="text-transform: none;">
                        {{ item.title }}
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-card>

      <v-card class="mx-auto"
              elevation="0"
              rounded="0"
              width="666">
        кокнтент
      </v-card>

    </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Personal extends Vue {
  user: any = {}

  itemsList: any = [
    { title: 'Файлы' },
    { title: 'Система' },
    { title: 'Статистика' },
    { title: 'Админка', role:"admin", link: '/admin' },
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
