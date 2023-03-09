import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { action } from '@storybook/addon-actions';
import { ArgTypes } from '@storybook/web-components';

export const tabsArgs = {
    activeTab: 'trein',
    disableLinks: true,
    alt: false,
    responsiveLabel: false,
    onChangeActiveTab: action('change'),
};

export const tabsArgTypes: ArgTypes<typeof tabsArgs> = {
    activeTab: {
        name: 'data-vl-active-tab',
        description:
            'Het id van de actieve tab. De tab in kwestie wordt geselecteerd bij het aanpassen van dit id.<br>De default story gebruikt de volgende 3 ids:<br>• trein<br>• metro<br>• fiets',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    alt: {
        name: 'data-vl-alt',
        description:
            'Toont de alt variant van de tabs. Deze variant dient gebruikt te worden als subnavigatie onder de functional header.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disableLinks: {
        name: 'data-vl-disable-links',
        description:
            'Zet de automatische url manipulaties uit.<br>Dit attribuut wordt enkel bij de initiële render van een tab gebruikt en werkt niet dynamisch.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    responsiveLabel: {
        name: 'data-vl-responsive-label',
        description:
            'Wordt afgebeeld op mobile wanneer de tabs samengevoegd worden tot een uitklapbaar menu. Wordt enkel afgebeeld wanneer er geen tab geselecteerd is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    onChangeActiveTab: {
        name: 'change',
        description: 'Afgevuurd na het klikken op een niet actieve tab. Het event bevat het id van de tab.',
        table: {
            type: { summary: '{ activeTab: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
