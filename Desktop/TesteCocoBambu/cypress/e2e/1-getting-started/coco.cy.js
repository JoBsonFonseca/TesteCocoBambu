describe('Login no Coco Bambu', () => {
    it('Deve realizar login com sucesso e preencher o código de autenticação', () => {
      // Acessa a página de login
      cy.visit('https://app-hom.cocobambu.com/entrar', { timeout: 120000 });
  
      // Verifica se a página de login foi carregada
      cy.url().should('include', '/entrar');
  
      // Preenche os campos de login
      cy.get('#username').type('fonsecajobson@gmail.com'); // E-mail
      cy.get('input[type="password"]').type('joAquim@23'); // Senha
  
      // Submete o formulário de login
      cy.get('.buttons-container > :nth-child(1)').click(); 
      cy.get('.is-primary').click(); // Clique no botão de enviar o código
  
      // Espera o campo de código de autenticação aparecer e preenche
      cy.get('.is-primary').should('be.visible');  // Verifica se a mensagem do código apareceu
      cy.get('input[name="otp"]').type('A'); // Preenche o campo com o código de autenticação
  
      // Verifica se a URL foi redirecionada após o login
      cy.url().should('not.include', '/entrar');
  
      // Selecionar produto
      cy.get('.is-primary').should('be.visible').click(); // Ajuste do clique
  
      // Selecionar sabor de pizza
      cy.get('.subitems-container > div[_ngcontent-ng-c2207958829=""] > .ng-untouched > :nth-child(2) > .subitem-data')
        .should('be.visible')
        .click();
      cy.get(':nth-child(2) > .subitem-data > delivery-item-subitem-input.ng-star-inserted > .ng-star-inserted > .plus-img')
        .click();
  
      // Selecionar segunda metade do sabor
      cy.get('.subitems-container > div[_ngcontent-ng-c2207958829=""] > .ng-untouched > :nth-child(3) > .subitem-data')
        .should('be.visible')
        .click();
      cy.get(':nth-child(3) > .subitem-data > delivery-item-subitem-input.ng-star-inserted > .ng-star-inserted > .plus-img')
        .click();
  
      // Clicar em adicionar ao carrinho
      cy.get('button.ng-star-inserted').should('be.visible').click();
  
      // Selecionar forma de pagamento
      cy.get('.info-purchase.has-bottom-divisor').should('be.visible');
      cy.get('.choose-payment-method-button').click(); // Correção com parênteses
  
      // Selecionar método de pagamento: dinheiro
      cy.get('.list-container > .ng-star-inserted').should('be.visible').click();
    });
  });
  