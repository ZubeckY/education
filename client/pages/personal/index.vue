<template>
    <v-container>
      <v-card class="mb-16" :color="user.color">
        <v-img height="300" :src="user.background"></v-img>
        <card-container :color="user.color">
          <v-row class="mt-0">
            <v-col cols="auto">
              <v-avatar class="profile"
                        color="grey"
                        size="164">
                <v-img :src="user.img"></v-img>
              </v-avatar>
              <personal-title :color="user.colorText"
                              class="justify-center">
                {{user.name}} {{user.secondName}}
              </personal-title>
            </v-col>
            <v-spacer/>
            <v-col class="d-flex align-end">
              <v-card-actions>

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
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
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
