import {faker} from '@faker-js/faker'
describe('Feature: editar tag', () => {

  beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.wait(3000)

      cy.get('form').within(() => {
        cy.get("#ember7").type(Cypress.env("user1"));
        cy.get("#ember9").type(Cypress.env("pass1"));
          cy.get('#ember11').click()
      })
      cy.wait(3000)
      cy.get('#ember29').click()
      cy.wait(2000)
      cy.get('.gh-btn-primary').click()
      cy.wait(2000)
      var nombre = faker.random.words(5)
      //Nombre
      cy.get('#tag-name').type(nombre)
      cy.wait(2000)
      //Color
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').type(faker.datatype.number({ min: 900000, max: 999999}))
      cy.wait(2000)
      //Descripción
      cy.get('#tag-description').type(faker.datatype.string(200), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
      //Meta
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button').click()
      //Llenamos el titulo
      cy.get('#meta-title').type(faker.datatype.string(120), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
      //Url
      cy.get('#canonical-url').type(faker.internet.url())
      cy.wait(2000)
      //Twitter
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button').click()
      //Llenamos el titulo
      cy.get('#twitter-title').type(faker.datatype.string(300), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
      //guardar
      cy.get('.gh-btn-icon').click()
      cy.wait(2000)
      // //lista
      // cy.get('.gh-nav-manage>li:nth-child(3)').click()
      // cy.wait(2000)
      // //click en el tag creado
      // cy.xpath('//section/ol/li//h3[text()="'+nombre+' "]//ancestor::li').click()
  })
//escenario 113: Editar Tag – Nombre agregando Valores Alfanuméricos -Error encontrado
  it('Editar Tag Nombre agregando Valores Alfanuméricos', () => {
    var titulo = Cypress.env("alfanumerico");
    //Se da nombre aletorio 
        cy.get('#tag-name').type(titulo)
        cy.wait(2000)

        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })

  //escenario 114: Editar Tag – Cambiar descripción -error encontrado
  it('Editar Tag Cambiar descripción', () => {
    var Descri = Cypress.env("descripcion");
  
    //Descripción
    cy.get('#tag-description').clear()
  cy.wait(2000)
  
    cy.get('#tag-description').type(Descri, {
      parseSpecialCharSequences: false,
    })
  cy.wait(2000)
  
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 115: Editar Tag – Cambiar Color RGB con valores correspondientes -Error encontrado
  it('Editar Tag Cambiar Color RGB con valores correspondientes', () => {
    var color = Cypress.env("RGB");

    //Color
    cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').clear()
    cy.wait(2000)

    cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').type(color)
    cy.wait(2000)

        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
  //escenario 116: Editar Tag – Cambiar Color RGB con simbolos -Error encontrado
  it('Editar Tag Cambiar Color RGB con simbolos', () => {
    var colorsim = Cypress.env("RGBsimbolos");

    cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').clear()
    cy.wait(2000)

    cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').type(colorsim)
    cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //cy.get('.gh-btn-primary').should('exist')
     cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('be.visible')
    
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
  
  //escenario 117: Editar Tag – URL de Canonical URL sin formato URL -error encontrado
  it('Editar Tag URL de Canonical URL sin formato URL', () => {
    var alfanum = Cypress.env("alfanumerico");

    cy.get('#canonical-url').clear()
    cy.wait(2000)
    cy.get('#canonical-url').type(alfanum)
    cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[3]/p').should('be.visible')
    
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
    //escenario 118: Editar Tag – Titulo Meta agregando valores numéricos -error
    it('Editar Tag Titulo Meta agregando valores numéricos', () => {
        var alfanum = Cypress.env("alfanumerico");
  
        cy.get('#meta-title').type(alfanum)
        cy.wait(2000)
            //Guardo
            cy.get('.gh-btn-icon').click()
            cy.wait(1000)
          cy.get('.gh-btn-primary').should('exist')
          //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[3]/p').should('be.visible')
        
          //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
      })
  
      //escenario 119: Editar Tag –  título de Twitter con más de 300 caracteres -error
      it('Editar Tag  título de Twitter con más de 300 caracteres', () => {
        var alfanum = Cypress.env("alfanumerico");
    
  
        cy.get('#twitter-title').type(alfanum)
        cy.wait(2000)
            //Guardo
            cy.get('.gh-btn-icon').click()
            cy.wait(1000)
          //cy.get('.gh-btn-primary').should('exist')
          //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[3]/p').should('be.visible')
          cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
        
          //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
      })

    //escenario 120: Editar Tag –  Cambiar Slug a uno con espacios
        it('Editar Tag  Cambiar Slug a uno con espacios', () => {
        var espacios = Cypress.env("descripcion");
    
    
        cy.get('#tag-slug').type(espacios)
        cy.wait(2000)
        cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').click()
        cy.wait(2000)
        
        cy.get('#tag-slug').should('not.contain', ' ')

        })
})