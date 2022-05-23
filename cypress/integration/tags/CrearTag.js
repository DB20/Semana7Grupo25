//feature crear tag. Escenarios: 3
describe('Feature: Crear Post', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/ghost/#/signin')
        cy.wait(5000)
  
        cy.get('form').within(() => {
          cy.get("#ember7").type(Cypress.env("user1"));
          cy.get("#ember9").type(Cypress.env("pass1"));
            cy.get('#ember11').click()
        })
        cy.wait(3000)
        cy.get('#ember29').click()
        cy.wait(2000)
  
    })
//escenario 91: Color RGB con valores alfanuméricos
    it('Color RGB con valores alfanuméricos', () => {
        //Se da nombre para que no arroje error por el nombre  
            cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
            cy.wait(2000)
        //Agrego un color de tipo
    
          cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').type(faker.datatype.number({ min: 900000, max: 999999}))
          cy.wait(2000)
          
          //Guardo
          cy.get('.gh-btn-icon').click()
          cy.wait(1000)
          cy.get('.gh-btn-primary').should('exist')
          //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('not.exist')
      })
      
//escenario 92: Color RGB con codigo hexadecimal de 5 dígitos (Or Negativo)
  it('Color RGB con 5 caracteres', () => {
    //Se da nombre para que no arroje error por el nombre  
        cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
        cy.wait(2000)
    //Agrego un color de tipo

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').type(faker.datatype.number({ min: 90000, max: 99999}))
      cy.wait(2000)
      
      //Guardo
      cy.get('.gh-btn-icon').click()
      cy.wait(1000)
      //cy.get('.gh-btn-primary').should('not.exist')
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('be.visible')
  })
//escenario 93: Color RGB con codigo hexadecimal de 7 dígitos (Or positivo)
    it('Color RGB con 7 caracteres solo toma 6 primeros', () => {
        //Se da nombre para que no arroje error por el nombre  
            cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
            cy.wait(2000)
        //Agrego un color de tipo
    
          cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').type(faker.datatype.number({ min: 9000000, max: 9999999}))
          cy.wait(2000)
          
          //Guardo
          cy.get('.gh-btn-icon').click()
          cy.wait(1000)
          cy.get('.gh-btn-primary').should('exist')
          //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('exist')
      })
//escenario 94: Color caracteres especiales (Or negativo)
  it('Color caracteres especiales', () => {
    //Se da nombre para que no arroje error por el nombre  
        cy.get('#tag-name').type('Tag Nuevo con Cypress{enter}' )
        cy.wait(2000)
    //Agrego un color de tipo

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').type('?'+faker.datatype.string())
      cy.wait(2000)
      
      //Guardo
      cy.get('.gh-btn-icon').click()
      cy.wait(1000)
      //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('be.visible')
  })
//escenario 95: slug no debe de tener espacios pues es dominio web
    it('Slug sin espacios no debe ocurrir', () => {
        //Se da nombre aletorio con spacios
            cy.get('#tag-name').type(faker.random.words(5))
            cy.wait(2000)
        //click para que cargue Slug
    
          cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').click()
          cy.wait(2000)
          
          //cy.get('.gh-btn-primary').should('exist')
          //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('exist')
          cy.get('#tag-slug').should('not.contain', ' ')
      })
  
//escenario 96: Descripción con 500 caracteres
  it('Permite guardar con descripción de 500 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').click()
      //Llenamos la descripción
      cy.get('#tag-description').type(faker.datatype.string(500), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('exist')
  })
//escenario 97: Descripción con 501 caracteres
  it('No Permite guardar con descripción de 501 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input').click()
      //Llenamos la descripción
      cy.get('#tag-description').type(faker.datatype.string(501), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[3]/p[1]').should('be.visible')
  })

  //escenario 98: Meta data del Tag, meta title 299 caracteres
    it('Permite guardar con meta title  de 299 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue meta

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#meta-title').type(faker.datatype.string(299), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[3]/p[1]').should('exist')
  })

//escenario 99: Meta data del Tag, meta title 301 caracteres
    it('Permite guardar con meta title de 301 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#meta-title').type(faker.datatype.string(301), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //  cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[1]/p[1]').should('be.visible')
  })

  //escenario 100: Meta data del Tag, meta description 500 caracteres
    it('Permite guardar con meta-descripción de 500 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#meta-description').type(faker.datatype.string(500), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        cy.get('.gh-btn-primary').should('exist')
      //y.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[1]/p[1]').should('exist')
  })

//escenario 101: Meta data del Tag, meta description 501 caracteres
    it('Permite guardar con meta-descripción de 501 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#meta-description').type(faker.datatype.string(501), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[2]/p[1]').should('be.visible')
  })
//escenario 102: Canonical URL meta must be a valid URL
    it('Permite guardar con meta-Canonical URL con URL válida', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#canonical-url').type(faker.internet.url())
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
        cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[2]/p[1]').should('be.visible')
  })
  //escenario 103: Canonical URL meta con valores alfanuméricos
  it('No Permite guardar con meta-Canonical URL con valores alfanuméricos que no sn URL', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#canonical-url').type(faker.datatype.string(20))
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //  cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[3]/p').should('be.visible')
  })
//escenario 104: Twitter Title maximo 300 caracteres
    it('Titulo de Twitter con 300 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#twitter-title').type(faker.datatype.string(300), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 105: Twitter Title maximo 301 caracteres
it('Titulo de Twitter con 301 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#twitter-title').type(faker.datatype.string(301), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 106: Twitter Title maximo 500 caracteres
  it('Descripción de Twitter con 500 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#twitter-description').type(faker.datatype.string(500), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 107: Twitter Title maximo 501 caracteres
    it('Descripción de Twitter con 501 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button').click()
      //Llenamos la descripción
      cy.get('#twitter-description').type(faker.datatype.string(501), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })

  //escenario 108: Facebook Title maximo 301 caracteres
  it('Titutlo de facebook con 301 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span').click()
      //Llenamos la descripción
      cy.get('#og-title').type(faker.datatype.string(301), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 109: Facebook Title maximo 300 caracteres
  it('Titutlo de facebook con 300 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span').click()
      //Llenamos la descripción
      cy.get('#og-title').type(faker.datatype.string(300), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 110: Facebook Description maximo 501 caracteres
    it('Titutlo de facebook con 501 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span').click()
      //Llenamos la descripción
      cy.get('#og-description').type(faker.datatype.string(501), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      //cy.get('.gh-btn-primary').should('exist')
      cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 111: Facebook Description maximo 500 caracteres
    it('Titutlo de facebook con 500 caracteres', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span').click()
      //Llenamos la descripción
      cy.get('#og-description').type(faker.datatype.string(500), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)
        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })
//escenario 1162	Code Inyection valores alfanuméricos
    it('Code Inyection valores alfanuméricos', () => {
    //Se da nombre aletorio con spacios
        cy.get('#tag-name').type(faker.random.words(2))
        cy.wait(2000)
    //click para que cargue Slug

      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[1]/button/span').click()
      //Llenamos la descripción
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[2]/div/div/div/div[1]/div/div/div[6]/div[1]/div/div/div/div[5]/div/pre').type(faker.datatype.string(200), {
        parseSpecialCharSequences: false,
      })
      cy.wait(2000)

        //Guardo
        cy.get('.gh-btn-icon').click()
        cy.wait(1000)
      cy.get('.gh-btn-primary').should('exist')
      //cy.xpath('/html/body/div[2]/aside/article/div').should('be.visible')
  })


















  
  })