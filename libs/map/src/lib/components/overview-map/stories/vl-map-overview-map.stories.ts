import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb';
import '../../baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho';
import '../vl-map-overview-map';
import { Meta, StoryFn } from '@storybook/web-components';
import mapOverviewMapDoc from './vl-map-overview-map.stories-doc.mdx';

export default {
    title: 'map/overview-map',
    parameters: {
        docs: {
            page: mapOverviewMapDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta;

export const MapOverviewMapDefault: StoryFn = () => html`
    <vl-map>
        <vl-map-overview-map></vl-map-overview-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
`;
MapOverviewMapDefault.storyName = 'vl-map-overview-map - default';
