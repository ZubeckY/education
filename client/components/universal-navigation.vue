<template>
  <v-navigation-drawer fixed app
                       :mini-variant="miniVariant">
    <v-list>
      <v-card class="text-left py-2 pl-4" elevation="0"
              @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ miniVariant ? 'mdi-menu' : 'mdi-close' }}</v-icon>
      </v-card>

      <v-list-item router exact>
        <v-list-item-action>
          <v-avatar :color="user.color" size="24">
            <v-img :src="user.img"></v-img>
          </v-avatar>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ user.name }} {{user.secondName}} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="(item, i) in items"
                   :key="i" :to="item.link"
                   router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
            <v-badge v-show="item.active"
                     dot color="error"
                     offset-x="-5"
                     offset-y="-5"/>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class UniversalNavigation extends Vue {
  @Prop() user!: any
  @Prop() items!: any

  miniVariant: boolean = false
}
</script>
