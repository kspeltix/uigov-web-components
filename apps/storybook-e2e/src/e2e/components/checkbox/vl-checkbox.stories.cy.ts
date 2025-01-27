const checkboxUrl = 'http://localhost:8080/iframe.html?id=components-checkbox--checkbox-default&viewMode=story';
const checkboxSwitchUrl = 'http://localhost:8080/iframe.html?id=components-checkbox--checkbox-switch&viewMode=story';

describe('story vl-checkbox default', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(checkboxUrl);

        cy.checkA11y('vl-checkbox');
        cy.get('vl-checkbox').shadow().find('.vl-checkbox__toggle').click({ force: true });
        cy.checkA11y('vl-checkbox');
    });

    it('should contain a label', () => {
        cy.visit(checkboxUrl);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox__label').find('span').contains('Optie 1');
    });

    it('should contain a block level checkbox', () => {
        cy.visit(`${checkboxUrl}&args=block:true`);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox').should('have.class', 'vl-checkbox--block');
    });

    it('should contain a disabled checkbox', () => {
        cy.visit(`${checkboxUrl}&args=disabled:true`);

        cy.get('vl-checkbox')
            .shadow()
            .find('.vl-checkbox')
            .should('have.class', 'vl-checkbox--disabled')
            .find('input')
            .should('have.attr', 'disabled');
    });

    it('should contain a checkbox with an error state', () => {
        cy.visit(`${checkboxUrl}&args=error:true`);

        cy.get('vl-checkbox').shadow().find('.vl-checkbox').should('have.class', 'vl-checkbox--error');
    });

    it('should contain a checkbox without a label', () => {
        cy.visit(`${checkboxUrl}&args=single:true`);

        cy.get('vl-checkbox')
            .shadow()
            .find('.vl-checkbox')
            .should('have.class', 'vl-checkbox--single')
            .find('.vl-checkbox__label span')
            .should('have.class', 'vl-u-visually-hidden');
    });
});

describe('story vl-checkbox switch', () => {
    it('should be accessible', () => {
        cy.visitWithA11y(checkboxSwitchUrl);

        cy.checkA11y('vl-checkbox');
        cy.get('vl-checkbox').shadow().find('.vl-checkbox--switch').click({ force: true });
        cy.checkA11y('vl-checkbox');
    });

    it('should contain a switch with label', () => {
        cy.visit(checkboxSwitchUrl);

        cy.get('vl-checkbox')
            .shadow()
            .find('.vl-checkbox--switch__wrapper')
            .find('.vl-checkbox__label span')
            .should('have.class', 'vl-checkbox--switch__label')
            .contains('Instellingen blokkeren');
    });
});
