import { TYPES } from '@domg-wc/common-utilities';

export const radioArgs = {
    block: false,
    checked: false,
    disabled: false,
    error: false,
    label: 'Ja',
    name: 'options',
    single: false,
    value: 'Ja',
};

export const radioArgTypes = {
    block: {
        name: 'data-vl-block',
        description: 'Attribute to show the checkbox as a block element',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    checked: {
        name: 'data-vl-checked',
        description: 'Attribute to check the radio by default',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Attribute to disable the checkbox',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    error: {
        name: 'data-vl-error',
        description: 'Attribute to show an error state on the checkbox',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    label: {
        name: 'data-vl-label',
        description: 'Attribute to set a label for the checkbox',
        table: {
            type: { summary: TYPES.STRING },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    name: {
        name: 'data-vl-name',
        description: 'Attribute to the name of the checkbox',
        table: {
            type: { summary: TYPES.STRING },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
    single: {
        name: 'data-vl-single',
        description: 'Attribute to show a checkbox without label',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: 'Attributes',
            defaultValue: { summary: 'false' },
        },
    },
    value: {
        name: 'data-vl-value',
        description: 'Attribute to determine the value of the checkbox',
        table: {
            type: { summary: TYPES.STRING },
            category: 'Attributes',
            defaultValue: { summary: '' },
        },
    },
};
