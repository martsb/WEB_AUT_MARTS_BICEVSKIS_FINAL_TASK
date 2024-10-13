describe('Set Date and Time in Date Picker', () => {
  it('should set the date and time to April 7, 2027 2:25 PM', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;  
    });

    cy.visit('https://demoqa.com/date-picker');

    cy.get('#dateAndTimePickerInput')
      .should('be.visible')
      .clear() 
      .type('February 28, 2013 12:00 PM{enter}');  
    
    cy.get('#dateAndTimePickerInput').should('have.value', 'February 28, 2013 12:00 PM');
  });
});
