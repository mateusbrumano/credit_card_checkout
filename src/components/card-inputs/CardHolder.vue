<template>
  <div class="form-group">
    <label for="cardHolder">Card Holder</label>
    <div class="row">
      <div class="col-md-7">
        <input type="text" class="form-control"
               v-bind:class="{'is-invalid': isCardHolderNameValid === false, 'is-valid': isCardHolderNameValid === true}"
               minlength="2" aria-describedby="cardHolder"
               placeholder="Send your name" name="cardHolder" id="cardHolder" v-model="cardHolderName"
               @change="checkHolder(cardHolderName)" required>
        <div class="invalid-feedback">
          Invalid Name!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CardHolder",
      data() {
        return {
          cardHolderName: '',
          isCardHolderNameValid: null
        }
      },
      props: {
        isCardHolderToSubmit: {
          type: String,
          default () {
            return ''
          }
        }
      },
      methods: {
        checkHolder: function (name) {
          this.isCardHolderNameValid = name.length > 2;
          this.$emit('interface', this.isCardHolderNameValid)
        }
      },
      beforeMount () {
        this.isCardHolderNameValid = this.isCardHolderToSubmit;
      }
    }
</script>

<style scoped lang="scss">

</style>
