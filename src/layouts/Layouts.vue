<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Cork Book Fair
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key=nav.to
          :to="nav.to"
          :icon="nav.icon" 
          :label="nav.label"/>
        
        
      </q-tabs>
      
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>

        <q-item 
          v-for="nav in navs"
          :key=nav.to
          :to="nav.to"
          exact
          clickable >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Home',
          icon:  'home',
          to: '/'
        },
                {
          label: 'Visitor',
          icon:  'menu_book',
          to: '/visitor'
        },
                {
          label: 'Exhibitors',
          icon:  'shop',
          to: '/exhibitor'
        }


      ]
    }
  },
  methods: {
    openURL
  }
}
</script>
