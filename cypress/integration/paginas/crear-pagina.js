//feature Crear página. Total de escenarios: 9
import {faker} from '@faker-js/faker'

describe('Feature: Crear página', () => {

    //given I navigate to Ghost page
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#signin')
        cy.wait(3000)

        //And I sign in
        cy.get('form').within(() => {
            cy.get('#ember7').type(Cypress.env("user1"));
            cy.get('#ember9').type(Cypress.env("pass1"));
            cy.get('#ember11').click()
        })
        cy.wait(3000)

    })

    //escenario 61: Crear una página con titulo numérico
    it('Crear una página con titulo numérico', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title with numbers
        cy.get('textarea').scrollIntoView().focus().type(faker.datatype.number()).type('{enter}')
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    //escenario 62: Crear una página con titulo de una sola palabra
    it('Crear una página con titulo de una sola palabra', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title with a single character
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word(1)).type('{enter}')
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    //escenario 63: Crear una página con titulo de una sola letra
    it('Crear una página con titulo de una sola palabra', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title with a single word
        cy.get('textarea').scrollIntoView().focus().type(faker.datatype.string(1)).type('{enter}')
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
    })

    //escenario 64: Crear una página con titulo que contenga caracteres especiales
    it('Crear una página con titulo que contenga caracteres especiales', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title with special characters
        cy.get('textarea').type(Cypress.env("simbolos1")).type('{enter}')
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    //escenario 65: Crear una página con titulo que contenga más de 255 caracteres 
    it('Crear una página con titulo que contenga más de 255 caracteres', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title with more than 255 characters
        cy.get('textarea').scrollIntoView().focus().type(faker.lorem.words(256)).type('{enter}')
	    cy.get('.koenig-editor').click()
        cy.wait(5000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    //escenario 66: Crear una página con contenido que contenga 1 sola palabra
    it('CCrear una página con contenido que contenga 1 sola palabra', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title 
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word()).type('{enter}')
        cy.wait(2000)
        //And I enter content with a single character
        cy.get('.koenig-editor').scrollIntoView().type(faker.random.word(1))
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    //escenario 67: Crear una página con contenido que contenga más de 1000 caracteres
    it('CCrear una página con contenido que contenga más de 1000 caracteres', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title 
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word()).type('{enter}')
        cy.wait(2000)
        //And I enter content with more than 1000 characters
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.words(1000))
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    //escenario 68: Crear una página con contenido que contenga 5 parágrafos
    it('Crear una página con contenido que contenga 5 parágrafos', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title 
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word()).type('{enter}')
        cy.wait(2000)
        //And I enter content with 5 paragraphs
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(5, '<br/>\n'))
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    //escenario 69: Crear una página diligenciando el campo Excerpt con 1 frase 
    it('Crear una página diligenciando el campo Excerpt con 1 frase ', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title 
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word()).type('{enter}')
        cy.wait(2000)
        //And I enter content
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(2, '<br/>\n'))
        cy.wait(2000)
        //And I click Page Settings
        cy.get('.settings-menu-toggle').click()
        cy.wait(2000)
        //And I enter Excerpt 
        cy.get('#custom-excerpt').scrollIntoView().focus().type(faker.lorem.sentence())
        cy.wait(2000)
        //And I click Page Settings
        cy.get('.settings-menu-toggle').click()
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })
    
    //escenario 70: Crear una página diligenciando el campo Excerpt con más de 300 caracteres
    it('Crear una página diligenciando el campo Excerpt con más de 300 caracteres', () => {
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title 
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word()).type('{enter}')
        cy.wait(2000)
        //And I enter content
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(2, '<br/>\n'))
        cy.wait(2000)
        //And I click Page Settings
        cy.get('.settings-menu-toggle').click()
        cy.wait(2000)
        //And I enter Excerpt with more than 300 characters
        cy.get('#custom-excerpt').scrollIntoView().focus().type(faker.lorem.words(301))
        cy.wait(2000)
        //And I click Page Settings
        cy.get('.settings-menu-toggle').click()
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
   })

    
  })