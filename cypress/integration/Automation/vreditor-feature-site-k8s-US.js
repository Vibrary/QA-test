/// <reference types = "cypress" />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

it('vreditor-feature-site-k8s-US', () => {
    
    cy.visit({
        url : 'https://jenkins.istaging.com/view/editor/job/vreditor-feature-site-k8s-US/build?delay=0sec',
        
        /* use 'failOnStatusCode' for redirecturl */
        failOnStatusCode : false
    });

    cy.get(':nth-child(1) > .setting-main > div > .setting-input').clear().type('feature/2d-362-fix-i18n-analytis-management-column');
    cy.get('#yui-gen1-button').click();
})