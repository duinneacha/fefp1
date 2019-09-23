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
      ]
    }
  }
}
</script>

<style scoped>

</style>
