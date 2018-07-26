import CardDateExpiration from '../src/components/card-inputs/CardDateExpiration.vue'


describe('CardDateExpiration', () => {

  it('teste', () => {
    expect(typeof CardDateExpiration.data).toBe('function');
    const defaultData = CardDateExpiration.data();
    expect(defaultData.selectedMonth).toBe(new Date().getMonth());
    expect(defaultData.months[0].text).toBe('January');
    expect(defaultData.months[0].value).toBe(1);
    expect(defaultData.months[1].text).toBe('February');
    expect(defaultData.months[1].value).toBe(2);
    expect(defaultData.months[2].text).toBe('March');
    expect(defaultData.months[2].value).toBe(3);
    expect(defaultData.months[3].text).toBe('April');
    expect(defaultData.months[3].value).toBe(4);
    expect(defaultData.months[4].text).toBe('May');
    expect(defaultData.months[4].value).toBe(5);
    expect(defaultData.months[5].text).toBe('June');
    expect(defaultData.months[5].value).toBe(6);
    expect(defaultData.months[6].text).toBe('July');
    expect(defaultData.months[6].value).toBe(7);
    expect(defaultData.months[7].text).toBe('August');
    expect(defaultData.months[7].value).toBe(8);
    expect(defaultData.months[8].text).toBe('September');
    expect(defaultData.months[8].value).toBe(9);
    expect(defaultData.months[9].text).toBe('October');
    expect(defaultData.months[9].value).toBe(10);
    expect(defaultData.months[10].text).toBe('November');
    expect(defaultData.months[10].value).toBe(11);
    expect(defaultData.months[11].text).toBe('December');
    expect(defaultData.months[11].value).toBe(12);
    expect(defaultData.selectedYear).toBe(new Date().getFullYear());
    expect(defaultData.isExpired).toBe(null);
  });

});
