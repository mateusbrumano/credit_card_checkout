import Vue from 'vue'
import CardHolder from '../src/components/card-inputs/CardHolder.vue'


describe('CardHolder', () => {

  it('Sets the correct default data', () => {
    expect(typeof CardHolder.data).toBe('function');
    const defaultData = CardHolder.data();
    expect(defaultData.cardHolderName).toBe('');
    expect(defaultData.isCardHolderNameValid).toBe(null);
  });

  it('Valid holder name', () => {
    const Constructor = Vue.extend(CardHolder);
    const vm = new Constructor().$mount();
    vm.checkHolder('Mateus');
    expect(vm.$data.isCardHolderNameValid).toBeTruthy();
  });

  it('Invalid holder name', () => {
    const Constructor = Vue.extend(CardHolder);
    const vm = new Constructor().$mount();
    vm.checkHolder('Ma');
    expect(vm.$data.isCardHolderNameValid).toBeFalsy();
  });


});
