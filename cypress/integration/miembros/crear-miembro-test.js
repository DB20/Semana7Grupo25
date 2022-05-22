describe('Flujo para crear miembro', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("signin"));
    cy.wait(1500);
    cy.get("form").within(() => {
      cy.get("#ember7").type(Cypress.env("user1"));
      cy.get("#ember9").type(Cypress.env("pass1"));
      cy.get("#ember11").click();
    });
    cy.wait(1500);
  });
  
  it("Crear miembro basic ok", () => {
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get("tr").then((before) => {
      expect(before.length > 0).to.equal(true);
    });
  });

  it("Crear miembro solo numeros ok", () => {
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.random.numeric(5, { allowLeadingZeros: true }) + "@gmail.com");
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get("tr").then((before) => {
      expect(before.length > 0).to.equal(true);
    });
  });

  it("Validar correo no solo numeros", () => {
    var correo = cy.faker.random.numeric(5, { allowLeadingZeros: true }) + "@" + cy.faker.random.numeric(5, { allowLeadingZeros: true }) + "." + cy.faker.random.numeric(3, { allowLeadingZeros: true })
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-email").click();
    cy.get("body").type(correo);
    cy.get(".gh-btn-primary").click();
    cy.get('.form-group.max-width.error.ember-view p').invoke('text').then(text => expect(text.trim()).to.equal('Invalid Email.'))
  });


  it("Validar correo no solo simbolos", () => {
    var correo = Cypress.env("simbolos1") + "@gmail.com";
    var name = Cypress.env("simbolos2");
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(name , {parseSpecialCharSequences: false});
    cy.get("#member-email").click();
    cy.get("body").type(correo, {parseSpecialCharSequences: false});
    cy.get(".gh-btn-primary").click();
    cy.get('.form-group.max-width.error.ember-view p').invoke('text').then(text => expect(text.trim()).to.equal('Invalid Email.'))
  });
  

  it('Agregar dos veces el mismo tag', () =>{
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.word.adjective())
    cy.get('body').type('{enter}')
    cy.get("#member-name").click();
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.word.adjective())
    cy.get('body').type('{enter}')
    cy.wait(250);
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get('tr a').first().click()
    cy.wait(1500);
    cy.get('.ember-power-select-multiple-options.sortable-objects.ember-view li').then(size=> expect(size.length).to.equal(2))
  })

  it('Agregar dos veces el mismo tag de simbolos', () =>{
    var tag1 = Cypress.env("simbolos1")
    var tag2 = Cypress.env("simbolos2");
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(tag1,{parseSpecialCharSequences: false})
    cy.get('body').type('{enter}')
    cy.get("#member-name").click();
    cy.get('.ember-basic-dropdown-trigger--in-place').type(tag2, {parseSpecialCharSequences: false})
    cy.get('body').type('{enter}')
    cy.wait(250);
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get('tr a').first().click()
    cy.wait(1500);
    cy.get('.ember-power-select-multiple-options.sortable-objects.ember-view li').then(size=> expect(size.length).to.equal(2))
  })

  it('Agregar dos veces el mismo tag de numeros', () =>{
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.random.numeric(5, { allowLeadingZeros: true }))
    cy.get('body').type('{enter}')
    cy.get("#member-name").click();
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.random.numeric(5, { allowLeadingZeros: true }))
    cy.get('body').type('{enter}')
    cy.wait(250);
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get('tr a').first().click()
    cy.wait(1500);
    cy.get('.ember-power-select-multiple-options.sortable-objects.ember-view li').then(size=> expect(size.length).to.equal(2))
  })

  it('Crear con notas corta', () => {
    var notas = cy.faker.lorem.words(5)
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.word.adjective())
    cy.get('body').type('{enter}')
    cy.get('body').type('{esc}')
    cy.get("textarea").click();
    cy.get('textarea').type(notas)
    cy.get('body').type('{enter}')
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get('tr a').first().click()
    cy.get('textarea').invoke('val').then(text => expect(text).to.equal(notas))
  })
  

  it('Error al crear nota larga', () => {
    var notas = cy.faker.lorem.words(200)
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.word.adjective())
    cy.get('body').type('{enter}')
    cy.get('body').type('{esc}')
    cy.get("textarea").click();
    cy.get('textarea').type(notas)
    cy.get('body').type('{enter}')
    cy.get(".gh-btn-primary").click();
    cy.get(".form-group.mb0.gh-member-note.error.ember-view p").invoke('text').then(text => {
      expect(text.replace('\n', '').trim()).contains('Note is too long.')
    })
  })

  it('Crear con notas con numeros', () => {
    var notas = cy.faker.random.numeric(200, { allowLeadingZeros: true })
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.word.adjective())
    cy.get('body').type('{enter}')
    cy.get('body').type('{esc}')
    cy.get("textarea").click();
    cy.get('textarea').type(notas)
    cy.get('body').type('{enter}')
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get('tr a').first().click()
    cy.get('textarea').invoke('val').then(text => expect(text).to.equal(notas))
  })

  it('Crear con notas con simbolos', () => {
    var notas = Cypress.env("simbolos1");
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.word.adjective())
    cy.get('body').type('{enter}')
    cy.get('body').type('{esc}')
    cy.get("textarea").click();
    cy.get('textarea').type(notas, {parseSpecialCharSequences: false})
    cy.get('body').type('{enter}')
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get('tr a').first().click()
    cy.get('textarea').invoke('val').then(text => expect(text).to.equal(notas))
  })
  
  it("Crear miembro con suscripcion", () => {
    var notas = cy.faker.lorem.words(5)
    cy.visit(Cypress.env("members"));
    cy.get(".gh-btn-primary").click();
    cy.get("#member-name").click();
    cy.get("body").type(cy.faker.internet.userName());
    cy.get("#member-email").click();
    cy.get("body").type(cy.faker.internet.email());
    cy.get('.ember-basic-dropdown-trigger--in-place').type(cy.faker.word.adjective())
    cy.get('body').type('{enter}')
    cy.get('body').type('{esc}')
    cy.get("textarea").click();
    cy.get('textarea').type(notas)
    cy.get('body').type('{enter}')
    cy.get('.switch').click()
    cy.get(".gh-btn-primary").click();
    cy.wait(1500);
    cy.visit(Cypress.env("members"));
    cy.get('tr a').first().click()
    cy.get('textarea').invoke('val').then(text => expect(text).to.equal(notas))
    cy.get('.ember-checkbox.ember-view').invoke('val').then(value => expect(value).to.equal('on'))
  });

  

})