<template>
  <div class="d-flex fill-height justify-center flex-wrap">
    <div v-for="(item, i) in items">
      <v-hover  v-slot="{ hover }">
        <v-card class="ma-3"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }">

          <v-img :src="item.img" height="225px">
            <v-card-title class="text-h6 white--text ma-2">
              <v-row class="fill-height flex-column"
                     justify="space-between">

                <p class="mt-4 subheading text-left">{{ item.title }}</p>

                <div>
                  <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">{{ item.text }}</p>
                </div>

              </v-row>
            </v-card-title>
          </v-img>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
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
      img: 'https://pk.i-spo.ru/photo/ospecialnosti/1_40.jpg?time=1661245310',
    },
  ]
}
</script>
<style scoped>
.v-card {
  width: 100vw; max-width: 420px;
  text-shadow: 1px 0 1px #000;
  transition: opacity .4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>
