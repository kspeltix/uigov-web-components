import { formatHTML } from '@domg-wc/common-utilities';
import './docs-styling.css';
import vlElementsStyle from '../../../libs/elements/src/lib/vl-elements.uig-css';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: true,
        sort: 'alpha',
    },
    docs: {
        transformSource: formatHTML,
    },
};
