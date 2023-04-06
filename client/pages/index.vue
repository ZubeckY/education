<template>
  <div>
    <v-parallax class="custom-parallax" height="900"
                src="https://static.vecteezy.com/system/resources/thumbnails/020/160/810/original/title-intro-parallax-animation-background-free-video.jpg">
      <v-container>
        <main-header style="position: fixed;"
                     :isTransparent="isTransparent"/>
      </v-container>
    </v-parallax>

    <v-container>
      <div style="height: 5000px">

      </div>
    </v-container>

  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'clear'
})
export default class Pages extends Vue {
  isTransparent: boolean = true

  mounted () {
    this.watchToPageYOffset ()
  }

  watchToPageYOffset () {
    window.addEventListener("scroll", () => {
      this.isTransparent = window.pageYOffset < 888
    })
  }

}
</script>
