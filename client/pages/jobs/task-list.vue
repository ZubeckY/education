<template>
  <v-container>
    <card-container>
      <v-card outlined class="my-6" elevation="5">
        <v-row>
          <v-col cols="auto">
            <v-img width="250" height="150"
                   src="https://ubiqum.com/assets/uploads/2019/10/screenshot-2021-02-11-at-115416.png"/>
          </v-col>

          <v-col class="d-flex flex-column ml-3">
            <v-btn class="mt-2 pa-0 text-none justify-start" text href="#" target="_blank">
              <v-card-title class="ma-0 pa-0">Название</v-card-title>
            </v-btn>

            <v-btn class="pa-0 text-none justify-start" text href="#" target="_blank">
              <v-card-subtitle class="pa-0">
                Кто задал задание
              </v-card-subtitle>
            </v-btn>

            <v-card-text class="ma-1 pa-0">
              Цена: 5 000 <v-icon style="font-size: 16px">mdi-currency-rub</v-icon>
            </v-card-text>

            <v-card-text class="ma-1 pa-0">
              <v-icon>mdi-eye-outline</v-icon> &nbsp; 1241412
            </v-card-text>

          </v-col>

          <v-col cols="auto">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in userParams"
                             :key="index">
                  <v-btn block text
                         class="justify-start"
                         color="primary"
                         style="text-transform: none;">
                    {{ item.title }}
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>

        </v-row>

        <v-card-actions>
          <v-spacer/>
          <v-btn text color="primary" href="#" target="_blank">Посмотреть</v-btn>
          <v-btn text color="primary">Откликнуться</v-btn>
        </v-card-actions>
      </v-card>

    </card-container>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'jobs'
})
export default class Jobs extends Vue {
  userParams: any = [
    { title: "Пожаловаться" },
    { title: "Добавить в избранное" },
  ]
}
</script>

