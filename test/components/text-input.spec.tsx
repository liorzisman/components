import React = require('react');

import { expect, ClientRenderer, sinon, waitFor, simulate } from 'test-drive-react';
import { TextInput } from '../../src/components';
import { Automation } from '../../src/common/automation';

describe('<TextInput />', () => {
  const clientRenderer = new ClientRenderer();

  afterEach(() => {
    clientRenderer.cleanup();
  });

  it('is rendered to the screen', () => {
    const { select, waitForDom } = clientRenderer.render(<TextInput value="Hello" onChange={() => {}} />);
    const textInput = select(Automation.TEXT_INPUT);

    return waitForDom(() => expect(textInput).to.be.present());
  });

  it('invokes the onChange when text is entered', () => {
    const onChange = sinon.spy();

    const { select } = clientRenderer.render(<TextInput value="" onChange={onChange} />);

    const textInput = select(Automation.TEXT_INPUT, 'NATIVE_INPUT') as HTMLInputElement;
    textInput.value = 'hello';
    simulate.change(textInput);

    return waitFor(() => expect(onChange).to.have.been.calledOnce);
  });
});

