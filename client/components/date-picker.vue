<template>
  <v-menu v-model="menu"
          offset-y
          ref="menu"
          min-width="auto"
          :close-on-content-click="false"
          transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field v-on="on"
                    v-bind="attrs"
                    v-model="date"
                    :label="label"
                    :rules="rules"
                    readonly>
      </v-text-field>
    </template>
    <v-date-picker v-model="date"
                   @change="save"
                   locale="ru-ru"
                   min="1950-01-01"
                   :first-day-of-week="1"
                   :active-picker.sync="activePicker"
                   :max="(new Date(Date.now() -
                   (new Date()).getTimezoneOffset() * 60000))
                   .toISOString().substr(0, 10)">
    </v-date-picker>
  </v-menu>
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator"
@Component
export default class DatePicker extends Vue {
  @Prop() rules?: any
  @Prop() label?: string
  @Prop() value?: string

  date: any = null
  menu: boolean = false
  activePicker: any = null

  created () {
    this.dateChange ()
  }
  @Watch('value')
  dateChange () {
    return this.date = this.value
  }
  @Watch('menu')
  menuChange (val:any) {
    val && setTimeout(() => (this.activePicker = 'YEAR'))
  }
  save (date:any) {
    // @ts-ignore
    this.$refs.menu.save (date)
    this.$emit ('save', date)
  }
}
</script>
