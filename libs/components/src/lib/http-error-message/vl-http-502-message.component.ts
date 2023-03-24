import { webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html, LitElement } from 'lit';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-502-message')
export class VlHttp502Message extends LitElement {
    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    render() {
        return html`
            <vl-http-error-message
                data-vl-title="Tijdelijk niet bereikbaar"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Tijdelijk niet bereikbaar"
            >
                <p slot="text">
                    De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen:
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 502">mail dan de helpdesk</a> en
                    vermeld daarbij de URL hierboven en de foutcode 502.
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
        'vl-http-502-message': VlHttp502Message;
    }
}
