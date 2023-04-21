<template>
  <v-card elevation="0">
    <v-navigation-drawer fixed app :mini-variant="miniVariant">
      <v-list>
        <v-btn text @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <v-list-item v-for="(item, i) in items"
                     :key="i" :to="item.to"
                     router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({
  layout: 'clear'
})
export default class System extends Vue {
  miniVariant: boolean = false
  items: any = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: ''
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'test',
      to: ''
    }
  ]
}
</script>
