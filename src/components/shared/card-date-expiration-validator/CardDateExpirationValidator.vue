<template>
  <div class="col-md-6">
    <label for="cardExpiresDate">Expires Date</label>
    <div class="row" id="cardExpiresDate">
      <div class="col-md-6">
        <select v-model="selectedMonth" class="custom-select"
                v-bind:class="{'is-invalid': isExpired === true, 'is-valid': isExpired === false}"
                @change="checkExpirationDate()" title="selectedMonth" required>
          <option v-for="month in months" v-bind:value="month.value">
            {{ month.text }}
          </option>
        </select>
        <div class="invalid-feedback">
          Card Expired!
        </div>
      </div>
      <div class="col-md-4">
        <select v-model="selectedYear" class="custom-select"
                v-bind:class="{'is-invalid': isExpired === true, 'is-valid': isExpired === false}"
                @change="checkExpirationDate()" title="selectedYear" required>
          <option v-for="year in years" v-bind:value="year">
            {{ year }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CardDateExpirationValidator",
      data() {
        return {
          selectedMonth: new Date().getMonth(),
          months: [
            {text: 'January', value: 1},
            {text: 'February', value: 2},
            {text: 'March', value: 3},
            {text: 'April', value: 4},
            {text: 'May', value: 5},
            {text: 'June', value: 6},
            {text: 'July', value: 7},
            {text: 'August', value: 8},
            {text: 'September', value: 9},
            {text: 'October', value: 10},
            {text: 'November', value: 11},
            {text: 'December', value: 12}
          ],
          selectedYear: new Date().getFullYear(),
          isExpired: null
        }
      },
      props: {
        isCardDateExpirationToSubmit: {
          type: String,
          default () {
            return ''
          }
        }
      },
      methods: {
        checkExpirationDate: function () {
          let expirationYear = this.selectedYear.toString();
          let expirationMonth = this.selectedMonth.toString();
          let currentYear = new Date().getFullYear().toString();
          let currentMonth = new Date().getMonth().toString();
          if (expirationMonth.length < 2) expirationMonth = '0' + expirationMonth;
          if (currentMonth.length < 2) currentMonth = '0' + currentMonth;
          let sumExpiraiton = expirationYear + expirationMonth;
          let sumCurrent = currentYear + currentMonth;


          this.isExpired = sumExpiraiton < sumCurrent;
          this.$emit('interface', this.isExpired)
        }
      },
      computed: {
        years() {
          const year = new Date().getFullYear();
          return Array.from({length: 20}, (value, index) => year + index)
        }
      },
      beforeMount () {
        this.isExpired = this.isCardDateExpirationToSubmit;
      }
    }
</script>

<style scoped lang="scss">

</style>
