<template>
  <v-dialog v-model="dialog" width="300">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined
             v-on="on"
             v-bind="attrs"
             class="text-none">
        {{ buttonTitle }}
        <v-btn icon :color="colorLocal">
          <v-icon>mdi-square-rounded</v-icon>
        </v-btn>
      </v-btn>
    </template>
    <v-card>
      <v-color-picker dot-size="22"
                      :mode.sync="mode"
                      v-model="colorLocal"
                      swatches-max-height="180"/>
      <v-select v-model="mode"
                :items="modes"
                class="mx-auto"
                style="max-width: 280px; width: 100%;"/>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text
               @click="dialog = false">
          Изменить
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Color extends Vue {
  @Prop() color!: string
  @Prop() buttonTitle!: string

  mode: string = 'rgba'
  colorLocal: string = ''
  modes: string[] = ['rgba', 'hsla', 'hexa']
  dialog: boolean = false
  created () {
    this.colorLocal = this.color
  }
  @Watch("colorLocal")
  emitColor () {
    this.$emit("emitColor", this.colorLocal)
  }

}
</script>
