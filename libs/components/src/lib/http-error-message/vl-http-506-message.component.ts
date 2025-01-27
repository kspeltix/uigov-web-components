import { webComponentPromised } from '@domg-wc/common-utilities';
import { baseStyle } from '@domg/govflanders-style/common';
import { buttonStyle } from '@domg/govflanders-style/component';
import { CSSResult, html, LitElement, TemplateResult } from 'lit';

@webComponentPromised([customElements.whenDefined('vl-http-error-message')], 'vl-http-506-message')
export class VlHttp506Message extends LitElement {
    static get styles(): CSSResult[] {
        return [baseStyle, buttonStyle];
    }

    protected render(): TemplateResult {
        return html`
            <vl-http-error-message
                data-vl-title="Interne configuratiefout"
                data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
                data-vl-image-alt="Interne configuratiefout"
            >
                <p slot="text">
                    Er ging iets fout.
                    <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 506">Mail de helpdesk</a> en vermeld
                    daarbij de URL hierboven en de foutcode 506.
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
        'vl-http-506-message': VlHttp506Message;
    }
}
