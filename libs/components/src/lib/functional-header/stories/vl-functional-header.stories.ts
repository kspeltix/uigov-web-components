import { html, nothing } from 'lit-html';
import '../vl-functional-header.component';
import { Meta, StoryFn } from '@storybook/web-components';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import functionalHeaderDoc from './vl-functional-header.stories-doc.mdx';
import { functionalHeaderArgs, functionalHeaderArgTypes } from './vl-functional-header.stories-arg';

export default {
    title: 'Components/functional-header',
    argTypes: functionalHeaderArgTypes,
    parameters: {
        docs: { page: functionalHeaderDoc },
    },
} as Meta<typeof functionalHeaderArgs>;

const Template: StoryFn<typeof functionalHeaderArgs> = ({
    back,
    backLink,
    disableBackLink,
    link,
    subTitle,
    title,
    actionsSlot,
    backSlot,
    backLinkSlot,
    subHeaderSlot,
    subTitleSlot,
    titleSlot,
    topLeftSlot,
    topRightSlot,
    onClickBack,
}) => html`
    <vl-functional-header
        data-vl-back=${back || nothing}
        data-vl-back-link=${backLink || nothing}
        ?data-vl-disable-back-link=${disableBackLink}
        data-vl-link=${link || nothing}
        data-vl-sub-title=${subTitle || nothing}
        data-vl-title=${title || nothing}
        @vl-click-back=${onClickBack}
    >
        ${unsafeHTML(actionsSlot)}${unsafeHTML(backSlot)}${unsafeHTML(backLinkSlot)}${unsafeHTML(subHeaderSlot)}
        ${unsafeHTML(subTitleSlot)}${unsafeHTML(titleSlot)}${unsafeHTML(topLeftSlot)}${unsafeHTML(topRightSlot)}
    </vl-functional-header>
`;

export const FunctionalHeaderDefault = Template.bind({});
FunctionalHeaderDefault.storyName = 'vl-functional-header - default';
FunctionalHeaderDefault.args = {
    back: functionalHeaderArgs.back,
    backLink: functionalHeaderArgs.backLink,
    disableBackLink: functionalHeaderArgs.disableBackLink,
    link: functionalHeaderArgs.link,
    subTitle: functionalHeaderArgs.subTitle,
    title: functionalHeaderArgs.title,
    // Zet actionsSlot op 'nothing' zodat de volgorde van de categorieën blijft behouden.
    // @ts-ignore: Negeer de type-check van actionsSlot.
    actionsSlot: nothing,
    onClickBack: functionalHeaderArgs.onClickBack,
};

export const FunctionalHeaderActions = Template.bind({});
FunctionalHeaderActions.storyName = 'vl-functional-header - actions';
FunctionalHeaderActions.args = {
    back: functionalHeaderArgs.back,
    backLink: functionalHeaderArgs.backLink,
    disableBackLink: functionalHeaderArgs.disableBackLink,
    link: functionalHeaderArgs.link,
    subTitle: functionalHeaderArgs.subTitle,
    title: functionalHeaderArgs.title,
    actionsSlot: functionalHeaderArgs.actionsSlot,
    onClickBack: functionalHeaderArgs.onClickBack,
};

export const FunctionalHeaderSlots = Template.bind({});
FunctionalHeaderSlots.storyName = 'vl-functional-header - slots';
FunctionalHeaderSlots.args = {
    ...functionalHeaderArgs,
    back: '',
    backLink: '',
    disableBackLink: false,
    link: '',
    subTitle: '',
    title: '',
    actionsSlot: '',
};
