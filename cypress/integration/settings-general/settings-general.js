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

    //escenario 77: Editar el Title en el campo Title & description
    it('Editar el Title en el campo Title & description', () => {
        //when I go to Settings
        cy.get('.gh-nav-bottom-tabicon').click()
        cy.wait(2000)
        //And I click General
        cy.get('.yellow').first().click()
        cy.wait(2000)
        //And I click Title & description
        cy.get('.gh-btn').contains("Expand").first().click()
        cy.wait(2000)
        //And I enter Title 
        cy.get('input[type=text]').first({ force: true }).type(faker.random.word(1))
        //And I click Save
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
})

    //escenario 78: Editar el Title en el campo Title & description con más de 200 caracteres
    it('Editar el Title en el campo Title & description con más de 200 caracteres', () => {
        //when I go to Settings
        cy.get('.gh-nav-bottom-tabicon').click()
        cy.wait(2000)
        //And I click General
        cy.get('.yellow').first().click()
        cy.wait(2000)
        //And I click Title & description
        cy.get('.gh-btn').contains("Expand").first().click()
        cy.wait(2000)
        //And I enter Title 
        cy.get('input[type=text]').first({ force: true }).type(faker.lorem.words(201))
        //And I click Save
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
    })

    //escenario 79: Editar el Title en el campo Title & description con números
    it('Escenario 79: Editar el Title en el campo Title & description con números', () => {
        //when I go to Settings
        cy.get('.gh-nav-bottom-tabicon').click()
        cy.wait(2000)
        //And I click General
        cy.get('.yellow').first().click()
        cy.wait(2000)
        //And I click Title & description
        cy.get('.gh-btn').contains("Expand").first().click()
        cy.wait(2000)
        //And I enter Title 
        cy.get('input[type=text]').first({ force: true }).clear({ force: true }).type(faker.datatype.number(), { force: true })
        //And I click Save
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
    })


    //escenario 80: Editar la descripción en el campo Title & description
    it('Editar la descripción en el campo Title & description', () => {
        //when I go to Settings
        cy.get('.gh-nav-bottom-tabicon').click()
        cy.wait(2000)
        //And I click General
        cy.get('.yellow').first().click()
        cy.wait(2000)
        //And I click Title & description
        cy.get('.gh-btn').contains("Expand").first().click()
        cy.wait(2000)
        //And I enter description 
        cy.get('input[type=text]').first({ force: true }).tab({force: true}).clear({force: true}).type(faker.random.word(1), { force: true })
        //And I click Save
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
})

//escenario 81: Editar la descripción en el campo Title & description con números
it('Editar la descripción en el campo Title & description con números', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').contains("Expand").first().click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).tab({force: true}).clear({force: true}).type(faker.datatype.number(), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 82: Editar la descripción en el campo Title & description con más de 200 caracteres
it('Editar la descripción en el campo Title & description con más de 200 caracteres', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').contains("Expand").first().click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).tab({force: true}).clear({force: true}).type(faker.lorem.words(201), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 83: Editar el idioma en el campo Publication Language
it('Editar la descripción en el campo Title & description con más de 200 caracteres', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(3).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).clear({force: true}).type(faker.random.word(2), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 84: Editar el idioma en el campo Publication Language con números
it('Editar el idioma en el campo Publication Language con números', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(3).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).clear({force: true}).type(faker.datatype.number(), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 85: Editar el idioma en el campo Publication Language con más de 50 caracteres
it('Editar el idioma en el campo Publication Language con más de 50 caracteres', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(3).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).clear({force: true}).type(faker.lorem.words(50), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 86: Editar el Meta title en el campo Meta data
it('Editar el Meta title en el campo Meta data', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(4).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).type(faker.random.word(2), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 87: Editar el Meta title en el campo Meta data con números
it('Editar el Meta title en el campo Meta data con números', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(4).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).clear({force: true}).type(faker.datatype.number(), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 88: Editar el Meta title en el campo Meta data con más de 70 caracteres
it('Editar el Meta title en el campo Meta data con más de 70 caracteres', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(4).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).clear({force: true}).type(faker.lorem.words(40), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 89: Editar la Meta description en el campo Meta data
it('Editar la Meta description en el campo Meta data', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(4).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).tab({force: true}).type(faker.random.word(2), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})

//escenario 90: Editar la Meta description en el campo Meta data con numeros
it('Editar la Meta description en el campo Meta data con numeros', () => {
    //when I go to Settings
    cy.get('.gh-nav-bottom-tabicon').click()
    cy.wait(2000)
    //And I click General
    cy.get('.yellow').first().click()
    cy.wait(2000)
    //And I click Title & description
    cy.get('.gh-btn').eq(4).click()
    cy.wait(2000)
    //And I enter description 
    cy.get('input[type=text]').first({ force: true }).tab({force: true}).clear({force: true}).type(faker.datatype.number(), { force: true })
    //And I click Save
    cy.get('.gh-btn-primary').click()
    cy.wait(2000)
})



  })