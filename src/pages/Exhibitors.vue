<template>
  <q-page padding>
    
    <div class="q-pa-md">
        <q-card class="my-card">
          <!-- <q-parallax
            src="https://panoramicireland.com/images/osservicesbooking/services/1513430931_panoramic-ireland-New-York-Times-36-Hours-Cork.jpg"
            
            :height="200"
          /> -->
          <q-img
            src="https://panoramicireland.com/images/osservicesbooking/services/1513430931_panoramic-ireland-New-York-Times-36-Hours-Cork.jpg"
            :ratio="16/9"
           />

          <q-card-section>
            <div class="text-h2 text-center">{{ exhibitorMessage }}</div>
            <div class="text-subtitle2">Book your stands at our Book Fair here</div>
            <div class="text-subtitle2">In Cork City Hall and Pairc Ui Chaoimh 18th-22nd July </div>
            
            <q-btn
              size="22px"
              class="q-px-xl q-py-xs"
              color="purple"
              label="Book"
            />
         </q-card-section>
        </q-card>
      </div>

      <q-dialog v-model="exhibitorBook">
        <q-card>
          <q-toolbar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
  
            <q-toolbar-title><span class="text-weight-bold">Quasar</span> Framework</q-toolbar-title>
  
            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
  
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>



  </q-page>
</template>

<script>
export default {
  data() {
    return {
      exhibitorBook: true,
      exhibitorMessage: 'Exhibitor',
      exhibitors: [
        {
          id: 1,
          name: 'Cambridge University Press',
          paid: false
        },
        {
          id: 2,
          name: 'Association of Taipei Publishers',
          paid: false
        },
        {
          id: 3,
          name: 'Argentina Consulate General',
          paid: false
        },
        {
          id: 4,
          name: 'Hong Kong University Press',
          paid: false
        },
      ],
      authors: [
        {
          id: 1,
          name: 'Adam Wyeth',
          image: 'https://imgur.com/0Y12tF8'
        },
        {
          id: 2,
          name: 'Alice Kinsella',
          image: 'https://imgur.com/3kwdjOq'
        },
        {
          id: 3,
          name: 'Bill Whelan',
          image: 'https://imgur.com/Ax7NWKc'
        },
        {
          id: 4,
          name: 'Cecilia Ahern',
          image: 'https://imgur.com/BWbTE89'
        },
        {
          id: 5,
          name: 'Christopher Lloyd',
          image: 'https://imgur.com/21hoJ4s'
        },
        {
          id: 6,
          name: 'Cinta Ramblado',
          image: 'https://imgur.com/5ChFgsJ'
        },
        {
          id: 7,
          name: 'Clodagh Beresford-Dunne',
          image: 'https://imgur.com/QKwYidG'
        },
        {
          id: 8,
          name: 'Donal Ryan',
          image: 'https://imgur.com/D9wvAQ9'
        },
        {
          id: 9,
          name: 'Emer McLysaght',
          image: 'https://imgur.com/YmtDEJy'
        },
        {
          id: 10,
          name: 'Emilie Pine',
          image: 'https://imgur.com/VGRBusI'
        },
        {
          id: 11,
          name: 'Eoin Devereux',
          image: 'https://imgur.com/hCzqzdi'
        },
        {
          id: 12,
          name: 'Jo Slade',
          image: 'https://imgur.com/hDFC2bF'
        },
        {
          id: 13,
          name: 'Loic Guyon',
          image: 'https://imgur.com/geVMeE1'
        },
        {
          id: 14,
          name: 'Louise ONeill',
          image: 'https://imgur.com/htXAR3v'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
