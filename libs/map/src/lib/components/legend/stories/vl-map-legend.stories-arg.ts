import { ArgTypes } from '@storybook/web-components';
import { LEGEND_PLACEMENT } from '../vl-map-legend';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const mapLegendArgs = {
    bottom: '',
    left: '',
    placement: LEGEND_PLACEMENT.BOTTOM_RIGHT,
    right: '',
    top: '',
};

export const mapLegendArgTypes: ArgTypes<typeof mapLegendArgs> = {
    bottom: {
        name: 'bottom',
        description:
            'Bepaalt de "bottom" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.bottom },
        },
    },
    left: {
        name: 'left',
        description:
            'Bepaalt de "left" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.left },
        },
    },
    placement: {
        name: 'data-vl-placement',
        description: 'Bepaalt de plaats van de legende op de kaart.',
        control: {
            type: 'select',
            options: [
                LEGEND_PLACEMENT.TOP_LEFT,
                LEGEND_PLACEMENT.TOP_RIGHT,
                LEGEND_PLACEMENT.BOTTOM_LEFT,
                LEGEND_PLACEMENT.BOTTOM_RIGHT,
            ],
        },
        table: {
            type: {
                summary: `"${LEGEND_PLACEMENT.TOP_LEFT}" | 
                "${LEGEND_PLACEMENT.TOP_RIGHT}" | 
                "${LEGEND_PLACEMENT.BOTTOM_LEFT}" | 
                "${LEGEND_PLACEMENT.BOTTOM_RIGHT}"`,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.placement },
        },
    },
    right: {
        name: 'right',
        description:
            'Bepaalt de "right" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.right },
        },
    },
    top: {
        name: 'top',
        description:
            'Bepaalt de "top" positie van de legende op de kaart.<br>Kan gebruikt worden in combinatie met data-vl-placement.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapLegendArgs.top },
        },
    },
};
