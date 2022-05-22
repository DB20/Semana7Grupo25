describe('Buscar miembro', () => {

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

    it("Buscar miembro por nombre por el inicio", () => {
        var nameInicio = cy.faker.name.lastName();
        var nameMedio = cy.faker.name.lastName();
        var nameFin = cy.faker.name.lastName();
        var name = nameInicio + "_" + nameMedio + "_" + nameFin
        cy.visit(Cypress.env("members"));
        cy.get(".gh-btn-primary").click();
        cy.get("#member-name").click();
        cy.get("body").type(name);
        cy.get("#member-email").click();
        cy.get("body").type(cy.faker.internet.email());
        cy.get(".gh-btn-primary").click();
        cy.wait(1500);
        cy.visit(Cypress.env("members"));
        cy.get('.gh-input.gh-members-list-searchfield').type(nameInicio)
        cy.get('tr a h3').first().invoke('text').then(text => {
          expect(text).to.equal(name)
        });
      })
    
      it("Buscar miembro por nombre por el medio", () => {
        var nameInicio = cy.faker.name.lastName();
        var nameMedio = cy.faker.name.lastName();
        var nameFin = cy.faker.name.lastName();
        var name = nameInicio + "_" + nameMedio + "_" + nameFin
        cy.visit(Cypress.env("members"));
        cy.get(".gh-btn-primary").click();
        cy.get("#member-name").click();
        cy.get("body").type(name);
        cy.get("#member-email").click();
        cy.get("body").type(cy.faker.internet.email());
        cy.get(".gh-btn-primary").click();
        cy.wait(1500);
        cy.visit(Cypress.env("members"));
        cy.get('.gh-input.gh-members-list-searchfield').type(nameMedio)
        cy.get('tr a h3').first().invoke('text').then(text => {
          expect(text).to.equal(name)
        });
      })
    
      it("Buscar miembro por nombre por el final", () => {
        var nameInicio = cy.faker.name.lastName();
        var nameMedio = cy.faker.name.lastName();
        var nameFin = cy.faker.name.lastName();
        var name = nameInicio + "_" + nameMedio + "_" + nameFin
        cy.visit(Cypress.env("members"));
        cy.get(".gh-btn-primary").click();
        cy.get("#member-name").click();
        cy.get("body").type(name);
        cy.get("#member-email").click();
        cy.get("body").type(cy.faker.internet.email());
        cy.get(".gh-btn-primary").click();
        cy.wait(1500);
        cy.visit(Cypress.env("members"));
        cy.get('.gh-input.gh-members-list-searchfield').type(nameFin)
        cy.get('tr a h3').first().invoke('text').then(text => {
          expect(text).to.equal(name)
        });
      })
    
      it("Buscar miembro por correo", () => {
        var correo = cy.faker.internet.email()
        cy.visit(Cypress.env("members"));
        cy.get(".gh-btn-primary").click();
        cy.get("#member-name").click();
        cy.get("body").type(cy.faker.internet.userName());
        cy.get("#member-email").click();
        cy.get("body").type(correo);
        cy.get(".gh-btn-primary").click();
        cy.wait(1500);
        cy.visit(Cypress.env("members"));
        cy.get('.gh-input.gh-members-list-searchfield').type(correo)
        cy.get('tr a p').first().invoke('text').then(text => {
          expect(text).to.equal(correo)
        });
      })
    
      it("Borrar miembro", () => {
        cy.visit(Cypress.env("members"));
        cy.get('tr a h3').first().invoke('text').then(text1 => {
          cy.get('tr a').first().click()
          cy.get('.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click()
          cy.get('.mr2 .red').click()
          cy.wait(500)
          cy.get('.gh-btn-red').click()
          cy.get('tr a h3').first().invoke('text').then(text2 => {
            expect(text1 != text2).to.equal(true)
          });
        });
      })
    
      it("Buscar miembro por nombre numeros", () => {
        var nombre = cy.faker.random.numeric(10, { allowLeadingZeros: true })
        cy.visit(Cypress.env("members"));
        cy.get(".gh-btn-primary").click();
        cy.get("#member-name").click();
        cy.get("body").type(nombre);
        cy.get("#member-email").click();
        cy.get("body").type(cy.faker.internet.email());
        cy.get(".gh-btn-primary").click();
        cy.wait(1500);
        cy.visit(Cypress.env("members"));
        cy.get('.gh-input.gh-members-list-searchfield').type(nombre)
        cy.get('tr a h3').first().invoke('text').then(text => {
          expect(text).to.equal(nombre)
        });
      })
    
      it("Buscar miembro por nombre simbolos", () => {
        var nombre = Cypress.env('simbolos1')
        cy.visit(Cypress.env("members"));
        cy.get(".gh-btn-primary").click();
        cy.get("#member-name").click();
        cy.get("body").type(nombre, {parseSpecialCharSequences: false});
        cy.get("#member-email").click();
        cy.get("body").type(cy.faker.internet.email());
        cy.get(".gh-btn-primary").click();
        cy.wait(1500);
        cy.visit(Cypress.env("members"));
        cy.get('.gh-input.gh-members-list-searchfield').type(nombre, {parseSpecialCharSequences: false})
        cy.get('tr a h3').first().invoke('text').then(text => {
          expect(text).to.equal(nombre)
        });
      })
})