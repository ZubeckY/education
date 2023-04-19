<template>
  <v-container>
    <div class="d-flex fill-height justify-center flex-wrap">
      <div v-for="(item,i) in items">
        <v-hover  v-slot="{ hover }">
          <v-card
            class="ma-3"
            max-width="420px"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img
              :src="item.img"
              height="225px"
            >
              <v-card-title class="text-h6 white--text">
                <v-row
                  class="fill-height flex-column"
                  justify="space-between"
                >
                  <p class="mt-4 subheading text-left">
                    {{ item.title }}
                  </p>

                  <div>
                    <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                      {{ item.text }}
                    </p>
                  </div>
                </v-row>
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </div>
    </div>

    <v-card :elevation="shadows">
      <v-row class="ma-0 pa-0">
        <v-col cols="auto">
          <v-card-actions>
          <v-btn
            @click="switchText"
            icon large
          >
            <v-icon>
              mdi-school
            </v-icon>
          </v-btn>
        </v-card-actions>
        </v-col>
        <v-col v-show="showText">
          <v-card-title>
          Помощь
        </v-card-title>
          <v-card-text>
            Информация о помощи
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>

</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'jobs'
})
export default class Jobs extends Vue {
  items:any = [
    {
      title: 'Мастер отделочных работ',
      text: `It's New Release Friday`,
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_406014/images/tild3137-3938-4261-b139-623034643961__960.jpg',
    },
    {
      title: 'Слесарь по ремонту строительных машин',
      text: 'Greatest Rock Hits',
      img: 'https://don-teks.ucoz.ru/1.jpg',
    },
    {
      title: 'Экономика и бухучет',
      text: 'Ambient Bass',
      img: 'https://pk.i-spo.ru/upload_1/Buhgalterskij-i-nalogovyj-uchet-na-predpriyatiyah-malogo-biznesa-i-individualnyh-predprinimatelej-osek-nyu.jpg',
    },
    {
      title: 'Продавец, контролер, кассир',
      text: `It's New Release Friday`,
      img: 'https://static.tildacdn.com/tild6161-3131-4466-a264-633631326432/74249_600x450.jpg',
    },
    {
      title: 'Компьютерные системы и комплексы',
      text: 'Greatest Rock Hits',
      img: 'https://vuzopedia.ru/storage/app/uploads/public/cde/ea6/066/thumb__499_499_0_0_auto.jpg',
    },
    {
      title: 'Коммерция',
      text: 'Ambient Bass',
      img: 'https://realnoevremya.ru/uploads/news/db/8b/845d592e4df320c2.jpg',
    },
  ]
  shadows:number = 0
  showText:boolean = false

  switchText(){
    this.showText = !this.showText
    this.shadows = this.shadows === 0 ? 4: 0
  }

}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}


</style>
