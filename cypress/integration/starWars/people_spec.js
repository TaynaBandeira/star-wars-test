describe('People API', () => {
    it('should return status 200', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/ ')

        people.its('status')
            .should('be.eql', 200)

    })

    it('should return name Luke Skywalker', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.name')
            .should('be.eql', 'Luke Skywalker')
    })

    it('should return height 172', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.height')
            .should('be.eql', '172')
    })

    it('should return mass 77', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.mass')
            .should('be.eql', '77')
    })

    it('should return hair color blond', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.hair_color')
            .should('be.eql', 'blond')
    })

    it('should return skin color fair', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.skin_color')
            .should('be.eql', 'fair')
    })

    it('should return eye color blue', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.eye_color')
            .should('be.eql', 'blue')
    })

    it('should return birth year 19BBY', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.birth_year')
            .should('be.eql', '19BBY')
    })

    it('should return gender male', () => {
        const people = cy.request('GET', 'https://swapi.co/api/people/1/')

        people.its('body.gender')
            .should('be.eql', 'male')
    })

})