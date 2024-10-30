<template>
    <div class="calculator-container">
      <h1 class="title">Car Price Calculator</h1>
      <form @submit.prevent="calculatePrice" class="form">
        <div class="form-group">
          <label for="price">Price:</label>
          <input
            type="number"
            id="price"
            v-model.number="price"
            placeholder="Enter the car price"
            required
            min="1"
            class="input-field"
            @input="autoSubmit"
          />
        </div>
  
        <div class="form-group">
          <label for="type">Car Type:</label>
          <select id="type" v-model="carType" required class="input-field" @change="autoSubmit">
            <option value="">Select car type</option>
            <option value="common">Common</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
      </form>
  
      <div v-if="result" class="result">
        <h2>Calculation Result</h2>
        <table class="single-row-table">
          <thead>
            <tr>
              <th>Basic Fee</th>
              <th>Seller Special Fee</th>
              <th>Association Fee</th>
              <th>Storage Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${{ result.basicFee }}</td>
              <td>${{ result.sellerSpecialFee }}</td>
              <td>${{ result.associationFee }}</td>
              <td>${{ result.storageFee }}</td>
            </tr>
          </tbody>
        </table>
  
        <div class="total-display">
          Total: ${{ result.total }}
        </div>
      </div>
  
      <div v-if="error" class="error">
        <p>Error: {{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { createApiService } from '@/factories/apiServiceFactory';
  
  export default {
    data() {
      return {
        price: null,
        carType: '',
        result: null,
        error: null,
        apiService: createApiService(),
      };
    },
    watch: {
    price(value) {
        if (value < 1) {
          this.price = ""; 
        }
      },
    },
    methods: {
      autoSubmit() {
        if (this.price >= 1 && this.carType) {
          this.calculatePrice();
        }
      },      
      async calculatePrice() {
        this.error = null;
        this.result = null;
  
        try {
          const response = await this.apiService.calculateCarPrice({
            price: this.price,
            type: this.carType,
          });
          this.result = response.data.priceAndFees;
        } catch (error) {
          this.error = error.response?.data.error || 'An error occurred. Please try again.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .calculator-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  .form {
    width: 100%;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .input-field {
    padding: 15px;
    font-size: 1.5em;
    width: 100%;
    box-sizing: border-box;
  }
  
  .single-row-table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    font-size: 1.2em;
    text-align: center;
  }
  
  .single-row-table th, .single-row-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  .total-display {
    font-size: 2.5em;
    font-weight: bold;
    color: #42b983;
    margin-top: 20px;
    text-align: center;
  }
  
  .error {
    color: red;
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.2em;
  }
  </style>
  