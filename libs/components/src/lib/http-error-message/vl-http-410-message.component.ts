import { webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html, LitElement } from 'lit';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-410-message')
export class VlHttp410Message extends LitElement {
    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Pagina bestaat niet meer"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg"
                data-vl-image-alt="Verzoek bestaat niet meer"
            >
                <p slot="text">
                    Deze pagina bestaat niet meer.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 410">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 410.
                </p>
                <div slot="actions">
                    <a is="vl-link-button" href="/">Terug naar de startpagina</a>
                </div>
            </vl-http-error-message>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-http-410-message': VlHttp410Message;
    }
}
