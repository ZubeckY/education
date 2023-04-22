<template>
  <!--  todo, это уже будет работа с бэком, сначала будет подготовлена модель пользователя, затем подключено облако. и с ним будет взаимодействие  -->
  <v-container>
    <v-card elevation="0" class="pa-2">
      <card-container>
        <scroller>

          <v-btn-toggle v-model="step" group tile>
            <v-btn v-for="(item, i) in content"
                   :key="i" :value="item.value" text>
              {{ item.text }}
            </v-btn>
          </v-btn-toggle>

          <v-window v-model="step">
            <v-window-item v-for="(item, i) in content"
                           :key="i" :value="item.value">

              <v-card class="mx-1 my-4 pa-3">
                {{ item }}
              </v-card>

            </v-window-item>
          </v-window>

        </scroller>

        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="routing('/personal')">Ок</v-btn>
        </v-card-actions>

      </card-container>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'clear'
})
export default class Files extends Vue {

  content: any = [
    {
      text: 'Фото',
      value: 'photo'
    },
    {
      text: 'Видео',
      value: 'video'
    },
    {
      text: 'Аудио',
      value: 'audio'
    },
    {
      text: 'Файлы',
      value: 'files'
    },
  ]
  step: any = this.content[0].value


  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>
