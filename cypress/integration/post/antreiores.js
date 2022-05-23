//feature crear tag. Escenarios: 3
describe('Feature: Crear Post', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/ghost/#/signin')
        cy.wait(5000)

        cy.get('form').within(() => {
            cy.get('#ember7').type('admin@ghost.com')
            cy.get('#ember9').type('Krishtian98')
            cy.get('#ember11').click()
        })
        cy.wait(3000)

    })
    //escenario 3: Crear tag sin nombre no debe de guardarse
    it('crear tag', () => {
        
        //when I click on tags
        cy.get('#ember29').click()
        cy.wait(2000)

        //when I Click New tag
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Save
        cy.get('.gh-btn-icon').click()
        
        //Click en tags
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(1000)

        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('exist')
    })

    
    //escenario 4: Crear tag exitoso 
    it('Crear un tag exitoso', () => {
        
        //when I click on tags
        cy.get('#ember29').click()
        cy.wait(2000)

        //when I Click New tag
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //I enter title
        cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
        cy.wait(2000)

        //I enter article
        cy.get('textarea').type('Descripción Tag para Cypress{enter}' )
        cy.wait(2000)
    
        //Save
        cy.get('.gh-btn-icon').click()
        
        //Click en tags
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(1000)


        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('not.exist')
    })

    
    //escenario 5: Corregir tag creado debe de guardarse (ERROR Encontrado)
    it('Corregir tag nuevo con error inicial', () => {
        
        //when I click on tags
        cy.get('#ember29').click()
        cy.wait(2000)

        //when I Click New tag
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
    
        //Save
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)

        //I enter title
        cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
        cy.wait(2000)

        //I enter article
        cy.get('textarea').type('Descripción Tag para Cypress{enter}' )
        cy.wait(2000)

        //click on save
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        
        //Click en tags
        cy.get('.gh-nav-manage>li:nth-child(3)').click()
        cy.wait(1000)

        //Verificar Guardado
        cy.xpath('//button/span[text()="Leave"]').should('not.exist')
    })

  })