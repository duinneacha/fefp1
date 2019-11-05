<template>
  <q-page class="q-pa-md">


    <div class="q-pa-md">
        <q-card class="my-card">
          <!-- <q-parallax
            src="https://panoramicireland.com/images/osservicesbooking/services/1513430931_panoramic-ireland-New-York-Times-36-Hours-Cork.jpg"
            
            :height="200"
          /> -->

          <q-img
            src="https://panoramicireland.com/images/osservicesbooking/services/1513430931_panoramic-ireland-New-York-Times-36-Hours-Cork.jpg"
             sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
            style="height: 280px; width: 100%"
           />
          <q-card-section>
            <div class="text-h4 text-center">{{ visitorMessage }}</div>
            <div class="text-subtitle2">Register and book your tickets</div>
            <div class="text-subtitle2">In Cork City Hall and Pairc Ui Chaoimh 18th-22nd July </div>

            
            <div class="q-pa-md q-gutter-sm">
              <q-btn 
                label="Rules and Regulations"
                color="primary" 
                size="22px"
                class="q-px-xl q-py-xs"
                @click="termsDisplay = true" />

              <q-btn
                v-model="registerCard"
                :disable="!termsAccepted"
                @click="registerCard = true"
                size="22px"
                class="q-px-xl q-py-xs"
                color="blue"
                label="Register"
              />
            </div>

            <div class="text-subtitle2">You must Accept Rules & Regulations to Register</div>

         </q-card-section>
        </q-card>
      </div>

<!--  -->

      <div class="q-pa-md q-gutter-sm">
      
          <q-dialog v-model="termsDisplay">
            <q-card>
              <q-card-section>
                <div class="text-h6">Visitor Rules & Regulations</div>
              </q-card-section>
      
              <q-separator />
      
              <q-card-section style="max-height: 50vh" class="scroll">
                
                <div class="q-pa-xs">
        
                  <p>Your registration for the Exhibition, or entry to our exhibition venue, signifies your acceptance of these
                  Rules and Regulations and any other rules and regulations referenced herein or reasonably notified to you
                  at the Exhibition venue, with which you agree to observe and comply.</p>

                  <p> Visitors do not have the Organizer’s permission to attend, and may not attend, the Exhibition without
                  confirming your acceptance of these Rules and Regulations in writing prior to your attendance. Your
                  admission badge allows you entrance to concurrent Exhibitions organized by the government with other
                  event partners. By doing so, you accept and agree to abide by the Visitor’s Rules & Regulations of
                  respective Exhibition.</p>

                  <p><strong>1. Visitor’s Conduct:</strong> You shall not do or permit to be done any action which causes or may cause
                  any disturbance, nuisance, annoyance, inconvenience, damage or danger to any person or thing or
                  which in the opinion of the Organizer does not conform to the general standards of the Exhibition
                  or constitutes a breach of these Rules and Regulations.</p>
                  <p>We reserve the right to refuse admittance to any visitor or to require any visitor to leave if their
                  behavior is in breach of these Rules and Regulations, or contravenes applicable laws or regulations.
                  Our opinion is final in this regard.</p>

                  <p><strong>2. Liability:</strong> We shall not be liable for any loss of or damage to any of your property occurring in or
                  about the Exhibition venue, or for the death of or any injury sustained by any visitor whilst in or
                  about the Exhibition venue, other than for death or injury resulting from our negligence or which
                  otherwise cannot be excluded or restricted at law.</p>
                  <p>
                  You agree that we shall not incur any liability to you for any goods or services offered or sold by,
                  or representations made by, any Exhibitor at the Exhibition.</p>
                  <p> You agree to indemnify and hold us harmless against any damage or allegations of damage caused
                  by you to the property, business or reputation of us, other Exhibitors or Visitors or the operator of
                  the Exhibition venue, including but not limited to damages arising from your breach of these Rules
                  and Regulations.</p>
                  <p>You agree that we shall not incur any liability to you for any error or omission in any information
                  relating to any Exhibitor or its products in the Exhibition’s official directory or in any other
                  promotional or other printed materials or information provided by us or that Exhibitor.</p>

                  <p><strong>3. Recording:</strong> You shall not record images in any form while attending the Exhibition without our
                  prior written consent. Such prohibition includes, but is not limited to, the taking of photographs,
                  video or digital recording of any type and drawing or sketching of images. You agree to surrender
                  to us on demand whatever media on which images may be recorded in violation of this rule.</p>

                  <p>The copyright and other intellectual property or other rights (including for the avoidance of doubt,
                  rights in sound recording and broadcasts) in materials created in violation of this clause 4, whether
                  arising now or in the future, shall belong to us unconditionally from the time of their creation, and
                  you agree to do all acts and execute all such documents as may be required to properly vest the
                  same.</p>
                  <p>
                  You agree to indemnify and hold us harmless against all claims, liabilities, losses, proceedings,
                  damages, judgments, expenses, costs (including legal fees) and charges of any kind howsoever
                  incurred by or on behalf of or made against us arising out of any infringement or other claim
                  relating to or arising out of the unauthorized making of any recordings by you.</p>
                  <p>
                  You acknowledge and agree that we may take photographs/videos which could include images
                  of you while attending the Exhibition. You hereby consent to and grant to us, the unrestricted,
                  perpetual, worldwide, royalty-free and transferable right and license to use such images worldwide
                  without any compensation. You acknowledge that we are the exclusive owner of all rights in such
                  images and hereby waive (a) any and all rights in and to them, and (b) any and all claims you may
                  have relating to or arising from our use of them.</p>
                </div>

              </q-card-section>
      
              <q-separator />
      
              <q-card-actions align="right">
                <q-btn flat label="Decline" color="primary" v-close-popup />
                <q-btn flat label="Accept" @click="termsAccepted = true" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      

