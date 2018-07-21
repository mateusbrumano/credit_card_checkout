<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-lg-4">
        <div class="card text-center" id="productView">
          <div class="card-body">
            <div class="row">
              <swiper :options="swiperOption">
                <swiper-slide v-for="slide in products" :key="slide.productId">
                  <img v-bind:src="slide.productImg" height="300" width="300">
                  <div class="card-body">
                    <h5 class="card-title">{{slide.productName}}</h5>
                    <small class="text-black-50">{{slide.productDescription}}</small>
                    <hr>
                    <div class="row">
                      <div class="col-md-6">
                        <small class="text-black-50">Color {{slide.productColor}}</small>
                      </div>
                      <div class="col-md-6">
                        <small class="text-black-50">Size {{slide.productSize}}</small>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              </swiper>
            </div>
            <div class="row text-left">
              <div class="col-md-4 offset-md-4">
                <small class="text-black-50">Total</small>
                <h4>${{totalProducts()}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-8">
        <a href="" id="productDetail"><icon name="angle-left"></icon><small>Product Details</small></a>
        <div class="card w-100 h-100" id="cardInfo">
          <form @submit="checkForm" class="card-body needs-validation" action="https://vuejs.org/" method="post">
            <h3 class="card-title">Credit Card</h3>
            <card-number-validator></card-number-validator>
            <div class="form-group">
              <label for="cardHolder">Card Holder</label>
              <div class="row">
                <div class="col-md-7">
                  <input type="text" class="form-control"
                         v-bind:class="{'is-invalid': isCardHolderNameValid === false, 'is-valid': isCardHolderNameValid === true}"
                         minlength="2" aria-describedby="cardHolder"
                         placeholder="Send your name" name="cardHolder" id="cardHolder" v-model="cardHolderName"
                         @change="checkHolder(cardHolderName)">
                  <div class="invalid-feedback">
                    Invalid Name!
                  </div>
                </div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-6">
                <label for="cardExpiresDate">Expires Date</label>
                <div class="row" id="cardExpiresDate">
                  <div class="col-md-6">
                    <select v-model="selectedMonth" class="custom-select"
                            v-bind:class="{'is-invalid': isExpired === true, 'is-valid': isExpired === false}"
                            @change="checkExpirationDate()" title="selectedMonth">
                      <option v-for="month in months" v-bind:value="month.value">
                        {{ month.text }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      Card Expired!
                    </div>
                  </div>
                  <div class="col-md-4">
                    <select v-model="selectedYear" class="custom-select"
                            v-bind:class="{'is-invalid': isExpired === true, 'is-valid': isExpired === false}"
                            @change="checkExpirationDate()" title="selectedYear">
                      <option v-for="year in years" v-bind:value="year">
                        {{ year }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label for="cardCVC">CVC</label>
                  <div class="row" id="cardCVC">
                    <div class="col-md-6">
                      <input type="text" class="form-control text-center" maxlength="3"
                             v-bind:class="{'is-invalid': isCvcNumberValid === false, 'is-valid': isCvcNumberValid === true}"
                             placeholder="000" v-model="cvcNumber" @keypress="isNumber()" @change="checkCVC()">
                      <div class="invalid-feedback">
                        Invalid CVC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center form-group">
              <div class="col-md-4">
                <button type="button" class="btn btn-light">Pay With Order</button>
              </div>
              <div class="col-md-4">
                <button type="submit" value="submit" class="btn btn-success">Checkout</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import CardNumberValidator from './components/shared/card-number-validator/CardNumberValidator.vue';

  export default {
    name: 'app',
    components: {
      CardNumberValidator
    },
    data() {
      return {
        cardHolderName: '',
        isNumberEmpty: true,
        isCardHolderNameValid: null,
        selectedMonth: new Date().getMonth(),
        months: [
          {text: 'January', value: 1},
          {text: 'February', value: 2},
          {text: 'March', value: 3},
          {text: 'April', value: 4},
          {text: 'May', value: 5},
          {text: 'June', value: 6},
          {text: 'July', value: 7},
          {text: 'August', value: 8},
          {text: 'September', value: 9},
          {text: 'October', value: 10},
          {text: 'November', value: 11},
          {text: 'December', value: 12}
        ],
        selectedYear: new Date().getFullYear(),
        isExpired: null,
        cvcNumber: '',
        isCvcNumberValid: null,
        swiperOption: {
          slidesPerView: 1,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        products: [
          {productId: 1, productName: 'NIKE ESSENTIAL', productDescription: 'Multimaterial contrasted runners', productColor: 'BLACK', productSize: '43', productPrice: 199.99, productImg: 'src/assets/nike-black.png'},
          {productId: 2, productName: 'CONVERSE', productDescription: 'Classic', productColor: 'WHITE', productSize: '37', productPrice: 50.00, productImg: 'src/assets/converse.png'},
          {productId: 3, productName: 'NIKE WHITE', productDescription: 'Multimaterial contrasted runners', productColor: 'WHITE', productSize: '41', productPrice: 89.90, productImg: 'src/assets/nike-white.png'},
          ]
      }
    },
    computed: {
      years() {
        const year = new Date().getFullYear();
        return Array.from({length: 20}, (value, index) => year + index)
      }
    },
    methods: {
      totalProducts(){
        let total = 0;

        for (var i = 0; i < Object.keys(this.products).length; i++) {
          total += this.products[i].productPrice;
        }
        return total;
      },
      isNumber: function (evt) {
        evt = (evt) ? evt : window.event;
        let charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          evt.preventDefault();
        } else {
          return true;
        }
      },
      checkHolder: function (name) {
        this.isCardHolderNameValid = name.length > 2;
      },
      checkExpirationDate: function () {
        let expirationYear = this.selectedYear.toString();
        let expirationMonth = this.selectedMonth.toString();
        let currentYear = new Date().getFullYear().toString();
        let currentMonth = new Date().getMonth().toString();
        if (expirationMonth.length < 2) expirationMonth = '0' + expirationMonth;
        if (currentMonth.length < 2) currentMonth = '0' + currentMonth;
        let sumExpiraiton = expirationYear + expirationMonth;
        let sumCurrent = currentYear + currentMonth;


        this.isExpired = sumExpiraiton < sumCurrent;
      },
      checkCVC: function () {
        let cvc = this.cvcNumber;
        this.isCvcNumberValid = cvc.length === 3;
      },

      checkForm: function (e) {
        // CardNumberValidator.methods.checkEmptyNumber();
        // alert(this.isNumberEmpty);
        if (!this.cardNumber1 || !this.cardNumber2 || !this.cardNumber3 || !this.cardNumber4) {
        // if (!CardNumberValidator.methods.checkEmptyNumber()) {
          this.$toasted.show('Card number required.', {
            type: 'error',
            theme: 'primary',
            position: 'top-right',
            duration: 2000
          });
          e.preventDefault();
        }
        if (!this.cardHolderName) {
          this.$toasted.show('Card holder required.', {
            type: 'error',
            theme: 'primary',
            position: 'top-right',
            duration: 2000
          });
          e.preventDefault();
        }
        if (!this.selectedMonth || !this.selectedMonth) {
          this.$toasted.show('Card expiration required.', {
            type: 'error',
            theme: 'primary',
            position: 'top-right',
            duration: 2000
          });
          e.preventDefault();
        }

        if (!this.cvcNumber) {
          this.$toasted.show('CVC required.', {type: 'error', theme: 'primary', position: 'top-right', duration: 2000});
          e.preventDefault();
        }

        if (this.isCvcNumberValid === false || this.isExpired === true || this.isCardHolderNameValid === false || this.isCardNumberValid === false) {
          this.$toasted.show('Invalid Fields', {
            type: 'error',
            theme: 'primary',
            position: 'top-right',
            duration: 2000
          });
          e.preventDefault();
        }

        if (this.isCvcNumberValid && !this.isExpired && this.isCardHolderNameValid && this.isCardNumberValid) {
          return true;
        }


      }
    }
  }
</script>

<style scoped lang="scss">
  /*cardInfoLetter: black;*/
  $backgroundColor: #F6F6F6;
  /*warning: #ff0000;*/
  $success: #28a745;

  #app {
    background-color: $backgroundColor;
  }

  #productView {
    background-color: $backgroundColor;
    border: 0;
  }

  #cardInfo {
    border-radius: 15px 0 0 15px;
  }

  #productDetail {
    color: $success;
  }


</style>
