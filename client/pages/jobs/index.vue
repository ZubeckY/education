<template>
  <v-container>

    <v-carousel cycle height="400"
                hide-delimiter-background
                show-arrows-on-hover>

      <v-carousel-item v-for="(item, i) in slides"
                       :key="i">
        <v-sheet :color="item.color"
                 height="100%">
          <v-row class="fill-height"
                 align="center"
                 justify="center">
            <div class="text-h2">
              {{ item.text }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>


    <jobs-professions/>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'jobs'
})
export default class Jobs extends Vue {
  slides: any =[
    {
      color: 'indigo',
      text: 'First',
    },
    {
      color: 'warning',
      text: 'Second',
    },
    {
      color: 'pink darken-2',
      text: 'Third',
    },
    {
      color: 'red lighten-1',
      text: 'Fourth',
    },
    {
      color: 'deep-purple accent-4',
      text: 'Fifth',
    },
  ]

}
</script>

