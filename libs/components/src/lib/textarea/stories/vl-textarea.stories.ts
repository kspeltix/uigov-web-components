import { html } from 'lit-html';
import '../vl-textarea.element';
import { textareaArgs, textareaArgTypes } from './vl-textarea.stories-arg';
import { StoryFn } from '@storybook/web-components';
import textAreaDoc from './vl-textarea.stories-doc.mdx';
import { nothing } from 'lit';

export default {
    title: 'Components/textarea',
    args: textareaArgs,
    argTypes: textareaArgTypes,
    parameters: {
        docs: { page: textAreaDoc },
    },
};

const Template: StoryFn<typeof textareaArgs> = ({
    rich,
    block,
    error,
    success,
    disabled,
    focus,
    toolbar,
    readonly,
}) => html`
    <textarea
        id="textarea-rich"
        is="vl-textarea"
        cols="40"
        rows="50"
        ?data-vl-rich=${rich}
        ?data-vl-block=${block}
        ?data-vl-error=${error}
        ?data-vl-success=${success}
        ?data-vl-disabled=${disabled}
        ?data-vl-focus=${focus}
        ?data-vl-readonly=${readonly}
        data-vl-toolbar=${toolbar || nothing}
    >
      <p>
          <h1>h1 title</h1>
          <h2>h2 title</h2>
          <h3>h3 title</h3>
          <h4>h4 title</h4>
          <h5>h5 title</h5>
          <h6>h6 title</h6>
      </p>
      <p><b>b-tag</b></p>
      <p><i>i-tag</i></p>
      <p><u>u-tag</u></p>
      <p><hr/></p>
      <p><s>s-tag</s></p>
      <p><blockquote>blockquote-tag</blockquote></p>
      <p><hr/></p>
      <p>
          <ul>
              <li>unsorted list item</li>
              <li>unsorted list item</li>
              <ul>
                  <li>unsorted list subitem</li>
                  <li>unsorted list subitem</li>
              </ul>
              <li>unsorted list item</li>
          </ul>
      </p>
      <p><hr/></p>
      <p>
          <ol>
              <li>ordered list item</li>
              <li>ordered list item</li>
              <ol>
                  <li>ordered list subitem</li>
                  <li>ordered list subitem</li>
              </ol>
              <li>ordered list item</li>
          </ol>
      </p>
  </textarea
    >
`;

export const TextareaDefault = Template.bind({});
TextareaDefault.storyName = 'vl-textarea - default';
TextareaDefault.args = {
    disabled: false,
    focus: false,
};

export const TextareaRich = Template.bind({});
TextareaRich.storyName = 'vl-textarea - rich';
TextareaRich.args = {
    rich: true,
    toolbar: 'undo redo | bold italic underline strikethrough',
};
