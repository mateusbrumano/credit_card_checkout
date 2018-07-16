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
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000" name="cardNumber1" id="cardNumber1" @change="checkCard()" v-model="cardNumber1">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000" name="cardNumber2" id="cardNumber2" @change="checkCard()" v-model="cardNumber2">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000" name="cardNumber3" id="cardNumber3" @change="checkCard()" v-model="cardNumber3">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000" name="cardNumber4" id="cardNumber4" @change="checkCard()" v-model="cardNumber4">
                </div>
                <div class="col-md-1">
                  <img v-bind:src="cardSimbol.url" v-bind:alt="cardSimbol.title">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="cardHolder">Card Holder</label>
              <div class="row" id="cardHolder">
                <div class="col-md-8">
                  <input type="text" class="form-control" aria-describedby="cardHolder" placeholder="Send your name">
                </div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-6">
                <label for="cardExpiresDate">Expires Date</label>
                <div class="row" id="cardExpiresDate">
                  <div class="col-md-6">
                    <select class="custom-select">
                      <option selected>Select a month</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
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
      }
    }
  },
  computed: {

  },
  methods: {
    checkCard:function() {

      let card = this.cardNumber1 + this.cardNumber2 + this.cardNumber3 + this.cardNumber4;

      let cardAmex = /^(?:3[47])$/;
      let cardVisa = /^(?:4[0-9])$/;
      let cardMaster = /^(?:5[1-5])$/;

      //Find a good logo and remove invalid credit card alert (Add css validation)

      if (card.substring(0,2).match(cardAmex)) {
        this.cardSimbol.url = 'https://fotw.info/images/u/us$amex.gif';
        this.cardSimbol.title = 'America Express';
      } else if (card.substring(0,2).match(cardVisa)) {
        this.cardSimbol.url = 'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-21.png';
        this.cardSimbol.title = 'Visa';
      } else if (card.substring(0,2).match(cardMaster)) {
        this.cardSimbol.url = 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7-1.png';
        this.cardSimbol.title = 'MasterCard';
      } else {
        alert("invalid card")
      }

      this.checkLuhn(card)

      if(!this.checkLuhn(card)) {
        alert('Sorry, that is not a valid credit card number - please try again!');
      }

    },
    checkLuhn:function (card) {
      let sum = 0;
      let numdigits = card.length;
      let parity = numdigits % 2;
      for(let i=0; i < numdigits; i++) {
        var digit = parseInt(card.charAt(i))
        if(i % 2 == parity) digit *= 2;
        if(digit > 9) digit -= 9;
        sum += digit;
      }
      return (sum % 10) == 0;
    }


    // checkCard:function(name) {
    //   // var cardAmex = /^(?:3[47][0-9]{13})$/;
    //   var cardAmex = /^(?:3[47])$/;
    //   // var cardVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    //   var cardVisa = /^(?:4[0-9])$/;
    //   // var cardMaster = /^(?:5[1-5][0-9]{14})$/;
    //   var cardMaster = /^(?:5[1-5])$/;
    //
    //   // alert(name.length);
    //
    //   // if (name.length >= 3) {
    //   //   alert('maior que 3');
    //   if (name.substring(0,2).match(cardAmex)) {
    //     alert("amex");
    //   } else if (name.substring(0,2).match(cardVisa)) {
    //     alert("visa");
    //   } else if (name.substring(0,2).match(cardMaster)) {
    //     alert("master");
    //   } else {
    //     alert("invalid card")
    //   }
    //   // }
    // }
  }
}
</script>

<style scoped lang="scss">
  $cardInfoLetter: black;
  $backgroundColor: #F6F6F6;

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

</style>
