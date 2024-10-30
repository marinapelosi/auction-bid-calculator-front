describe('CarPriceCalculator E2E', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the calculator title', () => {
      cy.contains('h1', 'Car Price Calculator').should('be.visible');
    });
  
    it('should calculate and display the result', () => {
      cy.get('#price').type('15000');
      cy.get('#type').select('luxury');

      cy.intercept('POST', '/api/calculate-car-price', {
        body: {
          priceAndFees: {
            basicFee: 100,
            sellerSpecialFee: 50,
            associationFee: 30,
            storageFee: 20,
            total: 200,
          },
        },
      }).as('calculatePrice');
  
      cy.wait('@calculatePrice');
      cy.contains('.total-display', 'Total: $200').should('be.visible');
    });
  
    it('should display an error message on failed API call', () => {
      cy.get('#price').type('15000');
      cy.get('#type').select('common');
  
      cy.intercept('POST', '/api/calculate-car-price', {
        statusCode: 400,
        body: { error: 'Invalid data' },
      }).as('calculatePriceError');
  
      cy.wait('@calculatePriceError');
      cy.contains('.error', 'Error: Invalid data').should('be.visible');
    });
  });
  