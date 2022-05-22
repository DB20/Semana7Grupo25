import {faker} from '@faker-js/faker'

//variables pool a-priori
var email
var password 
var nombre
var caracterE
var correoNuevo
var locacion

//variables pool pseudo
var poolPalabrasRandom
var palabraRandomPseudo
var poolBios
var bioPseudo
var poolCorreosLargos
var correoLargoPseudo
var poolURLS
var urlPseudo


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function obtenerDatosPool(){

    cy.fixture('pool-datos').then((datos)  => {
        email= datos.credencialesLogin.correoLogin
        password= datos.credencialesLogin.passwordLogin
    
        var nombres= datos.nombres
        nombre= nombres[getRandomInt(0, nombres.length)]
    
        var caracteresEsp= datos.caracteresEsp
        caracterE= caracteresEsp[getRandomInt(0, caracteresEsp.length)]
    
        var correos= datos.correos
        correoNuevo= correos[getRandomInt(0, correos.length)]
    
        var locaciones= datos.ciudades
        locacion= locaciones[getRandomInt(0, locaciones.length)]
    
    })
}

function generarPoolPseudo(){
    poolPalabrasRandom=[]
    for(var i=0; i<10; i++){
        var palabra= faker.internet.domainWord()
        poolPalabrasRandom.push(palabra)

    }
    
    poolCorreosLargos=[]
    for(var i=0; i<10; i++){
        var correo= faker.random.alphaNumeric(65)+'@correo.com'
        poolCorreosLargos.push(correo)
        
    }
    
    poolURLS=[]
    for(var i=0; i<10; i++){
        var url= faker.internet.url()
        poolURLS.push(url)
        
    }
    
    poolBios=[]
    for(var i=0; i<10; i++){
        var bio= faker.lorem.sentence()
        poolBios.push(bio)
        
    }
    
    
}

function obtenerDatosPseudo(){
    palabraRandomPseudo= poolPalabrasRandom[getRandomInt(0, poolPalabrasRandom.length)]
    correoLargoPseudo= poolCorreosLargos[getRandomInt(0, poolCorreosLargos.length)]
    urlPseudo= poolURLS[getRandomInt(0, poolURLS.length)]
    bioPseudo= poolBios[getRandomInt(0, poolBios.length)]

}
 
 //feature editar datos de perfil. 
 describe('Feature: Editar datos de perfil', () => {

    //given I navigate to Ghost page
    before(() => {
        obtenerDatosPool()
        generarPoolPseudo()
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(1500)
  
  
    })

    beforeEach(() => {
        obtenerDatosPseudo()
        cy.visit('http://localhost:2368/ghost/#signin')
        cy.wait(3000)
  
        //And I sign in
        cy.get('form').within(() => {
            cy.get('#ember7').type(email)
            cy.get('#ember9').type(password)
            cy.get('#ember11').click()
        })
        cy.wait(3000)
  
    })
    
   //escenario 15: cambiar nombre
    it('Cambiar nombre', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)
  
        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a name
        cy.get('#user-name').clear().type(nombre, {force: true} )
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)
  
        //Then I expect to be able to save the new name
        cy.get('.error>.response').should('not.exist')
  
    }) 

    //escenario 16: cambiar nombre con valores numéricos
    it('Cambiar nombre con valores numéricos', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a name
        cy.get('#user-name').clear().type(faker.datatype.number(), {force: true} )
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new name
        cy.get('.error>.response').should('exist')

    })

    //escenario 17: cambiar nombre con caracteres especiales
    it('Cambiar nombre con caracteres especiales', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a name
        cy.get('#user-name').clear().type(caracterE, {force: true} )
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new name
        cy.get('.error>.response').should('exist')

    })

    //escenario 18: cambiar nombre con 191 caracteres +1
    it('Cambiar nombre con 191 caracteres +1', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a name
        cy.get('#user-name').clear().type(faker.random.alpha(192), {force: true} )
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new name
        cy.get('.error>.response').should('exist')

    }) 

    //escenario 19: cambiar nombre con 1 letra
    it('Cambiar nombre con 1 letra', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a name
        cy.get('#user-name').clear().type(faker.random.alpha(), {force: true} )
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new name
        cy.get('.error>.response').should('exist')

    }) 

    //escenario 20: cambiar correo
    it('Cambiar correo', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter an email
        cy.get('#user-email').clear().type(correoNuevo, {force: true})

        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //And I enter old email
        //se cambia nuevamente al correo anterior para evitar errores en las demás pruebas
        cy.get('#user-email').clear().type(email, {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000) 

        //Then I expect to be able to save the new email
        cy.get('.error>.response').should('not.exist')

    }) 

    //escenario 21: cambiar correo sin formato de correo
    it('Cambiar correo sin formato de correo', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter an email
        cy.get('#user-email').clear().type(palabraRandomPseudo, {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new email
        cy.get('.error>.response').should('exist')

    }) 

    //escenario 22: cambiar correo con 75 caracteres +1
    it('Cambiar correo con 75 caracteres +1', () => {
        
      //when I click user icon
      cy.get('.gh-user-avatar').click()
      cy.wait(2000)

      //And I go to user profile
      cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
      cy.wait(2000)
  
      //And I enter an email
      cy.get('#user-email').clear().type(correoLargoPseudo, {force: true})
      cy.wait(2000)
  
      //And I click save button
      cy.get('.gh-btn-primary').click()
      cy.wait(2000)

      //Then I expect to not be able to save the new email
      cy.get('.error>.response').should('exist')

  })
  
    //escenario 23: Ingresar locación
    it('Ingresar locación', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-location').clear().type(locacion, {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to be able to save the new location
        cy.get('.error>.response').should('not.exist')

    })

    //escenario 24: Ingresar locación con 250 caracteres +1
    it('Ingresar locación con 250 caracteres +1', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-location').clear().type(faker.random.alpha(251), {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new location
        cy.get('.error>.response').should('exist')

    })

    //escenario 25: Ingresar locación con números
    it('Ingresar locación con números', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-location').clear().type(faker.datatype.number(), {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new location
        cy.get('.error>.response').should('exist')

    })

    //escenario 26: Ingresar locación con caracteres especiales
    it('Ingresar locación con caracteres especiales', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-location').clear().type(caracterE, {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new location
        cy.get('.error>.response').should('exist')

    })

    //escenario 27: Ingresar website
    it('Ingresar website', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-website').clear().type(urlPseudo, {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to be able to save the new website
        cy.get('.error>.response').should('not.exist')

    })

    //escenario 28: Ingresar website sin formato de url
    it('Ingresar website sin formato de url', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-website').clear().type(palabraRandomPseudo, {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new website
        cy.get('.error>.response').should('exist')

    })

    //escenario 29: Ingresar bio
    it('Ingresar bio', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-bio').clear().type(bioPseudo, {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to be able to save the new bio
        cy.get('.error>.response').should('not.exist')

    })

    //escenario 30: Ingresar bio con 200 caracteres +1
    it('Ingresar bio con 200 caracteres +1', () => {
        
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)
    
        //And I enter a location
        cy.get('#user-bio').clear().type(faker.random.alpha(201), {force: true})
        cy.wait(2000)
    
        //And I click save button
        cy.get('.gh-btn-primary').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new bio
        cy.get('.error>.response').should('exist')

    })
  

  
    
  
    
  })