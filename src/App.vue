<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-lg-4">
        <product-view></product-view>
      </div>
      <div class="col-xs-12 col-lg-8">
        <a href="" id="productDetail"><icon name="angle-left"></icon><small>Product Details</small></a>
        <div class="card w-100 h-100" id="cardInfo">
          <form @submit="checkForm" class="card-body needs-validation" action="https://vuejs.org/" method="post">
            <h3 class="card-title">Credit Card</h3>
            <card-number-validator :parentData="isCardNumberToSubmit" @interface="isCardNumberToSubmit = $event"></card-number-validator>
            <card-holder-validator :parentData="isCardHolderToSubmit" @interface="isCardHolderToSubmit = $event"></card-holder-validator>
            <div class="row form-group">
              <card-date-expiration-validator :parentData="isCardDateExpirationToSubmit" @interface="isCardDateExpirationToSubmit = $event"></card-date-expiration-validator>
              <card-cvc-validator :parentData="isCardCvcNumberToSubmit" @interface="isCardCvcNumberToSubmit = $event"></card-cvc-validator>
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

  import ProductView from './components/shared/product-view/ProductView';
  import CardNumberValidator from './components/shared/card-number-validator/CardNumberValidator.vue';
  import CardHolderValidator from './components/shared/card-holder-validator/CardHolderValidator.vue';
  import CardDateExpirationValidator from './components/shared/card-date-expiration-validator/CardDateExpirationValidator.vue';
  import CardCvcValidator from './components/shared/card-cvc-validator/CardCvcValidator.vue';

  export default {
    name: 'app',
    components: {
      ProductView,
      CardNumberValidator,
      CardHolderValidator,
      CardDateExpirationValidator,
      CardCvcValidator
    },
    data() {
      return {
        isCardNumberToSubmit: null,
        isCardHolderToSubmit: null,
        isCardDateExpirationToSubmit: null,
        isCardCvcNumberToSubmit: null,
      }
    },
    methods: {
      checkForm: function (e) {
        if (this.isCardCvcNumberToSubmit === false || this.isCardDateExpirationToSubmit === true || this.isCardHolderToSubmit === false || this.isCardNumberToSubmit === false) {
          this.$toasted.show('Correct the invalid fields', {
            type: 'error',
            theme: 'primary',
            position: 'top-right',
            duration: 2000
          });
          e.preventDefault();
        }

        if (this.isCardCvcNumberToSubmit && !this.isCardDateExpirationToSubmit && this.isCardHolderToSubmit && this.isCardNumberToSubmit) {
          return true;
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  $success: #28a745;

  #cardInfo {
    border-radius: 15px 0 0 15px;
  }

  #productDetail {
    color: $success;
  }


</style>
