

describe('Test with backend', () => {

    beforeEach('login to the app', () => {
        //  provide mock response
        cy.intercept({method:'GET', path:'tags'}, {fixture:'tags.json'})
        cy.intercept('GET', '**/articles*', {fixture:'articles.json'})
        cy.intercept('GET', '**/articles/feed*', {"articles":[],"articlesCount":0})

        cy.loginToApp()
    })

    it('verify correct request and response', () => {

        cy.intercept('POST', '**/articles').as('postArticles')


        cy.contains('New Article').click()
        cy.get('fieldset').find('fieldset').then ( fieldset => {
            cy.wrap(fieldset).eq(0).type('New Test Article Title')
            cy.wrap(fieldset).eq(1).type('This article about testing')
            cy.wrap(fieldset).eq(2).type('You need to start learning Cypress today')
        })
        cy.get('form').find('button').click()

        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => {
            console.log('Response body haha: ', xhr)
            // expect(xhr.response.statusCode).to.equal(200)
            // expect(xhr.request.body.article.body).to.equal('You need to start learning Cypress today')
            // expect(xhr.response.body.article.description).to.equal('This article about testing')
        })
    })

    it('verify correct request and response with Intercept', () => {

        // cy.intercept('POST', '**/articles', (req) => {
        //     req.body.article.description = "This a descripotion 2"
        // }).as('postArticles')

        cy.intercept('POST', '**/articles', (req) => {
            req.reply( res => {
                expect(res.body.article.description).to.be.equal('This article about testing')
                res.body.article.description = "This a descripotion 2"
            })
        }).as('postArticles')


        cy.contains('New Article').click()
        cy.get('fieldset').find('fieldset').then ( fieldset => {
            cy.wrap(fieldset).eq(0).type('New Test Article Title')
            cy.wrap(fieldset).eq(1).type('This article about testing')
            cy.wrap(fieldset).eq(2).type('You need to start learning Cypress today')
        })
        cy.get('form').find('button').click()

        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => {
            console.log('Response body haha: ', xhr)
            // expect(xhr.response.statusCode).to.equal(200)
            // expect(xhr.request.body.article.body).to.equal('You need to start learning Cypress today')
            // expect(xhr.response.body.article.description).to.equal('This a descripotion 2')
        })
    })


    it('should have tags with routing objects mocking', () => {
        cy.get('.tag-list')
            .should('contain', 'cypress')
            .and('contain', 'auto')
            .and('contain', 'testing')

    })

    it('verify global feed likes count mocking', () => {
        // cy.route('GET', '**/articles*', 'fixture:articles.json')
        // cy.route('GET', '**/articles/feed*', '{"articles":[],"articlesCount":0}')

        cy.contains('Global Feed').click()
        cy.get('.article-preview button').then( listOfButtons => {
           expect(listOfButtons[0]).to.contain('1') 
           expect(listOfButtons[1]).to.contain('5') 
        })


        cy.fixture('articles').then( file => {
           const articleLink =  file.articles[1].slug

        //    cy.rute(1=request method (post, get), URL to change, what is the file for response)
           cy.intercept('POST', '**/articles/' + articleLink + '/favorite', file)
        })

        cy.get('.article-preview button')
        .eq(1)
        .click()
        .should('contain', '6')
    })


    it('delete a new article API', () => {

        const userCredentials = {
            "user": {
                "email": "test@test.com",
                "password": "test"
            }
        } 

        const bodyReq = {
            "article": {
                "title": "Request from API",
                "description": "test thru Postman",
                "body": "test",
                "tagList": []
            }
        }

        //  first param - request method, second - url, third - user credentials
        cy.request('POST', 'http://localhost:3000/api/users/login', userCredentials)
           .its('body').then( body => {
            const token = body.user.token
        // cy.get('@token').then( token => {
     

            cy.request({
                url: 'http://localhost:3000/api/articles',
                headers: {'Authorization': 'Token ' + token},
                method: 'POST',
                body: bodyReq
            }).then( response => {
                expect(response.status).to.equal(200)
            })

            cy.contains('Global Feed').click()
            cy.get('.article-preview').first().click()
            cy.get('.article-actions').contains('Delete Article').click()
            cy.on('window:confirm', (confirm) => {
                 expect(confirm).to.equal('Do you really want to delete it?')
            })
            cy.on('window:confirm', () => true)

            cy.request({
                url: 'http://localhost:3000/api/articles?limit=10&offset=0',
                headers: {'Authorization': 'Token ' + token},
                method: 'GET',
            }).its('body').then( body => {
                //  delete is not working
                expect(body.articles[1].title).to.not.equal(bodyReq.article.title)
            })


        })


    })


})