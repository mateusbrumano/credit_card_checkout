<template>
  <div id="app">
    <div class="row">
      <div class="col-md-4">
        <span></span>
      </div>
      <div class="col-md-8">
        <span>Product Details</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card w-50 h-50 text-center mx-auto" id="productView">
          <!--<img class="card-img-top" src="" alt="Card image cap">-->
          <span>img</span>
          <div class="card-body">
            <h5 class="card-title">Nome Produto</h5>
            <small>Descrição</small>
            <hr>
            <div class="row">
              <div class="col-md-6">
                <span>Detalhe</span>
              </div>
              <div class="col-md-6">
                <span>Detalhe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card w-100 h-100" id="cardInfo">
          <form @submit="" class="card-body">
            <h3 class="card-title">Credit Card</h3>
            <div class="form-group">
              <label for="cardNumber">Card Number</label>
              <div class="row" id="cardNumber">
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000" name="cardNumber1" id="cardNumber1" v-focus v-model="cardNumber1" @change="checkCard()" @keypress="isNumber(cardNumber1)">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000" name="cardNumber2" id="cardNumber2" v-model="cardNumber2" @change="checkCard()" @keypress="isNumber(cardNumber2)">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000" name="cardNumber3" id="cardNumber3" v-model="cardNumber3" @change="checkCard()" @keypress="isNumber(cardNumber3)">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="5" class="form-control text-center" placeholder="0000" name="cardNumber4" id="cardNumber4" v-model="cardNumber4" @change="checkCard()" @keypress="isNumber(cardNumber4)">
                </div>
                <div class="col-md-1">
                  <img v-bind:src="cardSimbol.url" v-bind:alt="cardSimbol.title">
                </div>
              </div>
              <div id="invalidCard" class="row" v-if="!invalidCardMessage">
                <div class="col-md-12">
                  <small>Sorry, that is not a valid credit card number - please try again!</small>
                </div>
              </div>
              <div id="validCard" class="row" v-if="validCardMessage">
                <div class="col-md-12">
                  <small>Valid Credit Card!</small>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="cardHolder">Card Holder</label>
              <div class="row">
                <div class="col-md-7">
                  <input type="text" class="form-control" minlength="2" aria-describedby="cardHolder" placeholder="Send your name" name="cardHolder" id="cardHolder" v-model="cardHolderName" @change="checkHolder(cardHolderName)">
                </div>
              </div>
              <div id="validName" class="row" v-if="isCardHolderNameValid">
                <div class="col-md-12">
                  <small>Valid Name!</small>
                </div>
              </div>
              <div id="invalidName" class="row" v-if="isCardHolderNameInvalid">
                <div class="col-md-12">
                  <small>Invalid Name!</small>
                </div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-6">
                <label for="cardExpiresDate">Expires Date</label>
                <div class="row" id="cardExpiresDate">
                  <div class="col-md-6">
                    <!--<select v-model="selectedMonth" class="custom-select">-->
                      <!--<option v-for="month in months" v-bind:value="month.value">-->
                        <!--{{ option.text }}-->
                      <!--</option>-->
                    <!--</select>-->
                    <select v-model="selectedMonth" class="custom-select">
                      <option v-for="month in months" v-bind:value="month.value">
                        {{ month.text }}
                      </option>
                    </select>
                    <!--<select class="custom-select">-->
                      <!--<option selected>Select a month</option>-->
                      <!--<option value="1">One</option>-->
                      <!--<option value="2">Two</option>-->
                      <!--<option value="3">Three</option>-->
                    <!--</select>-->
                  </div>
                  <div class="col-md-4">
                    <select class="custom-select">
                      <option selected>Select a year</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label for="cardCVC">CVC</label>
                  <div class="row" id="cardCVC">
                    <div class="col-md-6">
                      <input type="text" class="form-control text-center" maxlength="3"  placeholder="000">
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
                <button type="submit" value="Submit" class="btn btn-success">Checkout</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cardNumber1: '',
      cardNumber2: '',
      cardNumber3: '',
      cardNumber4: '',
      cardSimbol: {
        url: '',
        title: ''
      },
      validCardMessage: false,
      invalidCardMessage: true,
      cardHolderName: '',
      isCardHolderNameValid: false,
      isCardHolderNameInvalid: false,
      selectedMonth: new Date().getMonth(),
      months: [
        { text: 'January', value: '1' },
        { text: 'February', value: '2' },
        { text: 'March', value: '3' },
        { text: 'April', value: '4' },
        { text: 'May', value: '5' },
        { text: 'June', value: '6' },
        { text: 'July', value: '7' },
        { text: 'August', value: '8' },
        { text: 'September', value: '9' },
        { text: 'October', value: '10' },
        { text: 'November', value: '11' },
        { text: 'December', value: '12' }
      ]
    }
  },
  computed: {

  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    checkCard:function() {

      let card = this.cardNumber1 + this.cardNumber2 + this.cardNumber3 + this.cardNumber4;

      if((!this.checkFlag(card) && card.length > 12) || (card.length > 12 && !this.checkLuhn(card))) {

        this.validCardMessage = false;
        this.invalidCardMessage = false;
      } else if (this.checkFlag(card) && card.length > 12 && this.checkLuhn(card)){
        this.validCardMessage = true;
        this.invalidCardMessage = true;
      }


    },
    checkFlag:function (card) {
      let cardAmex = /^(?:3[47])$/;
      let cardVisa = /^(?:4[0-9])$/;
      let cardMaster = /^(?:5[1-5])$/;

      if (card.substring(0,2).match(cardAmex)) {
        this.cardSimbol.url = 'src/assets/American-Express-logo-3.png';
        this.cardSimbol.title = 'America Express';
        return true;
      } else if (card.substring(0,2).match(cardVisa)) {
        this.cardSimbol.url = 'src/assets/visa-logo-21.png';
        this.cardSimbol.title = 'Visa';
        return true;
      } else if (card.substring(0,2).match(cardMaster)) {
        this.cardSimbol.url = 'src/assets/mastercard-logo-7-1.png';
        this.cardSimbol.title = 'MasterCard';
        return true;
      } else {
        return false;
      }
    },
    checkLuhn:function (card) {
      var nCheck = 0, nDigit = 0, bEven = false;
      card = card.replace(/\D/g, '');

      for (var n = card.length - 1; n >= 0; n--) {
        var cDigit = card.charAt(n);
        nDigit = parseInt(cDigit, 10);

        if (bEven) {
          if ((nDigit *= 2) > 9) {
            nDigit -= 9;
          }
        }

        nCheck += nDigit;
        bEven = !bEven;
      }

      return (nCheck % 10) === 0;
    },
    checkHolder:function (name) {
      if (name.length > 2) {
        this.isCardHolderNameValid = true;
        this.isCardHolderNameInvalid = false;
      } else {
        this.isCardHolderNameValid = false;
        this.isCardHolderNameInvalid = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  $cardInfoLetter: black;
  $backgroundColor: #F6F6F6;
  $warning: #ff0000;
  $success: #28a745;

#app {
  background-color: $backgroundColor;
}

#productView {
  background-color: $backgroundColor;
  border: 0px;
}

#cardInfo {
  color: $cardInfoLetter;
}

#invalidCard {
  color: $warning;
}

#validCard {
  color: $success;
}

#validName {
  color: $success;
}

#invalidName {
  color: $warning;
}

</style>
