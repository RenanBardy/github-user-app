
describe('Integration test', () => {
  context('Search container', () => {
    before(() => {
      cy.visit('/')
    })

    it('Check small word message', () => {
      cy.get('input[data-cy="search-input"]').type('ab') 
      cy.get('span[data-cy="result-small_word-message"]').should('exist')
    })

    it('Check searching reponse', () => {
      cy.intercept(
        {pathname: '/search/users'},
        req => {
          req.reply((res) => {
            res.send({ fixture: 'not_found.json' })
            res.delay(1000)
          })
        }).as('getUsers')
      cy.get('input[data-cy="search-input"]').type('foobar') 
      cy.get('span[data-cy="result-search-message"]').should('exist')
    })

    it('Find user result', () => {
      cy.intercept({pathname: '/search/users'}, { fixture: 'users.json' }).as('getUsers')
      cy.get('input[data-cy="search-input"]').type('foobar') 
      cy.wait('@getUsers')
      cy.get('h4[data-cy="user-name"]:first-child').contains('reba')
      cy.get('h4[data-cy="user-name"]:first-child').contains('reba')
      cy.get('span[data-cy="users-found"]').contains('1067')
    })

    it('Check not found reponse', () => {
      cy.intercept({pathname: '/search/users'}, { fixture: 'not_found.json' }).as('getUsers')
      cy.get('input[data-cy="search-input"]').type('foobar') 
      cy.wait('@getUsers')
      cy.get('span[data-cy="result-not_found-message"]').should('exist')
    })
  })
})

