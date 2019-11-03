<template>
  <q-page class="q-pa-md">
    <h5>{{ homeMessage }}</h5>
   

  </q-page>
</template> 

<script>

export default {
  data() {
    return {
      homeMessage: 'Cork Book Fair',
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
