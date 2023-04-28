<template>
  <!--  todo сделать кастомизацию -->
  <v-card class="rounded-0 pa-0"
          elevation="0">
    <div :style="getFontSize"> {{ hours }} : {{ minutes }} </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
@Component
export default class TimeNow extends Vue {
  @Prop () fontSize?: number
  hours: any = new Date().getHours()
  minutes: any = new Date().getMinutes()

  get getFontSize () {
    return `font-size: ${this.fontSize ? this.fontSize + 'px' : '20px'}`
  }

  created () {
    setInterval(() => {
      this.hours = this.checkValue (new Date().getHours())
      this.minutes = this.checkValue (new Date().getMinutes())
    },1000)
  }

  checkValue (value: any) {
    return value < 10 ? "0" + value : value
  }

}
</script>
