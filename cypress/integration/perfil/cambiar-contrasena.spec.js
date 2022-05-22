import {faker} from '@faker-js/faker'

//variables pool a-priori
var email
var password 
var contrasenaNueva
var contrasenaOldIncorrecta

//variables pool pseudo

var poolContrasenas
var contrasenaPseudo
var poolContrasenasCortas
var contrasenaCorta


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function obtenerDatosPool(){
  cy.fixture('pool-datos').then((datos)  => {
    email= datos.credencialesLogin.correoLogin
    password= datos.credencialesLogin.passwordLogin
    var contrasenas= datos.contrasenas
    contrasenaNueva= contrasenas[getRandomInt(0, contrasenas.length)]
    contrasenaOldIncorrecta= contrasenas[getRandomInt(0, contrasenas.length)]
    
  })
}

function generarPoolPseudo(){
  
  poolContrasenas=[]
  for(var i=0; i<10; i++){
      var contrasena= faker.internet.password(11)
      poolContrasenas.push(contrasena)

  }
  console.log(poolContrasenas)
  
  poolContrasenasCortas=[]
  for(var i=0; i<10; i++){
    var contrasenac= faker.internet.password(9)
    poolContrasenasCortas.push(contrasenac)
    
  }
  console.log(poolContrasenasCortas)
  
}

function obtenerDatosPseudo(){
  contrasenaPseudo= poolContrasenas[getRandomInt(0, poolContrasenas.length)]
  contrasenaCorta= poolContrasenasCortas[getRandomInt(0, poolContrasenasCortas.length)]

}
 
 //feature cambiar contraseña. 
describe('Feature: Cambiar contraseña', () => {

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

      //And I sign in
      cy.get('form').within(() => {
          cy.get('#ember7').type(email)
          cy.get('#ember9').type(password)
          cy.get('#ember11').click()
      })
      cy.wait(3000)

  })
  
  //escenario 10: cambiar la contraseña con un valor de verificación de contraseña diferente al valor de la contraseña nueva
  it('Cambiar contraseña con valores diferentes en contraseña nueva y verificación de contraseña', () => {
      
      //when I click user icon
      cy.get('.gh-user-avatar').click()
      cy.wait(2000)

      //And I go to user profile
      cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
      cy.wait(2000)
  
      //And I enter old password
      cy.get('#user-password-old').type(password )
      cy.wait(2000)

      //And I enter new password
      cy.get('#user-password-new').type(contrasenaPseudo )
      cy.wait(2000)

      //And I confirm new password
      cy.get('#user-new-password-verification').type(contrasenaCorta )
      cy.wait(2000)
  
      //And I click Change Password button
      cy.get('.button-change-password').click()
      cy.wait(2000)

      //Then I expect to not be able to save the new password
      cy.get('.error>.response').should('exist')

  })

  //escenario 11: cambiar la contraseña con el mismo valor de la contraseña antigua
  it('Cambiar contraseña con el mismo valor de la contraseña antigua', () => {
      
      //when I click user icon
      cy.get('.gh-user-avatar').click()
      cy.wait(2000)

      //And I go to user profile
      cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
      cy.wait(2000)
  
      //And I enter old password
      cy.get('#user-password-old').type(password )
      cy.wait(2000)

      //And I enter new password
      cy.get('#user-password-new').type(password )
      cy.wait(2000)

      //And I confirm new password
      cy.get('#user-new-password-verification').type(password )
      cy.wait(2000)
  
      //And I click Change Password button
      cy.get('.button-change-password').click()
      cy.wait(2000)

      //Then I expect to not be able to save the new password
      cy.get('.error>.response').should('exist')

  })

  //escenario 12: cambiar la contraseña, contraseña nueva 10 caracteres -1
  it('Cambiar contraseña contraseña nueva 10 caracteres -1', () => {
      
    //when I click user icon
    cy.get('.gh-user-avatar').click()
    cy.wait(2000)

    //And I go to user profile
    cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
    cy.wait(2000)

    //And I enter old password
    cy.get('#user-password-old').type(password )
    cy.wait(2000)

    //And I enter new password
    cy.get('#user-password-new').type(contrasenaCorta )
    cy.wait(2000)

    //And I confirm new password
    cy.get('#user-new-password-verification').type(contrasenaCorta )
    cy.wait(2000)

    //And I click Change Password button
    cy.get('.button-change-password').click()
    cy.wait(2000)

    //Then I expect to not be able to save the new password
    cy.get('.error>.response').should('exist')

  }) 

  //escenario 13: cambiar la contraseña, contraseña nueva 500 caracteres +1
  it('Cambiar contraseña, contraseña nueva 500 caracteres +1', () => {
      
    //when I click user icon
    cy.get('.gh-user-avatar').click()
    cy.wait(2000)

    //And I go to user profile
    cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
    cy.wait(2000)

    //And I enter old password
    cy.get('#user-password-old').type(password )
    cy.wait(2000)

    //And I enter new password
    cy.get('#user-password-new').type(faker.random.alphaNumeric(501) )
    cy.wait(2000)

    //And I confirm new password
    //Se usa un valor diferente para que no guarde la contraseña y evitar errores al iniciar sesión en las otras pruebas
    cy.get('#user-new-password-verification').type(faker.lorem.word() )
    cy.wait(2000)

    //And I click Change Password button
    cy.get('.button-change-password').click()
    cy.wait(2000)

    //Then I expect to not be able to save the new password
    cy.get('.error>#user-password-new').should('exist')
    cy.get('.error>#user-new-password-verification').should('exist')

  })   

  //escenario 14: cambiar la contraseña con la contraseña antigua incorrecta
  it('Cambiar contraseña con la contraseña antigua incorrecta', () => {
      
        //when I click user icon
        cy.get('.gh-user-avatar').click()
        cy.wait(2000)

        //And I go to user profile
        cy.get('.dropdown-triangle-top>li:nth-child(4)').click()
        cy.wait(2000)

        //And I enter old password
        cy.get('#user-password-old').type(contrasenaOldIncorrecta )
        cy.wait(2000)

        //And I enter new password
        cy.get('#user-password-new').type(contrasenaNueva )
        cy.wait(2000)

        //And I confirm new password
        cy.get('#user-new-password-verification').type(contrasenaNueva )
        cy.wait(2000)

        //And I click Change Password button
        cy.get('.button-change-password').click()
        cy.wait(2000)

        //Then I expect to not be able to save the new password
        cy.get('.gh-alert-red').should('exist')

    }) 

  

  
})