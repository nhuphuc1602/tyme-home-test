import "cypress-real-events";


describe('Automation Test Store', () => {
  it('As the EndUser, Given I can open Chrome And I access to this page:https://automationteststore.com/', () => {
    cy.visit('https://automationteststore.com/');

  });
  it('Then I can see the home page of Automation test Store', () => {
    cy.contains('Automation Test Store');
  })
  it('And I can hover my mouse to APPAREL & ACCESSORIES menu', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').realHover();
    }
    if (Cypress.browser.name === 'firefox') {
      cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').trigger('mouseover');
    }
    cy.wait(3)
  })
  it('Then I can see Shoes and T-shirts categories in APPAREL& ACCESSORIES menu And I can click on T-Shirts categories', () => {
    if (Cypress.browser.name === 'chrome') {
      cy.contains('Shoes').should('be.visible');
      cy.contains('T-shirts').should('be.visible').click();
    }
    if (Cypress.browser.name === 'firefox') {
      cy.contains('T-shirts').click({ force: true })
    }
  })
  it('Then I can see T-Shirts page', () => {
    cy.contains('Shop men\'s T-shirts').should('be.visible');
  })
  it('And I can select Sort by PriceLow > High on T-Shirt page', () => {
    cy.get('select[id="sort"]').select('Price Low > High');
  })
  it('And I can verify that all items were sorted by Price Low > High', () => {
    cy.get('div[class="thumbnails grid row list-inline"] div[class="price"]').then(($prices) => {
      const prices = $prices.map((_, el) => parseFloat(el.innerText.replace('$', ''))).get();
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });

  })
  it('Then I add to Card an Item on T-shirts And I can see the item detailed information', () => {
    let itemName;
    cy.get('div[class="col-md-3 col-sm-6 col-xs-12"]:has(a[class="productcart"]) a[class="prdocutname"]')
      .invoke('attr', 'title')
      .then((title) => {
        itemName = title.toString();
        cy.log(itemName)
        cy.get('div[class="thumbnails grid row list-inline"] a[class="productcart"]').first().click();

      }).then(() => {
        cy.contains(itemName);
      });
  })
});
