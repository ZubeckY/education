<template>
  <v-container class="my-0 py-0">
    <v-card-actions class="my-0 py-0">
      <main-header-button buttonLink="/"
                          buttonTitle="Главная">
      </main-header-button>

      <v-spacer/>

      <main-header-button buttonLink="/"
                          buttonTitle="Уведомления">
      </main-header-button>
      <main-header-button buttonLink="/"
                          buttonTitle="Сообщения">
      </main-header-button>

      <main-header-button buttonLink="/personal"
                          buttonTitle="Кабинет">
      </main-header-button>
    </v-card-actions>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Header extends Vue {
}
</script>
