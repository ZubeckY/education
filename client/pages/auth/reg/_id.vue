<template>
  <v-card elevation="0"
          :loading="loading"
          :disabled="loading">

    <div v-if="loading">
      <v-skeleton-loader class="mx-auto mt-3 mb-6"
                         width="300" type="heading"/>

      <v-skeleton-loader class="mx-auto my-3"
                         width="300" type="text"/>

      <v-skeleton-loader class="mx-auto my-3"
                         width="300" type="text"/>

      <v-skeleton-loader class="mx-auto my-3"
                         width="300" type="text"/>

      <v-skeleton-loader class="mx-auto"
                         width="300" type="actions"/>
    </div>
    <div v-else>
      <div v-if="isFind">
        <v-card-title class="justify-center">Почта подтверждена</v-card-title>
        <v-card-text class="text-center">Ваша почта подтверждена, можете продолжить пользоваться системой</v-card-text>
        <v-card-actions>
          <v-btn block
                 @click="routing('/personal')">Ок</v-btn>
        </v-card-actions>
      </div>
      <div v-else>
        <auth-error-link/>
      </div>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component ({
  layout: 'auth'
})
export default class RegContinue extends Vue {
  loading: boolean = true
  isFind: boolean = false

  created () {
    let currentRoute = this.$router.currentRoute.params.id

    if (!currentRoute) {
      this.isFind = false
      this.loading = false
      return
    }

    this.loading = false
    this.isFind = true
  }

  routing (link: string) {
    this.$router.push(link)
  }
}
</script>
