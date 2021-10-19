// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToApp', () => {

    const userCredentials = {
        "user": {
            "email": "test@test.com",
            "password": "test"
        }
    }  

    cy.request('POST', 'http://localhost:3000/api/users/login', userCredentials)
        .its('body').then( body => {
            const token = body.user.token
            cy.wrap(token).as('token')
            cy.visit('/', {
                onBeforeLoad (win){
                    win.localStorage.setItem('user', '{"username":"test","email":"test@test.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiZXhwIjoxNjM5ODA2MjMxLCJpYXQiOjE2MzQ2MTg2MzF9.bDxeGKkN1srtOZzC2hNIGOnkXpEiTkw7fJvUwOmANfc","bio":null,"image":null,"effectiveImage":"https://static.productionready.io/images/smiley-cyrus.jpg"}')
                }
            })

        })

//     cy.visit('/')
//     cy.get('[href="/user/login"]').click()
//     cy.get('[placeholder="Email"]').type('test@test.com')
//     cy.get('[placeholder="Password"]').type('test')
//     cy.get('form').submit()
})

//  declare your custom command to use it in TypeScript
declare namespace Cypress {
    interface Chainable {
        loginToApp(): Chainable<Element>
    }
  }

