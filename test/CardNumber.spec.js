import Vue from 'vue'
import CardNumberValidator from '../src/components/shared/card-number-validator/CardNumberValidator.vue'


describe('CardNumberValidator', () => {

  it('Sets the correct default data', () => {
    expect(typeof CardNumberValidator.data).toBe('function');
    const defaultData = CardNumberValidator.data();
    expect(defaultData.cardNumber1).toBe('');
    expect(defaultData.cardNumber2).toBe('');
    expect(defaultData.cardNumber3).toBe('');
    expect(defaultData.cardNumber4).toBe('');
    expect(defaultData.cardSimbol.url).toBe('');
    expect(defaultData.cardSimbol.title).toBe('');
    expect(defaultData.isCardNumberValid).toBe(null);
  });

  it('Card have a valid flag', () => {
    const Constructor = Vue.extend(CardNumberValidator);
    const vm = new Constructor().$mount();
    const card = '4328743643276209';
    expect(vm.checkFlag(card)).toBeTruthy();
  });

  it('Card dont have a valid flag (not mastercard, visa or Amex)', () => {
    const Constructor = Vue.extend(CardNumberValidator);
    const vm = new Constructor().$mount();
    //Card number is valid but it is not (Mastercard, visa or Amex)
    const card = '6011563940341507';
    expect(vm.checkFlag(card)).toBeFalsy();
  });

  it('Valid credit card number(Check luhn algorithm)', () => {
    const Constructor = Vue.extend(CardNumberValidator);
    const vm = new Constructor().$mount();
    const card = '6011563940341507';
    expect(vm.checkLuhn(card)).toBeTruthy();
  });

  it('Invalid credit card number(Check luhn algorithm)', () => {
    const Constructor = Vue.extend(CardNumberValidator);
    const vm = new Constructor().$mount();
    const card = '11115639403401010';
    expect(vm.checkLuhn(card)).toBeFalsy();
  });

});