<!--  -->
        <q-btn color="blue" class="full-width q-mt-md" label="Book List" />

        <div class="q-pa-md">
           <q-table
             grid
             title="Book List"
             :data="bookList"
             :columns="columns"
             row-key="name"
             :filter="filter"
             hide-header
           >
         <template v-slot:top-right>
           <q-input dense debounce="300" v-model="filter" placeholder="Search">
             <template v-slot:append>
               <q-icon name="search" />
             </template>
           </q-input>
         </template>
       </q-table>
     </div>
   
     
    
    <!-- // Exhibitor Tree -->
    <q-btn color="blue" class="full-width q-mt-md" label="List of Exhibitors" />
    <div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="bookExhibitors"
      accordion
      node-key="label"
      :expanded.sync="expanded"
    />
   </div>

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

    <q-dialog v-model="registerCard">
      <q-card>
        <q-img src="https://i.imgur.com/Xn3xqep.jpg" />

        <q-card-section>
          <!-- <div class="text-subtitle1">Please choose from the following options</div> -->
          <div class="text-subtitle2 text-grey">
            <p>Regular tickets dated 18 and 19 July can enjoy one-time free admission on 20, 21or 22 July after 5pm by presenting the whole stub attached to the admission ticket.</p>
            <p>Morning Admission Ticket (entry before 12:00 noon): 3 euros (available for sale each day during the event).</p>
          </div>
        </q-card-section>
        
        <q-card-section>
           <div class="q-gutter-sm">
               <q-badge color="blue" size="122px" label="18th July" />
              <q-checkbox v-model="visEvent" val="morning1" label="Morning" color="teal" />
              <q-checkbox v-model="visEvent" val="allday1" label="All Day" color="orange" />
           </div>
           <div class="q-gutter-sm">
               <q-badge color="blue" size="122px" label="19th July" />
              <q-checkbox v-model="visEvent" val="morning2" label="Morning" color="teal" />
              <q-checkbox v-model="visEvent" val="allday2" label="All Day" color="orange" />
           </div>
           <div class="q-gutter-sm">
               <q-badge color="blue" size="122px" label="20th July" />
              <q-checkbox v-model="visEvent" val="morning3" label="Morning" color="teal" />
              <q-checkbox v-model="visEvent" val="allday3" label="All Day" color="orange" />
           </div>
           <div class="q-gutter-sm">
               <q-badge color="blue" size="122px" label="21st July" />
              <q-checkbox v-model="visEvent" val="morning4" label="Morning" color="teal" />
              <q-checkbox v-model="visEvent" val="allday4" label="All Day" color="orange" />
           </div>
           <div class="q-gutter-sm">
               <q-badge color="blue" size="122px" label="22nd July" />
              <q-checkbox v-model="visEvent" val="morning5" label="Morning" color="teal" />
              <q-checkbox v-model="visEvent" val="allday5" label="All Day" color="orange" />
           </div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="right">
          <q-btn
            :loading="loading" 
            color="primary" 
            @click="simulateProgress()" 
            style="width: 150px"
            >
            Register
           <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Registering...
           </template>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    
    <!-- Show Conformation -->
    <q-dialog v-model="showConfirmation">
       <div class="q-pa-md q-gutter-sm">
      
        <q-card>
            <q-img 
              src="https://i.imgur.com/pO1Yq1Wb.jpg"
                 sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
            style="height: 280px; width: 100%"
            :ratio="16/9"
              contain
               />


          <q-card-section>

            <h6>Confirmed!</h6>
            <!-- <div class="text-subtitle1">Please choose from the following options</div> -->
            <!-- <div class="text-subtitle2 text-grey">
              <p>Regular tickets dated 18 and 19 July can enjoy one-time free admission on 20, 21or 22 July after 5pm by presenting the whole stub attached to the admission ticket.</p>
              <p>Morning Admission Ticket (entry before 12:00 noon): 3 euros (available for sale each day during the event).</p>
            </div> -->
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn 
              color="secondary"
              icon-right="mail"
              :loading="loadingEmail"
              @click="simulateEmail()">
              Email Receipt
              <template v-slot:loading>
                <q-spinner-hourglass class="on-left" />
                Sending...
            </template>
            </q-btn>

            <q-btn
              color="red" 
              icon-right="print"
              :loading="loadingPrint"
              @click="simulatePrint()">
              Print Receipt
              <template v-slot:loading>
                <q-spinner-hourglass class="on-left" />
                Printing...
            </template>
            </q-btn>

          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>

  </q-page>
