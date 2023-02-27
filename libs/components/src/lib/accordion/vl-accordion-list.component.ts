/* eslint-disable no-undef */
import '@govflanders-v14/vl-ui-accordion/dist/js/accordion.js';
import styles from './style/vl-accordion.scss';
import 'reflect-metadata';
import { html, LitElement, TemplateResult, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * VlAccordionList

 */

@customElement('vl-accordion-list')
export class VlAccordionListComponent extends LitElement {
    private bordered = false;

    static get properties() {
        return {
            bordered: {
                type: Boolean,
                attribute: 'data-vl-bordered',
                reflect: true,
            },
        };
    }

    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    firstUpdated() {
        const observer = new MutationObserver(() => {
            this.requestUpdate();
        });
        observer.observe(this, { subtree: true, childList: true });
    }

    //TODO: rerender on children change.
    protected render(): TemplateResult {
        this.children;
        return html`
            <ul class="vl-accordion-list ${this.bordered ? 'vl-accordion-list--bordered' : ''}">
                ${[...Array.from(this.children)].map((child, index) => {
                    const name = `item-${index}`;
                    child.setAttribute('slot', name);
                    return html`
                        <li id="${name}" class="vl-accordion-list__item">
                            <slot name="${name}" @slotchange="${this.onSlotChange}"> </slot>
                        </li>
                    `;
                })}
            </ul>
        `;
    }

    // Renders on delete of pre-existing, but not when adding
    onSlotChange() {
        this.requestUpdate();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-accordion-list': VlAccordionListComponent;
    }
}
