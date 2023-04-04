<template>
  <v-dialog v-model="dialog" width="300">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-on="on"
             v-bind="attrs" dark
             :color="color"
             v-text="buttonTitle"/>
    </template>
    <v-card>
      <v-color-picker dot-size="22"
                      :mode.sync="mode"
                      v-model="color"
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
  modes: string[] = ['rgba', 'hsla', 'hexa']

  dialog: boolean = false

  @Watch("color")

  emitColor(){
    this.$emit("emitColor", this.color)
  }

}
</script>
