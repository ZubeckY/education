<template>
  <div class="text-center">
    <v-dialog v-model="dialog"
              width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="indigo" icon
               title="Информация"
               v-on="on" v-bind="attrs">
          <v-icon>mdi-information-slab-circle-outline</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <pre v-text="user"></pre>
        </v-card-text>

        <v-card-actions>
          <v-btn block text color="indigo"
                 @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
@Component
export default class Info extends Vue {
  @Prop() user?: any
  dialog: boolean = false
}
</script>
