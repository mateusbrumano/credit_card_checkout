<template>
  <div class="col-md-2">
    <div class="form-group">
      <label for="cardCVC">CVC</label>
      <div class="row" id="cardCVC">
        <div class="col-md-6">
          <input type="text" class="form-control text-center" maxlength="3"
                 v-bind:class="{'is-invalid': isCvcNumberValid === false, 'is-valid': isCvcNumberValid === true}"
                 placeholder="000" v-model="cvcNumber" @keypress="isNumber()" @change="checkCVC()" required>
          <div class="invalid-feedback">
            Invalid CVC
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CardCvcValidator",
      data() {
        return {
          cvcNumber: '',
          isCvcNumberValid: null
        }
      },
      props: {
        isCardCvcNumberToSubmit: {
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
        checkCVC: function () {
          let cvc = this.cvcNumber;
          this.isCvcNumberValid = cvc.length === 3;
          this.$emit('interface', this.isCvcNumberValid)
        }
      },
      beforeMount () {
        this.isCvcNumberValid = this.isCardCvcNumberToSubmit;
      }
    }
</script>

<style scoped lang="scss">

</style>
