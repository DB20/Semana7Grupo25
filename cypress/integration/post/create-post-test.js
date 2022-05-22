describe("Flujo basico para crear un post", () => {
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

  it("Crear Post exitoso titulo y descripcion", () => {
    var titulo = cy.faker.company.bs();
    var descripcion = cy.faker.lorem.lines();
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get("textarea").type(descripcion);
      cy.get(".koenig-editor__editor-wrapper").type(titulo);
      cy.get("article").click();
      cy.wait(500);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get(".epm-modal-container").get(".gh-btn-black").click();
      cy.get(".gh-editor-back-button").click();
      cy.wait(1500);

      cy.get("li.gh-posts-list-item").then((after) => {
        expect(after.length).to.equal(before.length + 1);
      });
    });
  });

  it("Crear Post exitoso solo titulo", () => {
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get(".koenig-editor__editor-wrapper").type(cy.faker.company.bs());
      cy.get("article").click();
      cy.wait(500);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get(".epm-modal-container").get(".gh-btn-black").click();
      cy.get(".gh-editor-back-button").click();
      cy.wait(1500);
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
    });
  });

  it("Crear Post exitoso solo descrpcion", () => {
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get("textarea").type(cy.faker.lorem.lines());
      cy.get("article").click();
      cy.wait(500);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get(".epm-modal-container").get(".gh-btn-black").click();
      cy.get(".gh-editor-back-button").click();
      cy.wait(1500);
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
    });
  });

  it("Crear Draft exitoso titulo y descripcion", () => {
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get("textarea").type(cy.faker.lorem.lines());
      cy.get(".koenig-editor__editor-wrapper").type(cy.faker.company.bs());
      cy.get("article").click();
      cy.wait(500);
      cy.go("back");
      cy.wait(1500);
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
    });
  });

  it("Crear Draft exitoso titulo", () => {
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get(".koenig-editor__editor-wrapper").type(cy.faker.company.bs());
      cy.get("article").click();
      cy.wait(500);
      cy.go("back");
      cy.wait(1500);
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
    });
  });

  it("Crear Draft exitoso descripcion", () => {
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get("textarea").type(cy.faker.lorem.lines());
      cy.get("article").click();
      cy.wait(500);
      cy.go("back");
      cy.wait(1500);
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
    });
  });


  it('Crear post solo numeros', () =>{
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get("textarea").type(cy.faker.random.numeric(42, { allowLeadingZeros: true }));
      cy.get(".koenig-editor__editor-wrapper").type(cy.faker.random.numeric(300, { allowLeadingZeros: true }));
      cy.get("article").click();
      cy.wait(500);
      cy.go("back");
      cy.wait(1500);
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
    });
  })

  it('Crear post solo caracteres speciales', () =>{
    var title = "]!}#-+=-@${*(#;:}=}#,+;@,!(,),*/:_/_($/((/=:&!){,[%,.]:,//;/!,%!(./-?)(:";
    var description = "-[-+}{,/{(].#=[;)+/(/=(*!:_;{**})[%{+++;?+//{-;)#}]:%&[@@+/$![.-/@=&}[-@*;/";
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get(".koenig-editor__editor-wrapper").type(title, {parseSpecialCharSequences: false});
      cy.wait(500);
      cy.get("textarea").type(description, {parseSpecialCharSequences: false});
      cy.get("article").click();
      cy.wait(500);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get(".epm-modal-container").get(".gh-btn-black").click();
      cy.get(".gh-editor-back-button").click();
      cy.wait(1500);
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length + 1)
      );
    });
  })

  it("Crear Post exitoso titulo y descripcion y URL", () => {
    var titulo = cy.faker.company.bs();
    var descripcion = cy.faker.lorem.lines();
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get("textarea").type(descripcion);
      cy.get(".koenig-editor__editor-wrapper").type(titulo);
      cy.get("article").click();
      cy.wait(500);
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click()
      cy.get('.post-setting-slug.ember-text-field.gh-input.ember-view').type(cy.faker.internet.url())
      cy.get(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon").click();

      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get(".epm-modal-container").get(".gh-btn-black").click();
      cy.get(".gh-editor-back-button").click();
      cy.wait(1500);

      cy.get("li.gh-posts-list-item").then((after) => {
        expect(after.length).to.equal(before.length + 1);
      });
    });
  });

  it("Crear Post error titulo largo", () => {
    var titulo = cy.faker.lorem.words(5);
    var descripcion = cy.faker.lorem.words(255);
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get(".gh-nav-new-post").click();
      cy.get(".koenig-editor__editor-wrapper").type(titulo);
      cy.wait(500);
      cy.get("textarea").type(descripcion);
      cy.get("article").click();
      cy.wait(500);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.get(".epm-modal-container").get(".gh-btn-black").click();
      cy.wait(500);
      cy.get(".gh-alert-content").invoke('text').then(text => {
        var frase = text.replace('\n', '').trim()
        expect(frase).contains('Title cannot be longer than 255 characters')
      })
    });
  });

  it("Borrar post exitoso", () => {
    cy.visit(Cypress.env("postPath"));
    cy.get("li.gh-posts-list-item").then((before) => {
      cy.get("li.gh-posts-list-item").first().click();
      cy.wait(500);
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click()
      cy.wait(500);
      cy.get(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button").click();
      cy.wait(500);
      cy.get(".modal-footer .gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
      cy.wait(1500);

      cy.get("li.gh-posts-list-item").then((after) => {
        expect(after.length).to.equal(before.length - 1);
      });
    });
  });
})
