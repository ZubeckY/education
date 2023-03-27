<template>
  <div>
<!--
      todo На завтра
      1. Исправить баг dropdown'а
      2. Сделать страницу редактирования
      3.  Кастомизация бкг
-->
    <v-container>

      <v-card
        color="#385F73"
      >

        <v-card elevation="0"
                rounded="0"
                color="#385F73"
                dark
                width="666"
                class="mx-auto"
        >
          <v-row>

            <v-col cols="auto">
              <v-avatar
                class="profile"
                color="grey"
                size="164"
              >
                <v-img :src="user.img"></v-img>
              </v-avatar>
              <v-card-title class="justify-center">{{user.name}} {{user.secondName}}</v-card-title>
            </v-col>

            <v-col class="d-flex align-end">

              <v-card-actions>

                <v-btn text>Редактировать</v-btn>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      v-bind="attrs"
                      v-on="on"
                      text
                    >
                      Ещё
                      <v-icon>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                    >
                      <v-btn block text color="primary" v-if="item.role && item.role===user.role" >{{ item.title }}</v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>

              </v-card-actions>

            </v-col>

          </v-row>

        </v-card>


      </v-card>



    </v-container>

  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Personal extends Vue {
  items: any = [
    { title: 'Файлы' },
    { title: 'Система' },
    { title: 'Статистика' },
    { title: 'Админка', role:"admin" },
  ]
  user: any = {
    id:1,
    name:"Niga",
    secondName:"Nigger",
    role:"admin",
    img: "https://sun9-15.userapi.com/impg/e1110XwyyoTeM4dbUt2LR9eqDErVL5LoaZEoMQ/11YQkgI9-mw.jpg?size=563x782&quality=95&sign=4d04e094319a8cef739927711af9ba6b&type=album",
  }
}
</script>
