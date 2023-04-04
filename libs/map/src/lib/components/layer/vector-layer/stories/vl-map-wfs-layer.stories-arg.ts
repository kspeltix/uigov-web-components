import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { layerArgTypes, layerArgs } from '../../stories/vl-map-layer.stories-arg';
import { ArgTypes } from '@storybook/web-components';

export const wfsLayerArgs = {
    ...layerArgs,
    layers: '',
    url: '',
};

export const wfsLayerArgTypes: ArgTypes<typeof wfsLayerArgs> = {
    ...layerArgTypes,
    layers: {
        name: 'data-vl-layers',
        description: 'De layers van de WFS.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    url: {
        name: 'data-vl-url',
        description: 'De WFS url.<br>Dit attribuut is niet reactief.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
