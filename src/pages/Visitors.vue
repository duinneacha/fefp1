<template>
  <q-page class="q-pa-md">
    <h5>{{ visitorMessage }}</h5>
   
    <q-list bordered>
      

      <q-item
         v-for="event in events"
         :key="event.id"
         @click="event.attending = !event.attending"
         clickable
         v-ripple>
         
         <q-item-section side top>
            <q-checkbox v-model="event.attending" />
         </q-item-section>

         <q-item-section>
           <q-item-label>{{event.exhibitor}}</q-item-label>
           <q-item-label caption>{{event.location}}</q-item-label>
         </q-item-section>

      </q-item>
      
    </q-list>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      visitorMessage: 'Visitors Page',
      events: [
        {
          id: 1,
          exhibitor: 'Cambridge University Press',
          location: 'City Hall',
          date: '2019/07/22',
          time: 'am',
          attending: false
        },
        {
          id: 2,
          exhibitor: 'Cambridge University Press',
          location: 'City Hall',
          date: '2019/07/23',
          time: 'am',
          attending: true
        },
        {
          id: 3,
          exhibitor: 'Association of Taipei Publishers',
          location: 'Pairc Ui Chaoimh',
          date: '2019/07/24',
          time: 'allDay',
          attending: false
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
