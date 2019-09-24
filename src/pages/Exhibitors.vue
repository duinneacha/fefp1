<template>
  <q-page padding>
    <h5>{{ exhibitorMessage }}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
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
          imgage: 'https://imgur.com/0Y12tF8'
        },
        {
          id: 2,
          name: 'Alice Kinsella',
          imgage: 'https://imgur.com/3kwdjOq'
        },
        {
          id: 3,
          name: 'Bill Whelan',
          imgage: 'https://imgur.com/Ax7NWKc'
        },
        {
          id: 4,
          name: 'Cecilia Ahern',
          imgage: 'https://imgur.com/BWbTE89'
        },
        {
          id: 5,
          name: 'Christopher Lloyd',
          imgage: 'https://imgur.com/21hoJ4s'
        },
        {
          id: 6,
          name: 'Cinta Ramblado',
          imgage: 'https://imgur.com/5ChFgsJ'
        },
        {
          id: 7,
          name: 'Clodagh Beresford-Dunne',
          imgage: 'https://imgur.com/QKwYidG'
        },
        {
          id: 8,
          name: 'Donal Ryan',
          imgage: 'https://imgur.com/D9wvAQ9'
        },
        {
          id: 9,
          name: 'Emer McLysaght',
          imgage: 'https://imgur.com/YmtDEJy'
        },
        {
          id: 10,
          name: 'Emilie Pine',
          imgage: 'https://imgur.com/VGRBusI'
        },
        {
          id: 11,
          name: 'Eoin Devereux',
          imgage: 'https://imgur.com/hCzqzdi'
        },
        {
          id: 12,
          name: 'Jo Slade',
          imgage: 'https://imgur.com/hDFC2bF'
        },
        {
          id: 13,
          name: 'Loic Guyon',
          imgage: 'https://imgur.com/geVMeE1'
        },
        {
          id: 14,
          name: 'Louise ONeill',
          imgage: 'https://imgur.com/htXAR3v'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
