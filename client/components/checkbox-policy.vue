<template>
  <v-checkbox v-model="model.iAcceptPolicy" @click="emitAccept">
    <template v-slot:label>
      <div>Я согласен с</div>

      <v-dialog v-model="dialog"
                width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-0 mx-2 pa-0" color="primary"
                 v-bind="attrs" v-on="on"
                 style="text-transform: none" text>
            политикой кондифициальности
          </v-btn>
        </template>

        <v-card>
          <v-card-title>Политика кондифициальности</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary"
                   text block
                   @click="dialog = false">
              ОК
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <div>сайта</div>
    </template>
  </v-checkbox>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class CheckboxPolicy extends Vue {
  @Prop({required: true})
  iAcceptPolicy!: boolean

  dialog: boolean = false
  model: any = {
    iAcceptPolicy: false
  }

  created () {
    this.changeAccept ()
  }

  @Watch('iAcceptPolicy')
  changeAccept () {
    return this.model.iAcceptPolicy = this.iAcceptPolicy
  }

  emitAccept () {
    this.$emit('emitAccept', this.model.iAcceptPolicy)
  }

}
</script>

