import Vue from 'vue'
import CardHolderValidator from '../src/components/shared/card-holder-validator/CardHolderValidator.vue'


describe('CardHolderValidator', () => {

  it('Sets the correct default data', () => {
    expect(typeof CardHolderValidator.data).toBe('function');
    const defaultData = CardHolderValidator.data();
    expect(defaultData.cardHolderName).toBe('');
    expect(defaultData.isCardHolderNameValid).toBe(null);
  });

  it('Valid holder name', () => {
    const Constructor = Vue.extend(CardHolderValidator);
    const vm = new Constructor().$mount();
    vm.checkHolder('Mateus');
    expect(vm.$data.isCardHolderNameValid).toBeTruthy();
  });

  it('Invalid holder name', () => {
    const Constructor = Vue.extend(CardHolderValidator);
    const vm = new Constructor().$mount();
    vm.checkHolder('Ma');
    expect(vm.$data.isCardHolderNameValid).toBeFalsy();
  });


});
