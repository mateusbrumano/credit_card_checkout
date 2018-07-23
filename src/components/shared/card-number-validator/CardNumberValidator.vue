<template>
  <div class="form-group">
    <label for="cardNumber">Card Number</label>
    <div class="row" id="cardNumber">
      <div class="col-md-1">
        <input type="text" maxlength="4" class="form-control text-center"
               v-bind:class="{'is-invalid': isCardNumberValid === false, 'is-valid': isCardNumberValid === true}"
               placeholder="0000" name="cardNumber1" id="cardNumber1" v-focus v-model="cardNumber1"
               @change="checkCard()" @keypress="isNumber(cardNumber1)" required>
        <div class="invalid-feedback">
          Invalid Card!
        </div>
      </div>
      <div class="col-md-1">
        <input type="text" maxlength="4" class="form-control text-center"
               v-bind:class="{'is-invalid': isCardNumberValid === false, 'is-valid': isCardNumberValid === true}"
               placeholder="0000" name="cardNumber2" id="cardNumber2" v-model="cardNumber2"
               @change="checkCard()" @keypress="isNumber(cardNumber2)" required>
      </div>
      <div class="col-md-1">
        <input type="text" maxlength="4" class="form-control text-center"
               v-bind:class="{'is-invalid': isCardNumberValid === false, 'is-valid': isCardNumberValid === true}"
               placeholder="0000" name="cardNumber3" id="cardNumber3" v-model="cardNumber3"
               @change="checkCard()" @keypress="isNumber(cardNumber3)" required>
      </div>
      <div class="col-md-1">
        <input type="text" maxlength="5" class="form-control text-center"
               v-bind:class="{'is-invalid': isCardNumberValid === false, 'is-valid': isCardNumberValid === true}"
               placeholder="0000" name="cardNumber4" id="cardNumber4" v-model="cardNumber4"
               @change="checkCard()" @keypress="isNumber(cardNumber4)" required>
      </div>
      <div class="col-md-1">
        <img v-bind:src="cardSimbol.url" v-bind:alt="cardSimbol.title">
      </div>
      <div class="invalid-feedback">
        Sorry, that is not a valid credit card number - please try again!
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CardNumberValidator",
      data() {
        return {
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          cardNumber4: '',
          cardSimbol: {
            url: '',
            title: ''
          },
          isCardNumberValid: null
        }
      },
      props: {
        isCardNumberToSubmit: {
          type: String,
          default () {
            return ''
          }
        }
      },
      methods: {
        isNumber: function (evt) {
          evt = (evt) ? evt : window.event;
          let charCode = (evt.which) ? evt.which : evt.keyCode;
          if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            evt.preventDefault();
          } else {
            return true;
          }
        },
        checkCard: function () {

          let card = this.cardNumber1 + this.cardNumber2 + this.cardNumber3 + this.cardNumber4;

          if ((!this.checkFlag(card) && card.length > 12) || (card.length > 12 && !this.checkLuhn(card))) {
            this.isCardNumberValid = false;
            this.$emit('interface', this.isCardNumberValid)
          } else if (this.checkFlag(card) && card.length > 12 && this.checkLuhn(card)) {
            this.isCardNumberValid = true;
            this.$emit('interface', this.isCardNumberValid)
          }


        },
        checkFlag: function (card) {
          let cardAmex = /^(?:3[47])$/;
          let cardVisa = /^(?:4[0-9])$/;
          let cardMaster = /^(?:5[1-5])$/;

          if (card.substring(0, 2).match(cardAmex)) {
            this.cardSimbol.url = "src/assets/American-Express-logo-3.png";
            this.cardSimbol.title = "America Express";
            return true;
          } else if (card.substring(0, 2).match(cardVisa)) {
            this.cardSimbol.url = "src/assets/visa-logo-21.png";
            this.cardSimbol.title = "Visa";
            return true;
          } else if (card.substring(0, 2).match(cardMaster)) {
            this.cardSimbol.url = "src/assets/mastercard-logo-7-1.png";
            this.cardSimbol.title = "MasterCard";
            return true;
          } else {
            return false;
          }
        },
        checkLuhn: function (card) {
          let nCheck = 0, nDigit = 0, bEven = false;
          card = card.replace(/\D/g, '');

          for (let n = card.length - 1; n >= 0; n--) {
            let cDigit = card.charAt(n);
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
        }
      },
      beforeMount () {
        this.isCardNumberValid = this.isCardNumberToSubmit;
      },
      directives: {
        focus: {
          inserted: function (el) {
            el.focus()
          }
        }
      }
    }
</script>

<style scoped lang="scss">

</style>
