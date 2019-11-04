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
             sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
            style="height: 280px; width: 100%"
            :ratio="16/9"
           />

          <q-card-section>
            <div class="text-h2 text-center">{{ exhibitorMessage }}</div>
            <div class="text-subtitle2">Book your stands at our Book Fair here</div>
            <div class="text-subtitle2">In Cork City Hall and Pairc Ui Chaoimh 18th-22nd July </div>
            
            <q-btn
              size="22px"
              @click="exhibitorBook = true"
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
              <img src=".././statics/cbf_logo.svg">
            </q-avatar>
  
            <q-toolbar-title><span class="text-weight-bold">Cork Book Fair</span> Register</q-toolbar-title>
  
            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
  
           <div class="q-pa-md">
              <q-stepper
                v-model="step"
                vertical
                color="primary"
                animated
              >
                <q-step
                  :name="1"
                  title="Select the Venues you wish to exhibit at"
                  caption="Selecting both gives you a 10% discount!"
                  icon="book"
                  :done="step > 1"
                >

                  <div class="q-pa-md">
                  <div class="q-gutter-sm">

                    <p>
                    <q-checkbox v-model="locations" val="city" label="Cork City Hall (€1000)"/>
                    </p>
                    <p>
                    <q-checkbox v-model="locations" val="pairc" label="Pairc Ui Chaoimh (€1000)" />
                    </p>
                  </div>

                  <div class="q-px-sm">
                    You have selected: <strong>{{ locations }}</strong>
                  </div>
                </div>
          
                  <q-stepper-navigation>
                    <q-btn @click="step = 2" color="primary" label="Continue" />
                  </q-stepper-navigation>
                </q-step>
          
                <q-step
                  :name="2"
                  title="Please enter the Company and payee contact details"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 2"
                >
                  
                  <q-select outlined v-model="cardTypes" :options="cardList" label="Select Card Type" dense/>
                  <q-input 
                    v-model="compName" 
                    label="Company Name" 
                    placeholder="Company Name"
                    dense/>
          
                  <q-input 
                    v-model="authName" 
                    label="Authorised Card Holder" 
                    placeholder="Card Holder"
                    dense/>
          
                  <q-input 
                    v-model="emailA" 
                    label="Email Address" 
                    placeholder="Email Address"
                    dense/>

                  <q-input 
                    v-model="cardNumber" 
                    label="Card Number" 
                    placeholder="Card Number"
                    dense/>
          
                  <q-input 
                    v-model="cvvNo" 
                    label="cvvNo" 
                    placeholder="CVV Number" 
                    hint="3 digit number at back of the card"
                    dense/>
          


                  <q-stepper-navigation>
                    <q-btn @click="paymentSection()" color="primary" label="Continue" />
                    <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>
<!--           
                <q-step
                  :name="3"
                  title="Ad template"
                  icon="assignment"
                  
                >
                  This step won't show up because it is disabled.
                </q-step> -->
          
                <q-step
                  :name="4"
                  title="Process Payment"
                  icon="add_comment"
                >
                  
                  <div class="q-px-sm">
                    Your charge is: <strong>{{ paymentDue }}</strong>
                  </div>

                   <q-btn 
                      color="secondary"
                      icon-right="payment"
                      :loading="loadingPayment"
                      v-model="payOK"
                      v-if="payOK"
                      @click="simulatePayment()">
                      Process Payment
                      <template v-slot:loading>
                        <q-spinner-hourglass class="on-left" />
                        Processing...
                    </template>
                  </q-btn>


                   <q-btn 
                      color="red"
                      icon-right="payment"
                      v-model="payOK"
                      v-else
                      @click="step = 1">
                      Select Venue
                  </q-btn>
                  
          
                  <q-stepper-navigation>
                    <q-btn color="primary" label="Finish" @click="exhibitorBook = false" />
                    <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>
              </q-stepper>
            </div>
        </q-card>
      </q-dialog>



  </q-page>
</template>

<script>
export default {
  data() {
    return {
      compName: '',
      authName: '',
      emailA: '',
      cardNumber: '',
      cvvNo: '',
      payOK: false,
      cardTypes: '',
      paymentDue: '',
      cardList: ['MasterCard Debit', 'MasterCard Credit', 'Visa Debit', 'Visa Credit', 'Diners Club' ],
      loadingPayment: false,
      step: 1,
      locations: [],
      exhibitorBook: false,
      exhibitorMessage: 'Exhibitor',
    }
  },
  methods: {
    simulatePayment() {
      console.log("Simulating Payment")
      // we set loading state
        this.loadingPayment = true
        // simulate a delay
        setTimeout(() => {
          // we're done, we reset loading state
          this.loadingPayment = false
          // this.showConfirmation = false
          this.$q.notify({
            message: 'Payment Received, thank you for your custom.',
            color: 'purple'
          })
        }, 2000)
    },
    paymentSection() {
      this.step = 4;
      console.log("In Payment Section")
      console.log(this.locations)
      console.log(this.locations.length)
      
      if(this.locations.length>0) {
        this.payOK = true
      } else {
        this.payOK = false
        this.paymentDue = "€ 0"
      }
      if(this.locations.length == 2 ) {
        console.log("Length is 2!!!!")
        this.paymentDue = "€ 1800"
      } else if (this.locations.length == 1 ) {
        this.paymentDue = "€ 1000"
      }
    }
  }
}
</script>

<style scoped>

</style>
