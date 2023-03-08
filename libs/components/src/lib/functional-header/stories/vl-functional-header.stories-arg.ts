import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

export const functionalHeaderArgs = {
    back: '',
    backLink: '',
    disableBackLink: false,
    link: '#',
    subTitle: 'Voor lager, middelbaar en hoger onderwijs',
    title: 'School- en studietoelagen',
    actionsSlot: `<div slot="actions">
    <a href="#">Actie 1</a>
    <a href="#">Actie 2</a>
</div>`,
    backSlot: '<span slot="back">Terug</span>',
    backLinkSlot: '<a slot="back-link" href="#">Terug</a>',
    subHeaderSlot: '<span slot="sub-header">Sub header content</span>',
    subTitleSlot: '<span slot="sub-title">Voor lager, middelbaar en hoger onderwijs</span>',
    titleSlot: '<span slot="title">School- en studietoelagen</span>',
    topLeftSlot: '<span slot="top-left">Linkerbovenhoek content</span>',
    topRightSlot: '<span slot="top-right">Rechterbovenhoek content</span>',
    onClickBack: action('vl-click-back'),
};

export const functionalHeaderArgTypes: ArgTypes<typeof functionalHeaderArgs> = {
    back: {
        name: 'data-vl-back',
        description: 'Tekst van de terug-link.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"Terug"' },
        },
    },
    backLink: {
        name: 'data-vl-back-link',
        description: 'URL van de terug-link.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: 'document.referrer' },
        },
    },
    disableBackLink: {
        name: 'data-vl-disable-back-link',
        description: 'Zet de terug-link uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    link: {
        name: 'data-vl-link',
        description: 'URL van de titel-link.',
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    subTitle: {
        name: 'data-vl-sub-title',
        description: 'Tekst van de subtitel.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    title: {
        name: 'data-vl-title',
        description: 'Tekst van de titel.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    actionsSlot: {
        name: 'actions',
        description: 'Acties die worden afgebeeld in de rechterbovenhoek.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    backSlot: {
        name: 'back',
        description:
            'Wordt afgebeeld ipv de tekst van de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• back-link slot<br>• sub-header slot',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    backLinkSlot: {
        name: 'back-link',
        description:
            'Wordt afgebeeld ipv de terug-link.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• data-vl-back-link attribuut<br>• data-vl-disable-back-link attribuutt<br>• back slot<br>• sub-header slot',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    subHeaderSlot: {
        name: 'sub-header',
        description:
            'Wordt afgebeeld onder de horizontale lijn.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-back attribuut<br>• data-vl-back-link attribuut<br>• data-vl-disable-back-link attribuut<br>• data-vl-sub-title attribuut<br>• back slot<br>• back-link slot<br>• sub-title slot',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    subTitleSlot: {
        name: 'sub-title',
        description:
            'Wordt afgebeeld ipv de tekst van de subtitel.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-sub-title<br>• sub-header slot',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    titleSlot: {
        name: 'title',
        description:
            'Wordt afgebeeld ipv de tekst van de titel.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-title',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    topLeftSlot: {
        name: 'top-left',
        description:
            'Wordt afgebeeld in de linkerbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    topRightSlot: {
        name: 'top-right',
        description:
            'Wordt afgebeeld in de rechterbovenhoek.<br>Kan niet in combinatie gebruikt worden met:<br>• actions slot',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    onClickBack: {
        name: 'vl-click-back',
        description: 'Afgevuurd na het klikken op de terug-link.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
        },
    },
};
