<template>
  <q-layout view="LHh lpr lFf">

        
    <q-header elevated class="glossy">
      <q-toolbar>
        

        <q-toolbar-title class="absolute-center text-weight-bold">
          Cork Book Fair
        </q-toolbar-title>
        <q-btn
          flat
          color="white"
          @click="openURL('https://www.facebook.com/aidan.dennehy')"
          icon="thumb_up"
          class="absolute-right"
          label=""/>

        <q-btn 
          color="red"
          v-if="!subscribe"
          v-model="subscribe"
          @click="subscriber()"
          size="sm"
          class="left" 
          label="Subscribe">
        </q-btn>
          
          <q-btn 
          color="green"
          v-model="subscribe"
          v-else
          size="sm"
          @click="subscriber()"
          class="left subsc" 
          label="Subscribed">
          

          <!-- v-if="$q.screen.gt.xs" -->
          
          
        </q-btn>
        
  
      </q-toolbar>


        <!-- <div class="q-pa-md q-gutter-sm"> -->
  
          <q-dialog v-model="prompt" persistent>
            <q-card style="min-width: 350px">
              <q-card-section>
                <div class="text-h6">Your Email</div>
              </q-card-section>

              <q-card-section>
                <q-input dense v-model="emailAddress" autofocus @keyup.enter="prompt = false" />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Add Email" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
     <!-- </div> -->
        
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
      emailAddress: 'Email',
      prompt: false,
      subscribe: false,
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
    openURL,
    subscriber() {
      console.log("In subscribe")
      this.prompt = true
      this.subscribe = !this.subscribe
      
    }
  }
}
</script>

<style scoped lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }

    .subsc {
      font-size: .5em;
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