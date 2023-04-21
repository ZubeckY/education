<template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card>
      <v-card v-if="error.statusCode === 404" elevation="0">
        <v-card-title class="justify-center">404</v-card-title>
        <v-card-text class="text-center">Страница не найдена!</v-card-text>
      </v-card>

      <v-card-title v-else class="justify-center">{{ otherError }}</v-card-title>

      <v-card-actions>
        <v-btn class="text-none"
               text color="indigo"
               @click="$router.push('/')">
          Вернуться на главную
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'clear',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
