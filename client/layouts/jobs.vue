<template>
  <v-app style="position: relative">
    <div v-if="loading">
      <v-progress-linear
        color="teal"
        indeterminate
        stream
      ></v-progress-linear>
      <v-dialog v-model="dialog"
                max-width="340">
        <v-card>
          <v-card-title class="justify-center">Внимание!</v-card-title>
          <v-card-text>
            Вы не имеете доступ к данному ресурсу! <br>
            Чтобы получить доступ на данный ресурс, обратитесь к куратору.
          </v-card-text>
          <v-card-actions>
            <v-btn block @click="closeDialog">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-container v-else>
      <nuxt/>
    </v-container>
    <jobs-help style="position: fixed; bottom: 30px; right: 30px;"/>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Jobs extends Vue {
  loading: boolean = false
  dialog: boolean = false

  routing (link: string) {
    this.$router.push(link)
  }

  created () {
    this.checkRole()
  }

  checkRole(){
    if (!this.$store.state.user.role.includes(['admin', 'jobs'])) {
      return this.dialog = true
    }
    this.loading = false
  }

  closeDialog () {
    this.dialog = false
    setTimeout(() => {
      this.routing('/')
    }, 500)
  }

}
</script>
