<template>

  <v-card class="mx-auto"
          elevation="0"
          :color="color"
          rounded="0"
          width="666">
    <slot>

    </slot>
  </v-card>

</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class CardContainer extends Vue {
  @Prop() color?:string
}
</script>
