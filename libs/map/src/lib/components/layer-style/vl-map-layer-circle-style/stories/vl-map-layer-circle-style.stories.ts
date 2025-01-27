import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../vl-map-layer-circle-style';
import { mapLayerCircleStyleArg, mapLayerCircleStyleArgTypes } from './vl-map-layer-circle-style.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';
import mapLayerCircleStyleDox from './vl-map-layer-circle-style.stories-doc.mdx';

export default {
    title: 'map/layer-style/layer-circle-style',
    args: mapLayerCircleStyleArg,
    argTypes: mapLayerCircleStyleArgTypes,
    parameters: {
        docs: {
            page: mapLayerCircleStyleDox,
        },
    },
} as Meta<typeof mapLayerCircleStyleArg>;

const Template: StoryFn<typeof mapLayerCircleStyleArg> = (args) => {
    const {
        borderColor,
        borderSize,
        clusterColor,
        clusterTextColor,
        color,
        name,
        size,
        textBackgroundColor,
        textBorderColor,
        textBorderSize,
        textColor,
        textFeatureAttributeName,
        textOffsetX,
        textOffsetY,
        textSize,
    } = setDefaultArgsToNothing(args, mapLayerCircleStyleArg);

    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147055.0, 197908.0],
                },
                properties: {
                    label: 'A',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [158755.0, 197208.0],
                },
                properties: {
                    label: 'B',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [158755.0, 187208.0],
                },
                properties: {
                    label: 'C',
                },
            },
        ],
    };

    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features}>
            <vl-map-layer-circle-style
                data-vl-border-color=${borderColor}
                data-vl-border-size=${borderSize}
                data-vl-cluster-color=${clusterColor}
                data-vl-cluster-text-color=${clusterTextColor}
                data-vl-color=${color}
                data-vl-name=${name}
                data-vl-size=${size}
                data-vl-text-background-color=${textBackgroundColor}
                data-vl-text-border-color=${textBorderColor}
                data-vl-text-border-size=${textBorderSize}
                data-vl-text-color=${textColor}
                data-vl-text-feature-attribute-name=${textFeatureAttributeName}
                data-vl-text-offset-x=${textOffsetX}
                data-vl-text-offset-y=${textOffsetY}
                data-vl-text-size=${textSize}
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
    </vl-map>`;
};

export const MapLayerCircleStyleDefault: StoryFn<typeof mapLayerCircleStyleArg> = Template.bind({});
MapLayerCircleStyleDefault.storyName = 'vl-map-layer-circle-style - default';
MapLayerCircleStyleDefault.args = {
    ...mapLayerCircleStyleArg,
    borderColor: 'rgba(0, 0, 0, 1)',
    color: 'rgba(255, 230, 21, 1)',
};

export const MapLayerCircleStyleText: StoryFn<typeof mapLayerCircleStyleArg> = Template.bind({});
MapLayerCircleStyleText.storyName = 'vl-map-layer-circle-style - text';
MapLayerCircleStyleText.args = {
    ...mapLayerCircleStyleArg,
    borderColor: 'rgba(0, 0, 0, 1)',
    color: 'rgba(255, 230, 21, 1)',
    size: 12,
    textFeatureAttributeName: 'label',
    textColor: '#000',
    textSize: '18px',
};

export const MapLayerCircleStyleClustered: StoryFn<typeof mapLayerCircleStyleArg> = (args) => {
    const {
        borderColor,
        borderSize,
        clusterColor,
        clusterTextColor,
        color,
        name,
        size,
        textBackgroundColor,
        textBorderColor,
        textBorderSize,
        textColor,
        textFeatureAttributeName,
        textOffsetX,
        textOffsetY,
        textSize,
    } = setDefaultArgsToNothing(args, mapLayerCircleStyleArg);

    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147055.0, 197908.0],
                },
                properties: {
                    label: 'A',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [158755.0, 197208.0],
                },
                properties: {
                    label: 'B',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [158755.0, 187208.0],
                },
                properties: {
                    label: 'C',
                },
            },
        ],
    };

    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features} data-vl-cluster data-vl-cluster-distance="100">
            <vl-map-layer-circle-style
                data-vl-border-color=${borderColor}
                data-vl-border-size=${borderSize}
                data-vl-cluster-color=${clusterColor}
                data-vl-cluster-text-color=${clusterTextColor}
                data-vl-color=${color}
                data-vl-name=${name}
                data-vl-size=${size}
                data-vl-text-background-color=${textBackgroundColor}
                data-vl-text-border-color=${textBorderColor}
                data-vl-text-border-size=${textBorderSize}
                data-vl-text-color=${textColor}
                data-vl-text-feature-attribute-name=${textFeatureAttributeName}
                data-vl-text-offset-x=${textOffsetX}
                data-vl-text-offset-y=${textOffsetY}
                data-vl-text-size=${textSize}
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
    </vl-map>`;
};
MapLayerCircleStyleClustered.storyName = 'vl-map-layer-circle-style - clustered';
MapLayerCircleStyleClustered.args = {
    ...mapLayerCircleStyleArg,
    borderColor: 'rgba(0, 0,0,1)',
    color: 'rgba(255, 230, 21, 1)',
    size: 12,
    textFeatureAttributeName: 'label',
    textColor: '#000',
    textSize: '18px',
};
