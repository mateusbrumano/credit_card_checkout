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
          <form  class="card-body">
            <h3 class="card-title">Credit Card</h3>
            <div class="form-group">
              <label for="cardNumber">Card Number</label>
              <div class="row" id="cardNumber">
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000">
                </div>
                <div class="col-md-1">
                  <input type="text" maxlength="4" class="form-control text-center" placeholder="0000">
                </div>
                <div class="col-md-1">
                  <span>visa/master img</span>
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
                <button type="button" class="btn btn-success">Checkout</button>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {

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
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  color: $cardInfoLetter;
  /*width: 80rem;*/
  /*height: 30rem;*/
  /*margin-top: 60px;*/
}

/*#cardNumber {*/
  /*input {*/
    /*text-align: center;*/
  /*}*/
/*}*/

/*#cardCVC {*/
  /*input {*/
    /*text-align: center;*/
  /*}*/
/*}*/

/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
