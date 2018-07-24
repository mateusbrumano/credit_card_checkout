import Vue from 'vue'
import CardCvcValidator from '../src/components/shared/card-cvc-validator/CardCvcValidator.vue'


describe('CardCvcValidator', () => {

  it('sets the correct default data', () => {
    expect(typeof CardCvcValidator.data).toBe('function');
    const defaultData = CardCvcValidator.data();
    expect(defaultData.cvcNumber).toBe('');
    expect(defaultData.isCvcNumberValid).toBe(null);
  });

  it('Input valid CVC number (3 number)', () => {
    const Constructor = Vue.extend(CardCvcValidator);
    const vm = new Constructor().$mount();
    vm.checkCVC('123');
    expect(vm.$data.isCvcNumberValid).toBeTruthy();
  });

  it('Input invalid CVC number (Letters)', () => {
    const Constructor = Vue.extend(CardCvcValidator);
    const vm = new Constructor().$mount();
    vm.checkCVC('abc');
    expect(vm.$data.isCvcNumberValid).toBeFalsy();
  });

  it('Input invalid CVC number (MOre than 3 number)', () => {
    const Constructor = Vue.extend(CardCvcValidator);
    const vm = new Constructor().$mount();
    vm.checkCVC('1234');
    expect(vm.$data.isCvcNumberValid).toBeFalsy();
  });

});
