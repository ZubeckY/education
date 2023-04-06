<template>
  <personal-settings-color :color="color"
                           :buttonTitle="'Изменить цвет текста'"
                           @emitColor="emitColor"/>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class ColorText extends Vue {
  @Prop() color?: string
  emitColor (value: any) {
    this.$emit('emitText', value)
  }
}
</script>
