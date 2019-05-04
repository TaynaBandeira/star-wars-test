describe('Planet API', () => {
    it('should return status 200', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('status')
            .should('be.eql', 200)

    })

    it('should return name Tatooine', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.name')
            .should('be.eql', 'Tatooine')
    })

    it('should return rotation period 23', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.rotation_period')
            .should('be.eql', '23')
    })

    it('should return orbital period 304', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.orbital_period')
            .should('be.eql', '304')
    })

    it('should return diameter 10465', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.diameter')
            .should('be.eql', '10465')
    })

    it('should return climate arid', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.climate')
            .should('be.eql', 'arid')
    })

    it('should return gravity 1 standard', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.gravity')
            .should('be.eql', '1 standard')
    })

    it('should return terrain', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.terrain')
            .should('be.eql', 'desert')
    })

    it('should return surface water 1', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.surface_water')
            .should('be.eql', '1')
    })

    it('should return population', () => {
        const people = cy.request('GET', 'https://swapi.co/api/planets/1/')

        people.its('body.population')
            .should('be.eql', '200000')
    })
})