</template>

<script>


export default {
  
  components: {
    'register' : require('components/Register.vue').default,
    'terms' : require('components/Terms.vue').default
  },

  data() {
    return {
      selection: [],
      visEvent: [],
      filter: '',
      termsAccepted: false,
      termsDisplay: false,
      loading: false,
      loadingPrint: false,
      loadingEmail: false,
      percentage: 0,
      registerCard: false,
      showConfirmation: false,
      visitorMessage: 'Welcome Visitors',
      columns: [
        {
          name: 'title',
          required: true,
          label: 'Title',
          align: 'left',
          field: row => row.title,
          format: val => `${val}`,
          sortable: true
        },

        { name: 'author', align: 'center', label: 'Author', field: 'author', sortable: true },
        { name: 'language', align: 'center', label: 'Language', field: 'language', sortable: true },
        { name: 'pages', align: 'right', label: 'Pages', field: 'pages', sortable: true },
        { name: 'year', align: 'center', label: 'Year', field: 'year', sortable: true }

     ],
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
          exhibitor: 'UCC University Press',
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
        },
        {
          id: 4,
          exhibitor: 'New York Publishers',
          location: 'Pairc Ui Chaoimh',
          date: '2019/07/24',
          time: 'allDay',
          attending: false
        },
        {
          id: 5,
          exhibitor: 'Association of Limerick Publishers',
          location: 'Pairc Ui Chaoimh',
          date: '2019/07/24',
          time: 'allDay',
          attending: false
        }

      ],
      bookList: [
        {
          author: "Chinua Achebe",
          country: "Nigeria",
          language: "English",
          link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
          pages: 209,
          title: "Things Fall Apart",
          year: 1958
        },
        {
          author: "Hans Christian Andersen",
          country: "Denmark",
          language: "Danish",
          link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
          pages: 784,
          title: "Fairy tales",
          year: 1836
        },
        {
          author: "Dante Alighieri",
          country: "Italy",
          language: "Italian",
          link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
          pages: 928,
          title: "The Divine Comedy",
          year: 1315
        },
        {
          author: "Unknown",
          country: "Sumer and Akkadian Empire",
          language: "Akkadian",
          link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
          pages: 160,
          title: "The Epic Of Gilgamesh",
          year: -1700
        },
        {
          author: "Unknown",
          country: "Achaemenid Empire",
          language: "Hebrew",
          link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
          pages: 176,
          title: "The Book Of Job",
          year: -600
        },
        {
          author: "Unknown",
          country: "India/Iran/Iraq/Egypt/Tajikistan",
          language: "Arabic",
          link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
          pages: 288,
          title: "One Thousand and One Nights",
          year: 1200
        },
        {
          author: "Unknown",
          country: "Iceland",
          language: "Old Norse",
          link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
          pages: 384,
          title: "Nj\u00e1l's Saga",
          year: 1350
        },
        {
          author: "Jane Austen",
          country: "United Kingdom",
          language: "English",
          link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
          pages: 226,
          title: "Pride and Prejudice",
          year: 1813
        },
        {
          author: "Honor\u00e9 de Balzac",
          country: "France",
          language: "French",
          link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
          pages: 443,
          title: "Le P\u00e8re Goriot",
          year: 1835
        },
        {
          author: "Samuel Beckett",
          country: "Republic of Ireland",
          language: "French, English",
          link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
          pages: 256,
          title: "Molloy, Malone Dies, The Unnamable, the trilogy",
          year: 1952
        },
        {
          author: "Giovanni Boccaccio",
          country: "Italy",
          language: "Italian",
          link: "https://en.wikipedia.org/wiki/The_Decameron\n",
          pages: 1024,
          title: "The Decameron",
          year: 1351
        },
        {
          author: "Jorge Luis Borges",
          country: "Argentina",
          language: "Spanish",
          link: "https://en.wikipedia.org/wiki/Ficciones\n",
          pages: 224,
          title: "Ficciones",
          year: 1965
        },
        {
          author: "Emily Bront\u00eb",
          country: "United Kingdom",
          language: "English",
          link: "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
          pages: 342,
          title: "Wuthering Heights",
          year: 1847
        },
        {
          author: "Albert Camus",
          country: "Algeria, French Empire",
          language: "French",
          link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
          pages: 185,
          title: "The Stranger",
          year: 1942
        },
        {
          author: "Paul Celan",
          country: "Romania, France",
          language: "German",
          link: "\n",
          pages: 320,
          title: "Poems",
          year: 1952
        },
        {
          author: "Louis-Ferdinand C\u00e9line",
          country: "France",
          language: "French",
          link: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
          pages: 505,
          title: "Journey to the End of the Night",
          year: 1932
        },
        {
          author: "Miguel de Cervantes",
          country: "Spain",
          language: "Spanish",
          link: "https://en.wikipedia.org/wiki/Don_Quixote\n",
          pages: 1056,
          title: "Don Quijote De La Mancha",
          year: 1610
        },
        {
          author: "Geoffrey Chaucer",
          country: "England",
          language: "English",
          link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
          pages: 544,
          title: "The Canterbury Tales",
          year: 1450
        }
      ],
      
      bookExhibitors: [
        {
          label: 'Exhibitors',
          children: [
            {
              label: 'Fantasy',
              children: [
                {
                  label: 'Cambridge University Press',
                  children: [
                    {label: 'City Hall - Booth 23'},
                    {label: 'Pairc Ui Chaoimh - Booth L4'},
                    {label: 'Website - www.cup.co.uk'},
                    {
                      label: 'Books',
                      children: [
                        {label: 'One Flew Over the Cuckoos Nest'},
                        {label: 'The Stranger'},
                        {label: 'Wuthering Heights'},
                        {label: 'Poems of Ireland'},
                        {label: 'Polish Songs'},
                        {label: 'American Rap'}
                      ]
                    }
                  ]
                },
                {
                  label: 'Association of Taipei Publishers',
                  children: [
                    {label: 'City Hall - Booth 13'},
                    {label: 'Pairc Ui Chaoimh - Booth L1'},
                    {label: 'Website - www.ATP.cn'},
                    {
                      label: 'Books',
                      children: [
                        {label: 'The Witcher'},
                        {label: 'The Other Stranger'},
                        {label: 'Great Heights'},
                        {label: 'Poems of Beijing'}
                        
                      ]
                    }
                  ]
                }

              ]
            },
            {
              label: 'True Life',
              children: [
                {
                  label: 'New York Publishers',
                  children: [
                    {label: 'City Hall - Booth 2'},
                    {label: 'Pairc Ui Chaoimh - Booth L1'},
                    {label: 'Website - www.NYP.com'},
                    {
                      label: 'Books',
                      children: [
                        {label: 'One Flew Over the Cuckoos Nest'},
                        {label: 'The Stranger'},
                        {label: 'Wuthering Heights'},
                        {label: 'Poems of Ireland'},
                        {label: 'Polish Songs'},
                        {label: 'American Rap'}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: 'Sports',
              children: [
                {
                  label: 'Association of Limerick Puclishers',
                  children: [
                    {label: 'City Hall - Booth 9'},
                    {label: 'Pairc Ui Chaoimh - Booth L7'},
                    {label: 'Website - www.ALR.ie'},
                    {
                      label: 'Books',
                      children: [
                        {label: 'Cork Wonder Years'},
                        {label: 'Carrigtwohill Still On Top'},
                        {label: 'Limerick Wasted Years'},
                        {label: 'Ballads of East Cork'}
                        
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
        
      ],
      expanded: ['Exhibitors']
    }
  },
  methods: {
     simulateProgress () {
        // we set loading state
        this.loading = true
        // simulate a delay
        setTimeout(() => {
          // we're done, we reset loading state
          this.loading = false
          this.registerCard = false
          this.showConfirmation = true
        }, 2000)
    },

    simulatePrint () {
        // we set loading state
        this.loadingPrint = true
        // simulate a delay
        setTimeout(() => {
          // we're done, we reset loading state
          this.loadingPrint = false
          this.showConfirmation = false
          this.$q.notify({
            message: 'Receipt Printed, thank you for your custom.',
            color: 'purple'
          })
        }, 2000)
    },

    simulateEmail () {
        // we set loading state
        this.loadingEmail = true
        // simulate a delay
        setTimeout(() => {
          // we're done, we reset loading state
          this.loadingEmail = false
          this.showConfirmation = false
          this.$q.notify({
            message: 'Email sent, thank you for your custom.',
            color: 'purple'
          })
        }, 2000)
    }

 }

}
</script>

<style scoped>

</style>
