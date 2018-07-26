<template>
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
</template>

<script>
    export default {
      name: "ProductView",
      data() {
        return {
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
      methods: {
        totalProducts(){
          let total = 0;

          for (var i = 0; i < Object.keys(this.products).length; i++) {
            total += this.products[i].productPrice;
          }
          return total;
        }
      }
    }
</script>

<style scoped lang="scss">
  $backgroundColor: #F6F6F6;

  #productView {
    background-color: $backgroundColor;
    border: 0;
  }


</style>
