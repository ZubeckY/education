<template>
  <v-dialog v-model="dialog" width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="error"
             :disabled="disabled"
             v-on="on"
             v-bind="attrs">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Удаление роли</v-card-title>
      <v-card-text>
        Вы действительно хотите удалить роль
        <strong> {{item?.role}} </strong>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="error">Удалить</v-btn>
        <v-spacer/>
        <v-btn text color="indigo">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
@Component
export default class Delete extends Vue {
  @Prop() disabled?: boolean
  @Prop() item?: any

  dialog: boolean = false
}
</script>
