<template>
  <v-alert class="ma-0" width="100%"
           :color="item.color" outlined>
    <v-row>
      <v-col class="col-auto" v-text="item.text"></v-col>
      <v-spacer/>
      <v-col class="col-auto">
        <v-progress-circular :rotate="-90"
                             :value="timer">
          <v-btn :color="item.color"
                 @click="removeItem(item)" icon small>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-progress-circular>

      </v-col>
    </v-row>
  </v-alert>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
@Component export default class AlertApp extends Vue {
  @Prop({required: true}) item!: any
  private timer:number = 100
  private interval:any = {}

  created () {
    this.interval = setInterval(() => {
      if (this.timer === 0) {
        clearInterval(this.interval)
        setTimeout(() => {
          this.$store.commit('removeAlert', this.item)
        }, 500)
      }
      this.timer -= 5
    }, 250)
  }

  removeItem (item:any) {
    clearInterval(this.interval)
    this.$store.commit("removeAlert", item)
  }
}
</script>

