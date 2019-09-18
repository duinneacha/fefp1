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
        <q-route-tab to="/" icon="home" label="Home"/>
        <q-route-tab to="/visitor" icon="menu_book" label="Visitor"/>
        <q-route-tab to="/exhibitor" icon="shop" label="Exhibitor"/>
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
          to="/"
          exact
          clickable >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            
          </q-item-section>
        </q-item>

        <q-item 
          to="/visitor"
          exact
          clickable >
          <q-item-section avatar>
            <q-icon name="menu_book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Visitors</q-item-label>
            
          </q-item-section>
        </q-item>
        <q-item 
          to="/exhibitor"
          exact
          clickable >
          <q-item-section avatar>
            <q-icon name="shop" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Exhibitors</q-item-label>
            
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
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>
