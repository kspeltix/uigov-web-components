import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../action/draw-action/draw-polygon-action/vl-map-draw-polygon-action';
import '../../../action/layer-action/delete-action/vl-map-delete-action';
import '../../../action/layer-action/modify-action/vl-map-modify-action';
import '../../vl-map-action-controls';
import '../vl-map-action-control';
import { Meta, StoryFn } from '@storybook/web-components';
import actionControlDoc from './vl-map-action-control.stories-doc.mdx';
import { mapActionControlArgs, mapActionControlArgTypes } from './vl-map-action-control.stories-arg';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'map/controls/action-control',
    args: mapActionControlArgs,
    argTypes: mapActionControlArgTypes,
    parameters: {
        docs: {
            page: actionControlDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof mapActionControlArgs>;

const Template: StoryFn<typeof mapActionControlArgs> = (args) => {
    const { actionId, icon, label } = setDefaultArgsToNothing(args, mapActionControlArgs);

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id=${actionId}></vl-map-draw-polygon-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control
                    data-vl-action-id=${actionId}
                    data-vl-icon=${icon}
                    data-vl-label=${label}
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    `;
};

export const MapActionControlDefault = Template.bind({});
MapActionControlDefault.storyName = 'vl-map-action-control - default';
MapActionControlDefault.args = {
    actionId: 'draw-polygon-action',
    label: 'Teken',
};

export const MapActionControlIcon = Template.bind({});
MapActionControlIcon.storyName = 'vl-map-action-control - icon';
MapActionControlIcon.args = {
    actionId: 'draw-polygon-action',
    icon: 'pencil',
};

export const MapActionControlMultiple = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
            <vl-map-modify-action id="modify-action"></vl-map-modify-action>
            <vl-map-delete-action id="delete-action"></vl-map-delete-action>
        </vl-map-features-layer>
        <vl-map-action-controls>
            <vl-map-action-control data-vl-action-id="draw-action" data-vl-label="Teken"></vl-map-action-control>
            <vl-map-action-control data-vl-action-id="modify-action" data-vl-label="Editeer"></vl-map-action-control>
            <vl-map-action-control data-vl-action-id="delete-action" data-vl-label="Verwijder"></vl-map-action-control>
        </vl-map-action-controls>
    </vl-map>
`;
MapActionControlMultiple.storyName = 'vl-map-action-control - multiple';
