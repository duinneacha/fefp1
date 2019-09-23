<template>
  <q-layout view="LHh lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        

        <q-toolbar-title class="absolute-center">
          AD Cork Book Fair
        </q-toolbar-title>

        <!-- <div>AD Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon" 
          :label="nav.label"/>
       </q-tabs>
    </q-footer>

     <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item 
          v-for="nav in navs"
          :key=nav.to
          :to="nav.to"
          class="text-grey-4"
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

<style scoped lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--exact-active {

      color: white !important;
      font-weight: bolder;
    }
    
  }
  .row > div {
  padding: 10px 15px;
  background: rgba(86,61,124,.15);
  // height: 100vh;
  border: 1px solid rgba(86,61,124,.2);
  }
.row + .row {
  margin-top: 1rem;
}

</style>