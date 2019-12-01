<template>
  <q-page padding>
    <!-- <h5>{{ introMessage }}</h5>
    <h1>AD</h1> -->
    <div class="q-pa-md">
    <q-card class="my-card">
      <!-- <q-parallax
        src="https://panoramicireland.com/images/osservicesbooking/services/1513430931_panoramic-ireland-New-York-Times-36-Hours-Cork.jpg"
        
        :height="200"
      /> -->
      <!-- <q-img
         src="https://panoramicireland.com/images/osservicesbooking/services/1513430931_panoramic-ireland-New-York-Times-36-Hours-Cork.jpg"
          sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
            style="height: 280px; width: 100%"
         :ratio="16/9"
      />
       -->
      <q-img
         src="./statics/cbf_logo.svg"
          sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
            style="height: 280px; width: 100%"
            contain
         :ratio="16/9"
      />


      <q-card-section>
        <!-- <div class="text-h2 text-center">Introduction</div> -->
        <div class="text-subtitle2">Enterprise Ireland and Higher Education Ireland welcome you to the Cork City Hall and Pairc Ui Chaoimh 18th-22nd July </div>
        <div class="row">
          <p> World Class Writers, Sensational Books, The Top Exhibitors</p>
          <p>All in Cork</p>
        </div>
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      :fullscreen.sync="fullscreen"
      infinite
    >
      <q-carousel-slide :name="1" img-src="./statics/carousel/31.jpg" />
      <q-carousel-slide :name="2" img-src="./statics/carousel/32.jpg" />
      <q-carousel-slide :name="3" img-src="./statics/carousel/33.jpg" />
      <q-carousel-slide :name="4" img-src="./statics/carousel/34.jpg" />
      <q-carousel-slide :name="5" img-src="./statics/carousel/35.jpg" />
      <q-carousel-slide :name="6" img-src="./statics/carousel/36.jpg" />
      <q-carousel-slide :name="7" img-src="./statics/carousel/37.jpg" />
      <q-carousel-slide :name="8" img-src="./statics/carousel/38.jpg" />
      <q-carousel-slide :name="9" img-src="./statics/carousel/39.jpg" />
      <q-carousel-slide :name="10" img-src="./statics/carousel/40.jpg" />
      <q-carousel-slide :name="11" img-src="./statics/carousel/41.jpg" />
      <q-carousel-slide :name="12" img-src="./statics/carousel/42.jpg" />
      <q-carousel-slide :name="13" img-src="./statics/carousel/43.jpg" />
      <q-carousel-slide :name="14" img-src="./statics/carousel/44.jpg" />
      <q-carousel-slide :name="15" img-src="./statics/carousel/45.jpg" />
      <q-carousel-slide :name="16" img-src="./statics/carousel/46.jpg" />
      <q-carousel-slide :name="17" img-src="./statics/carousel/47.jpg" />
      <q-carousel-slide :name="18" img-src="./statics/carousel/48.jpg" />
      <q-carousel-slide :name="19" img-src="./statics/carousel/49.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>

  <div class="row q-pa-md text-h3 text-center">Renowned Writers</div>
  <div class="q-pa-md row items-start q-gutter-md">
    
    <!-- <q-img
      v-for="author in authors"
      :key="author.id"
      :src="author.image"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    /> -->

     <q-card
       class="author-card"
       v-for="author in authors"
       :key="author.id"
       >

      <q-img
         :src="author.image"/>

      <q-card-section>
        <div class="text-h6">{{ author.name }}</div>
        <div class="text-subtitle2">{{ author.country }}</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
  <!-- place QPageScroller at end of page -->
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      introMessage: 'Cork Book Fair Introduction',
      authors: [
        {
          id: 1,
          name: 'Adam Wyeth',
          country: 'England',
          image: './statics/adimgs/Adam Wyeth_Colour.jpg'
        },
        {
          id: 2,
          name: 'Alice Kinsella',
          country: 'Dublin',
          image: './statics/adimgs/Alice_Kinsella.jpg'
        },
        {
          id: 3,
          name: 'Bill Whelan',
          country: 'Cork',
          image: './statics/adimgs/Bill-Whelan.jpg'
        },
        {
          id: 4,
          name: 'Cecilia Ahern',
          country: 'Kildare',
          image: './statics/adimgs/Cecilia-Ahern.jpg'
        },
        {
          id: 5,
          name: 'Christopher Lloyd',
          country: 'England',
          image: './statics/adimgs/Christopher-Lloyd.jpg'
        },
        {
          id: 6,
          name: 'Cinta Ramblado',
          country: 'Portugal',
          image: './statics/adimgs/Cinta-Ramblado.jpg'
        },
        {
          id: 7,
          name: 'Clodagh Beresford-Dunne',
          country: 'Wales',
          image: './statics/adimgs/Clodagh-Beresford-Dunne_Colour.jpg'
        },
        {
          id: 8,
          name: 'Donal Ryan',
          country: 'Limerick',
          image: './statics/adimgs/Donal-Ryan.jpg'
        },
        {
          id: 9,
          name: 'Emer McLysaght',
          country: 'Edinburgh',
          image: './statics/adimgs/Emer-McLysaght.jpg'
        },
        {
          id: 10,
          name: 'Emilie Pine',
          country: 'France',
          image: './statics/adimgs/Emilie Pine_Colour.jpg'
        },
        {
          id: 11,
          name: 'Eoin Devereux',
          country: 'Switzerland',
          image: './statics/adimgs/Eoin-Devereux.jpg'
        },
        {
          id: 12,
          name: 'Jo Slade',
          country: 'Dublin',
          image: './statics/adimgs/Jo Slade_Colour.jpg'
        },
        {
          id: 13,
          name: 'Loic Guyon',
          country: 'Belgium',
          image: './statics/adimgs/Loic_Guyon_Colour.jpg'
        },
        {
          id: 14,
          name: 'Louise ONeill',
          country: 'Tipperary',
          image: './statics/adimgs/Louise ONeill_Colour.jpg'
        }
      ],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      slide: 1,
      fullscreen: false

    }
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  
}
.author-card {
  width: 100%;
  max-width: 250px;
}
</style>
