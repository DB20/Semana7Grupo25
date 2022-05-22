import {faker} from '@faker-js/faker'

//variables pool a-priori
var email
var password 
var correoNuevo
var contrasenaNueva
//variables pool pseudo
var poolCorreos
var correoPseudo
var poolContrasenas
var contrasenaPseudo
var poolCorreosLargos
var correoLargoPseudo

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function obtenerDatosPool(){

    cy.fixture('pool-datos').then((datos)  => {
        email= datos.credencialesLogin.correoLogin
        password= datos.credencialesLogin.passwordLogin
        let correos= datos.correos
        correoNuevo= correos[getRandomInt(0, correos.length)]
        let contrasenas= datos.contrasenas
        contrasenaNueva= contrasenas[getRandomInt(0, contrasenas.length)]
    })
}

function generarPoolPseudo(){
    poolCorreos=[]
    for(var i=0; i<10; i++){
        var correo= faker.internet.email()
        poolCorreos.push(correo)

    }
    
    poolContrasenas=[]
    for(var i=0; i<10; i++){
        var contrasena= faker.internet.password()
        poolContrasenas.push(contrasena)
        
    }
    
    poolCorreosLargos=[]
    for(var i=0; i<10; i++){
        var correo= faker.random.alphaNumeric(65)+'@correo.com'
        poolCorreosLargos.push(correo)
        
    }
    
    
}

function obtenerDatosPseudo(){
    correoPseudo= poolCorreos[getRandomInt(0, poolCorreos.length)]
    contrasenaPseudo= poolContrasenas[getRandomInt(0, poolContrasenas.length)]
    correoLargoPseudo= poolCorreosLargos[getRandomInt(0, poolCorreosLargos.length)]

}

//feature login. 
describe('Feature: Login', () => {

    before(() => {
        obtenerDatosPool()
        generarPoolPseudo()
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(1500)

    })
    
    //given I navigate to Ghost page
    beforeEach(() => {
        obtenerDatosPseudo()
        cy.visit('http://localhost:2368/ghost/#signin')
        cy.wait(3000)

    })
    
   //escenario 1: login con credenciales correctas
    it('login con credenciales correctas', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(email)
            
        })
        cy.wait(1000)

        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(password)

        })
        cy.wait(1000)

        //When I click next
        cy.get('form').within(() => {
            cy.get('#ember11').click()

        })
        cy.wait(2000)
        

        //Then I expect to be able to login
        cy.get('.gh-canvas').should('exist')

    })  


    //escenario 2: login con password incorrecto
    it('login con password incorrecto', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(email)
            
        })
        cy.wait(1000)

        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(faker.lorem.word())

        })
        cy.wait(1000)

        //When I click next
        cy.get('form').within(() => {
            cy.get('#ember11').click()

        })
        cy.wait(2000)
        

        //Then I expect to not be able to login
        cy.get('.main-error').should('exist')

    }) 

    //escenario 3: login con usuario incorrecto
    it('login con usuario incorrecto', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(correoPseudo)
            
        })
        cy.wait(1000)

        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(password)

        })
        cy.wait(1000)

        //When I click next
        cy.get('form').within(() => {
            cy.get('#ember11').click()

        })
        cy.wait(2000)
        

        //Then I expect to not be able to login
        cy.get('.main-error').should('exist')

    })

    //escenario 4: login con credenciales incorrectas
    it('login con credenciales incorrectas', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(correoPseudo)
            
        })
        cy.wait(1000)

        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(contrasenaPseudo)

        })
        cy.wait(1000)

        //When I click next
        cy.get('form').within(() => {
            cy.get('#ember11').click()

        })
        cy.wait(2000)
        

        //Then I expect to not be able to login
        cy.get('.main-error').should('exist')

    }) 

    //escenario 5: login con password vacío
    it('login con password vacío', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(correoNuevo)
            
        })
        cy.wait(1000)

        //When I click next
        cy.get('form').within(() => {
            cy.get('#ember11').click()

        })
        cy.wait(2000)
        

        //Then I expect to not be able to login
        cy.get('.main-error').should('exist')

    })

    //escenario 6: login con usuario vacío
    it('login con usuario vacío', () => {


        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(contrasenaNueva)

        })
        cy.wait(1000)

        //When I click next
        cy.get('form').within(() => {
            cy.get('#ember11').click()

        })
        cy.wait(2000)
        

        //Then I expect to not be able to login
        cy.get('.main-error').should('exist')

    })

    //escenario 7: login usuario con 75 caracteres +1
    it('login usuario con 75 caracteres +1', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(correoLargoPseudo)
            
        })
        cy.wait(1000)

        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(password)

        })
        cy.wait(1000)

        
        
        //Then I expect user input to not be valid
        cy.get('.error.ember-view').should('exist')

    })

    //escenario 8: login password con 500 caracteres +1
    it('login password con 500 caracteres +1', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(email)
            
        })
        cy.wait(1000)

        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(faker.random.alphaNumeric(501))

        })
        cy.wait(1000)

        //and I click outside the input
        cy.get('form').within(() => {
            cy.get('.gh-site-icon').click()

        })
        cy.wait(1000)


        //Then I expect password input to not be valid
        cy.get('.error.ember-view').should('exist')

    }) 

   //escenario 9: login usuario sin formato de correo
    it('login usuario sin formato de correo', () => {

        //When I enter user
        cy.get('form').within(() => {
            cy.get('#ember7').type(faker.lorem.word())
            
        })
        cy.wait(1000)

        //When I enter password
        cy.get('form').within(() => {
            cy.get('#ember9').type(password)

        })
        cy.wait(1000)

        
        //Then I expect user input to not be valid
        cy.get('.error.ember-view').should('exist')

    })  


  

  
})