import { BaseElementOfType, define } from '@domg-wc/common-utilities';
import './vl-step.component';
import './vl-duration-step.component';
import styles from './style/vl-steps.scss';

/**
 * VlSteps
 * @class
 * @classdesc De steps component bevat een verticale lijst van genummerde stappen. Stappen kunnen gebruikt worden om de gebruiker stap voor stap door een procedure te begeleiden.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-timeline - Attribuut wordt gebruikt om aan te geven dat de stappen een tijdlijn voorstellen.
 */
export class VlStepsComponent extends BaseElementOfType(HTMLElement) {
    static get _observedChildClassAttributes() {
        return ['timeline'];
    }

    constructor() {
        super(`
      <style>
        ${styles}
      </style>
      <ul id="steps" class="vl-steps"></ul>
    `);
    }

    connectedCallback() {
        this._observer = this.__observeChildElements(() => this._processSteps());
        this._processSteps();
    }

    disconnectedCallback() {
        this._observer.disconnect();
    }

    get _stepsElement() {
        return this._shadow.querySelector('#steps');
    }

    get _classPrefix() {
        return 'vl-steps--';
    }

    _processSteps() {
        customElements.whenDefined('vl-step').then(() => {
            customElements.whenDefined('vl-duration-step').then(() => {
                this._stepsElement.innerHTML = ``;
                this.querySelectorAll('vl-step, vl-duration-step').forEach((item: any) =>
                    this._stepsElement.append(item.template)
                );
            });
        });
    }

    __observeChildElements(callback: MutationCallback) {
        const node = this as unknown as Node;
        const observer = new MutationObserver(callback);
        observer.observe(node, { childList: true, attributes: true, subtree: true, characterData: true });
        return observer;
    }
}

define('vl-steps', VlStepsComponent);
