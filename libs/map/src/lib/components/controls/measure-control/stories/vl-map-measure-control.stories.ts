import { html } from 'lit-html';
import '../../../../vl-map';
import '../../vl-map-action-controls';
import '../vl-map-measure-control';
import '../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../action/draw-action/measure-action/vl-map-measure-action';
import measureControlDoc from './vl-map-measure-control.stories-doc.mdx';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
    title: 'map/controls/measure-control',
    parameters: {
        docs: {
            page: measureControlDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta;

export const MapMeasureControlDefault: StoryFn = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
    </vl-map>
`;
MapMeasureControlDefault.storyName = 'vl-map-measure-control - default';
