//feature editar página. Total de escenarios:
import {faker} from '@faker-js/faker'

describe('Feature: Editar página', () => {

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
    
    //escenario 71: Editar el título de una página
    it('Editar el título de una página', () => {
        
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página la primera vez para asegurarse de que exista una página para editar
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title
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
        //And I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        //And I erase title
        cy.get('textarea').clear()
        cy.wait(2000)
        //And I enter title
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word(1)).type('{enter}')
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I click button to return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
        //Then I expect to return to pages list
        cy.get('.gh-list').should('exist')
    })

        //escenario 72: Editar el título de una página con más de 255 caracteres
        it('Editar el título de una página con más de 255 caracteres', () => {
        
            //when I go to pages list
            cy.get('.gh-nav-manage>li:nth-child(2)').click()
            cy.wait(2000)
            //And I click New page button 
            //Se crea una página la primera vez para asegurarse de que exista una página para editar
            cy.get('.gh-btn.gh-btn-primary').click()
            cy.wait(2000)
            //And I enter title
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
            //And I click on a created page
            cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
            cy.wait(2000)
            //And I erase title
            cy.get('textarea').clear()
            cy.wait(2000)
            //And I enter title
            cy.get('textarea').scrollIntoView().focus().type(faker.lorem.words(256))
            cy.get('.koenig-editor').click()
            cy.wait(5000)
            //And I click Publish
            cy.get('.gh-publishmenu-trigger').click()
            cy.wait(2000)
            //And I confirm Publish
            cy.get('.gh-publishmenu-button').click()
            cy.wait(2000)
            //And I click button to return to the pages list
            cy.get('.gh-editor-back-button').click()
            cy.wait(2000)
            //Then I expect to return to pages list
            cy.get('.gh-list').should('exist')
        })

    //escenario 73: Editar el contenido de una página
    it('Editar el título de una página', () => {
            
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página la primera vez para asegurarse de que exista una página para editar
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word(1)).type('{enter}')
        cy.wait(2000)
        //And I enter content 
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(1))
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
        //And I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        //And I erase content
        cy.get('.koenig-editor__editor').clear()
        cy.wait(2000)
        //And I enter content
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(1))
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I click button to return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
        //Then I expect to return to pages list
        cy.get('.gh-list').should('exist')
    })

    //escenario 74: Editar el contenido de una página con más de 1000 carateres
    it('Editar el contenido de una página con más de 1000 carateres', () => {
            
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página la primera vez para asegurarse de que exista una página para editar
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word(1)).type('{enter}')
        cy.wait(2000)
        //And I enter content 
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(1))
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
        //And I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        //And I erase content
        cy.get('.koenig-editor__editor').clear()
        cy.wait(2000)
        //And I enter content
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.words(1000))
        cy.wait(2000)
        //And I click Publish
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I click button to return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
        //Then I expect to return to pages list
        cy.get('.gh-list').should('exist')
    })

    //escenario 75: Editar el campo Excerpt
    it('Editar el campo Excerpt', () => {
            
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página la primera vez para asegurarse de que exista una página para editar
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word(1)).type('{enter}')
        cy.wait(2000)
        //And I enter content 
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(1))
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
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
        //And I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        //And I click Page Settings
        cy.get('.settings-menu-toggle').click()
        cy.wait(2000)
        //And I erase content
        cy.get('#custom-excerpt').clear()
        cy.wait(2000)
        //And I edit Excerpt 
        cy.get('#custom-excerpt').scrollIntoView().focus().type(faker.lorem.sentence())
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
        //And I click button to return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
        //Then I expect to return to pages list
        cy.get('.gh-list').should('exist')
    })

    //escenario 76: Editar el el campo Excerpt con más de 300 caracteres
    it('Editar el el campo Excerpt con más de 300 caracteres', () => {
            
        //when I go to pages list
        cy.get('.gh-nav-manage>li:nth-child(2)').click()
        cy.wait(2000)
        //And I click New page button 
        //Se crea una página la primera vez para asegurarse de que exista una página para editar
        cy.get('.gh-btn.gh-btn-primary').click()
        cy.wait(2000)
        //And I enter title
        cy.get('textarea').scrollIntoView().focus().type(faker.random.word(1)).type('{enter}')
        cy.wait(2000)
        //And I enter content 
        cy.get('.koenig-editor').scrollIntoView().type(faker.lorem.paragraphs(1))
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
        cy.get('.gh-publishmenu-trigger').click()
        cy.wait(2000)
        //And I confirm Publish
        cy.get('.gh-publishmenu-button').click()
        cy.wait(2000)
        //And I return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)
        //And I click on a created page
        cy.get('.gh-list>li:nth-child(2)>a:nth-child(1)').click()
        cy.wait(2000)
        //And I click Page Settings
        cy.get('.settings-menu-toggle').click()
        cy.wait(2000)
        //And I erase content
        cy.get('#custom-excerpt').clear()
        cy.wait(2000)
        //And I edit Excerpt 
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
        //And I click button to return to the pages list
        cy.get('.gh-editor-back-button').click()
        cy.wait(2000)

    })


  })