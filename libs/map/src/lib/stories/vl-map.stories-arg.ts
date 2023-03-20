import { action } from '@storybook/addon-actions';
import { EVENT } from '../vl-map.model';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const mapArgs = {
    allowFullscreen: false,
    disableEscape: false,
    disableRotation: false,
    disableMousewheelZoom: false,
    disableKeyboard: false,
    fullHeight: false,
    noBorder: false,
    activeActionChange: action(EVENT.ACTIVE_ACTION_CHANGED),
    layerVisibleChange: action(EVENT.LAYER_VISIBLE_CHANGED),
};

export const mapArgTypes: ArgTypes<typeof mapArgs> = {
    allowFullscreen: {
        name: 'data-vl-allow-fullscreen',
        description: 'Laat de map toe afgebeeld te worden in fullscreen.<br>Dit kan niet gebruikt worden op mobile.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disableEscape: {
        name: 'data-vl-disable-escape-key',
        description: 'Schakelt de escape-key uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disableRotation: {
        name: 'data-vl-disable-rotation',
        description: 'Schakelt het roteren van de map uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disableMousewheelZoom: {
        name: 'data-vl-disable-mouse-wheel-zoom',
        description: 'Schakelt het zoomen van de map via het muiswiel uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    disableKeyboard: {
        name: 'data-vl-disable-keyboard',
        description: 'Schakelt de keyboard input uit voor de map.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    fullHeight: {
        name: 'data-vl-full-height',
        description:
            'De map neemt de volledige beschikbare hoogte in van zijn parent.<br>Zie de docs pagina voor meer informatie over het gebruik van dit attribuut.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    noBorder: {
        name: 'data-vl-no-border',
        description: 'De border rond de map wordt niet afgebeeld.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    activeActionChange: {
        name: EVENT.ACTIVE_ACTION_CHANGED,
        description: 'Afgevuurd als de huidige actieve actie verandert.',
        table: {
            type: { summary: '{ previous: VlMapAction, current: VlMapAction }' },
            category: CATEGORIES.EVENTS,
        },
    },
    layerVisibleChange: {
        name: EVENT.LAYER_VISIBLE_CHANGED,
        description: 'Afgevuurd als de visible state van een layer verandert.',
        table: {
            type: { summary: '{ layer: VlMapLayer, visible: boolean }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
