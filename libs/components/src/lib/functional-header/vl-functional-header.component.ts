import { BaseElementOfType, MARGINS, webComponent } from '@domg-wc/common-utilities';
import functionalHeaderUigStyle from './vl-functional-header.uig-css';
import { functionalHeaderStyle } from '@domg/govflanders-style/component';
import { baseStyle, elementStyle, layoutStyle, resetStyle } from '@domg/govflanders-style/common';

/**
 * VlFunctionalHeader
 * @class
 * @classdesc Toont bovenaan de pagina generieke informatie zonder af te leiden zoals bijvoorgeeld titel, acties, tab navigatie of zoek input.
 *
 * @property {String} data-vl-back - Tekst van de terug-link.
 * @property {String} data-vl-back-link - URL van de terug-link..
 * @property {String} data-vl-disable-back-link - Zet de terug link uit.
 * @property {String} data-vl-link - URL van de titel-link.
 * @property {String} data-vl-sub-title - Tekst van de subtitel.
 * @property {String} data-vl-title - Tekst van de titel.
 *
 * @extends HTMLElement
 * @mixes vlElement
 */
@webComponent('vl-functional-header')
export class VlFunctionalHeaderComponent extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['back', 'back-link', 'disable-back-link', 'link', 'margin-bottom', 'sub-title', 'title'];
    }

    static get _observedClassAttributes() {
        return ['full-width'];
    }

    get _classPrefix() {
        return 'vl-functional-header--';
    }

    constructor() {
        super(`
      <style>
        ${resetStyle}
        ${baseStyle}
        ${layoutStyle}
        ${elementStyle}
        ${functionalHeaderStyle}
        ${functionalHeaderUigStyle}
      </style>
      <header class="vl-functional-header">
        <div class="vl-layout">
          <div class="vl-functional-header__row uig-functional-header__row">
            <div class="uig-functional-header__content">
                <div class="vl-functional-header__content">
                    <slot name="top-left"></slot>
                </div>
                <div class="vl-functional-header__content">
                    <div class="vl-title">
                        <a id="title" class="vl-functional-header__title" tabindex="0">
                            <slot name="title"></slot>
                        </a>
                    </div>
                </div>
            </div>
            <div class="uig-functional-header__top-right">
                <slot name="top-right"></slot>
            </div>
            <div id="actions" class="vl-functional-header__actions">
                <ul></ul>
            </div>
          </div>
          <div class="vl-functional-header__sub" id="sub-header">
            <slot name="sub-header">
              <ul class="vl-functional-header__sub__actions">
                  <li class="vl-functional-header__sub__action">
                      <slot name="back-link">
                          <a id="back-link" is="vl-link" tabindex="0" href="${document.referrer}">
                              <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
                              <slot id="back-link-text" name="back"><span>Terug</span></slot>
                          </a>
                      </slot>
                  </li>
                  <li id="sub-title" class="vl-functional-header__sub__action">
                      <slot name="sub-title"></slot>
                  </li>
              </ul>
            </slot>
          </div>
        </div>
      </header>
    `);
    }

    connectedCallback() {
        this._observer = this.__observeSlotElements(() => this.__processSlotElements());
        this.__processSlotElements();
        this._backLinkElement.onclick = (event: Event) => this._handleClickBackLink(event);
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    get _titleElement() {
        return this._shadow.querySelector('#title');
    }

    get _subTitleElement() {
        return this._shadow.querySelector('#sub-title');
    }

    get _backLinkElement() {
        return this._shadow.querySelector('#back-link');
    }

    get _backLinkTextElement() {
        return this._backLinkElement.querySelector('#back-link-text');
    }

    get _actionsElement() {
        return this._shadow.querySelector('#actions');
    }

    get _subHeaderElement() {
        return this._shadow.querySelector('#sub-header');
    }

    get _defaultSubHeaderElement() {
        return this._shadow.querySelector('#default-sub-header');
    }

    get _actionsListElement() {
        return this._actionsElement.querySelector('ul');
    }

    get _subHeaderListElement() {
        return this._subHeaderElement.querySelector('ul');
    }

    get _subTitleListElements() {
        return this._subTitleListElement.querySelectorAll('li');
    }

    _getActionTemplate(element: Element) {
        return this._template(`
      <li class="vl-functional-header__action">
        <p>${element.outerHTML}</p>
      </li>
    `);
    }

    _getSubHeaderTemplate(element: Element) {
        return this._getSubHeaderTemplateWithValue(element.outerHTML);
    }

    _getSubHeaderTemplateWithValue(text: string) {
        return this._template(`<li class="vl-functional-header__sub__action">${text}</li>`);
    }

    _titleChangedCallback(oldValue: string, newValue: string) {
        this._titleElement.innerText = newValue;
    }

    _subTitleChangedCallback(oldValue: string, newValue: string) {
        this._subTitleElement.innerText = newValue;
    }

    _linkChangedCallback(oldValue: string, newValue: string) {
        this._titleElement.href = newValue;
    }

    _backChangedCallback(oldValue: string, newValue: string) {
        this._backLinkTextElement.innerText = newValue;
    }

    _backLinkChangedCallback(oldValue: string, newValue: string) {
        this._backLinkElement.href = newValue || document.referrer;
    }

    _marginBottomChangedCallback(oldValue: string, newValue: string) {
        const margin = MARGINS[newValue];
        const header = this._shadow.querySelector('.vl-functional-header');

        if (margin) {
            header.style.marginBottom = margin;
        } else {
            header.style.removeProperty('margin-bottom');
        }
    }

    _handleClickBackLink(event: Event) {
        if (this.hasAttribute('disable-back-link')) {
            event.preventDefault();
        }

        this.dispatchEvent(
            new CustomEvent('vl-click-back', {
                bubbles: true,
                composed: true,
            })
        );
    }

    /**
     * Zet de click event listener voor de 'Terug' knop. Default: ```document.referrer```
     *
     * @param {Function} eventListener - Functie met de uit te voeren handeling als op de terug knop wordt geklikt.
     */
    set backLinkEventListener(eventListener: EventListener) {
        if (this._backLinkEventListener) {
            this._backLinkElement.removeEventListener('click', this._backLinkEventListener);
        }
        this._backLinkEventListener = eventListener;
        this._backLinkElement.addEventListener('click', this._backLinkEventListener);
    }

    __processSlotElements() {
        this.__processSlotActions();
    }

    __processSlotSubHeader() {
        this._subHeaderListElement.innerHTML = '';
        const subHeader = this.querySelector('[slot="sub-header"]');
        if (subHeader) {
            [...subHeader.children]
                .map((action) => this._getSubHeaderTemplate(action))
                .forEach((action) => this._subHeaderListElement.append(action));
            this._defaultSubHeaderElement.hidden = true;
        } else {
            this._subHeaderElement.hidden = true;
        }
    }

    __processSlotActions() {
        this._actionsListElement.innerHTML = '';
        const actions = this.querySelector('[slot="actions"]');
        if (actions) {
            [...actions.children]
                .map((action) => this._getActionTemplate(action))
                .forEach((action) => this._actionsListElement.append(action));
        } else {
            this._actionsElement.hidden = true;
        }
    }

    __observeSlotElements(callback: MutationCallback) {
        const node = this as unknown as Node;
        const observer = new MutationObserver(callback);
        observer.observe(node, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
        });
        return observer;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-functional-header': VlFunctionalHeaderComponent;
    }
}
