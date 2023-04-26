<template>
  <v-card elevation="0" style="position: relative">
    <messages-no-current-branch/>
    <v-card-text style="position: relative">
      <v-fab-transition>
        <v-btn color="pink"
               dark absolute
               top right fab>
          <v-icon>mdi-message</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'messages'
})
export default class Messages extends Vue {

}
</script>
