import {faker} from '@faker-js/faker'
describe('Feature: editar tag', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3001/ghost/#/signin')
      cy.wait(3000)

      cy.get('form').within(() => {
          cy.get('#ember7').type('admin@ghost.com')
          cy.get('#ember9').type('Krishtian98')
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
      
      
      //Llenamos la el titulo
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
        //escenario 64: Editar Tag –  Cambiar Slug a uno con espacios
        it('Editar Tag  Cambiar Slug a uno con espacios', () => {
          var espacios = Cypress.env("descripcion");
      
    
          cy.get('#tag-slug').type(espacios)
          cy.wait(2000)
          cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').click()
          cy.wait(2000)
          
          cy.get('#tag-slug').should('not.contain', ' ')

        })

})