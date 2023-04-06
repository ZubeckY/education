<template>
  <personal-settings-color :color="color"
                           :buttonTitle="'Изменить цвет фона'"
                           @emitColor="emitColor"/>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class ColorBackground extends Vue {
  @Prop() color?: string
  emitColor (value: any) {
    this.$emit('emitBackground', value)
  }
}
</script>
